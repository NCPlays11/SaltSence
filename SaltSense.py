from flask import Flask, render_template, jsonify, redirect, flash, request, url_for
import pandas as pd
import os
import csv

app = Flask(__name__)

# app.secret_key = os.urandom(64)

app.secret_key = 'FTYUJLGTCKJHBVijufewnjv832ur5456e4w58hvb4o5'
file_path = os.path.join(app.root_path, "static", "desalination_data.csv")
df = pd.read_csv(file_path)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("About.html")

@app.route("/faq")
def faq():
    return render_template("FAQ.html", name="FAQ", title="FAQ")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

@app.route("/learn")
def learn():
    return render_template("learn.html", regions=["Middle East", "North America", "Asia Pacific", "Europe", "Africa"])

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/data")
def get_data():
    data = df.to_dict(orient="records")
    return jsonify(data)

@app.route('/region/<region_name>')
def region_charts(region_name):
    region_data = df[df['Region'] == region_name].to_dict(orient='records')
    return render_template('region_charts.html', region=region_name, data=region_data)

# Subscribe
@app.route('/subscribe', methods=['POST'])
def subscribe():
    email = request.form.get('email')
    if email:
        # Define the file path within the 'static' directory
        file_path = os.path.join(app.root_path, "static", "subscribers.csv")
        # Save the email to the CSV file
        with open(file_path, 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([email])
        
        # Flash a success message
        flash('You have successfully subscribed!', 'success')
    else:
        flash('Please provide a valid email address.', 'danger')
    
    return redirect(url_for('home'))

@app.route("/join")
def join():
    return render_template("join.html")


@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html")

if __name__ == "__main__":
    app.run(debug=True)

    
