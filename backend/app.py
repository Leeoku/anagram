from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from anagram import *
app = Flask(__name__)
CORS(app)

anagram_checker = AnagramCheck()

@app.route('/', methods = ['POST', 'GET'])
def home():
    words = request.get_json()
    print(words)
    first_word = words['firstWord']
    second_word = words['secondWord']
    result = anagram_checker.is_anagram(first_word, second_word)
    print(result)
    return str(result)

@app.route('/top')
def get_top_searches():
    print(anagram_checker.get_anagram_count_top(10))
    return jsonify(anagram_checker.get_anagram_count_top(10))
if __name__ == '__main__':
    app.run(debug = True)