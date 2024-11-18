from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", name="index", title="Home")

@app.route("/desalinization")
def desalinization():
    return render_template("Desalinization.html", name="Desalinization", title="Desalinization")

@app.route("/about")
def about():
    return render_template("About.html", name="About", title="About")

@app.route("/data-and-statistics")
def data_and_statistics():
    return render_template("Data-and-Statistics.html", name="Data-and-Statistics", title="Data And Statistics")

# TODO: Ask how to do this.
# @app.route("/faq")
# def faq():
#     return render_template("FAQ.html", name="FAQ", title="FAQ")

if __name__ == "__main__":
    app.run(debug=True)