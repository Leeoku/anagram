# Take in two words and determine if they are anagram

class AnagramCheck:
    def is_anagram(self, first_word, second_word):
        seen = {}
        # add all of first_word to dict
        for i in first_word:
            if i not in seen:
                seen[i] = 0
            seen[i] +=1
        # compare letters in second_word and subtract
        for j in second_word:
            if j not in seen:
                # print("FALSE")
                return False
            else:
                seen[j] -= 1
        #check to see if all letters are 0
        # print(not any(seen.values()))
        return (not any(seen.values()))

s = "wolf"
t= "owl"
AnagramCheck().is_anagram( s,t)