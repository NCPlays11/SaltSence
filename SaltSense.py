from flask import Flask, render_template, jsonify, redirect
import pandas as pd
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("About.html")

@app.route("/faq")
def faq():
    return render_template("FAQ.html", name="FAQ", title="FAQ")

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')


@app.route('/data')
def get_data():
    file_path = os.path.join(app.root_path, 'static', 'desalination_data.csv')
    df = pd.read_csv(file_path)
    data = df.to_dict(orient='records')
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)

    
