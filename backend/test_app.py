import unittest, requests, json
from unittest import mock

class TestApp(unittest.TestCase):
    FLASK_URL = "http://127.0.0.1:5000/"

    # Test the route defined by home for status code and correct JSON values passed
    # @responses.activate
    def test_home(self):
        # words = json.dumps({first_word: "wolf", second_word: "owl"})
        # r = requests.post(TestApp.FLASK_URL, data = words)

        # print(r)
        # self.assertEqual(r.status_code, 200)
        pass

if __name__ == '__main__':
    unittest.main()