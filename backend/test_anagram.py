import unittest
from anagram import AnagramCheck
from collections import Counter

class TestAnagramCheck(unittest.TestCase):
    anagram_counter = Counter()
    def test_is_anagram(self):
        #Incorrect test case
        test_first_word = "wolf"
        test_second_word = "owl"
        result_incorrect = AnagramCheck.is_anagram(self,test_first_word, test_second_word)
        self.assertFalse(result_incorrect)
        #Correct test case
        test_third_word = "wolf"
        test_fourth_word = "flow"
        result_correct = AnagramCheck.is_anagram(self,test_third_word, test_fourth_word)
        self.assertTrue(result_correct)

if __name__ == '__main__':
    unittest.main()
    