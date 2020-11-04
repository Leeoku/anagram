from flask import Flask, render_template, jsonify
from anagram import *
app = Flask(__name__)

anagram_checker = AnagramCheck()

# @app.route('/')
# def hello_world():
#     s = "wolf"
#     # t= "owl"
#     t = "flow"
#     result = AnagramCheck().is_anagram( s,t)
#     count = AnagramCheck().anagram_count(s,t)
#     # if result is True:
#     #     anagram_list.pu
#     # return render_template('index.html')
#     # return "HELLO WORLD"
#     return str(result, count)

@app.route('/')
def hello_world():
    s = "wolf"
    t = "owl"
    result = anagram_checker.is_anagram(s, t)
    return str(result)

@app.route('/top')
def get_top_searches():
    return jsonify(anagram_checker.get_anagram_count_top(10))
if __name__ == '__main__':
    app.run(debug = True)