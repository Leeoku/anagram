from flask import Flask, render_template
app = Flask(__name__)

@app.route('/api')
def hello_world():
    # return render_template('index.html')
    return "HELLO WORLD"

if __name__ == '__main__':
    app.run(debug = True)