from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from anagram import *
app = Flask(__name__)
CORS(app)

anagram_checker = AnagramCheck()

@app.route('/', methods = ['POST'])
def home():
    # Expected JSON POST response from React
    # {
    # firstWord: firstWord,
    # secondWord: secondWord,
    # }
    words = request.get_json()
    first_word = words['firstWord']
    second_word = words['secondWord']
    result = anagram_checker.is_anagram(first_word, second_word)
    return str(result)

@app.route('/top', methods = ['GET', 'POST'])
def get_top_searches():
    if request.method == 'POST':
        anagram_checker.reset_anagram()
        return jsonify(anagram_checker.get_anagram_count_top(10))
    if request.method == 'GET':
        # Method to get the top 10 searches for anagrams
        return jsonify(anagram_checker.get_anagram_count_top(10))

    
if __name__ == '__main__':
    app.run(debug = True)