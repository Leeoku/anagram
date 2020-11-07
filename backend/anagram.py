from collections import Counter

class AnagramCheck:
    def __init__(self):
        self.anagram_counter = Counter()
# Take in two words and determine if they are anagram
    def is_anagram(self, first_word, second_word):
        first_word = first_word.lower()
        second_word = second_word.lower()
        first_counter = Counter(first_word)
        second_counter = Counter(second_word)
        self.anagram_counter[first_word, second_word] += 1
        return first_counter == second_counter
#Take the counter object of all words and return top searches    
    def get_anagram_count_top(self, n):
        return self.anagram_counter.most_common(n)