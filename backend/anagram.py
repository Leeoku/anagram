from collections import Counter

class AnagramCheck:
    def __init__(self):
        self.anagram_counter = Counter()
# Take in two words and determine if they are anagram
    def is_anagram(self, first_word, second_word):
        first_counter = Counter(first_word)
        second_counter = Counter(second_word)
        self.anagram_counter[first_word, second_word] += 1
        return first_counter == second_counter
#Take the counter object of all words and return top searches    
    def get_anagram_count_top(self, n):
        return self.anagram_counter.most_common(n)

# Alternate algorithim to determine if word is anagram
    # seen = {}
    # # add all of first_word to dict
    # for i in first_word:
    #     if i not in seen:
    #         seen[i] = 0
    #     seen[i] +=1
    # # compare letters in second_word and subtract
    # for j in second_word:
    #     if j not in seen:
    #         # print("FALSE")
    #         return False
    #     else:
    #         seen[j] -= 1
    # #check to see if all letters are 0
    # # print(not any(seen.values()))
    # return (not any(seen.values()))