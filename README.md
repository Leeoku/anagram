# Anagram Checker

## Project Overview

This is a simple web app to check if two words being inputted are inputted. **Note there is no API added to check if inputs are valid words**

![Alt text](/anagram.png "Anagram Sample Image")

## Technologies

- React.js with:
  - Material UI
  - Axios HTTP client
- Python with:
  - Flask for REST APIs

## Setup

- Clone repository to working area
- Backend
  - Change working terminal to the backend folder
  - Start a virtual environment `python3 -m venv env`
  - Install requirements `pip install requirements.txt`
- Frontend
  - Change working terminal to frontend folder
  - Install dependencies with `yarn install`

## Running the app locally

- Open two terminals with working directory in `"./anagrams/frontend"`
- With the first terminal, run the frontend server with `yarn start`
- With the second terminal, run the backend server with `yarn start-api`. This will run the virtual environment assuming it is named **env**

## Testing

- Backend
  - Ensure you are in the backend folder with virtual environment enabled
  - `python3 -m unittest`

- Frontend
  - Ensure your are in the frontend folder
  - `yarn test`

## Contributors

Kenneth Lee

## License

MIT © Kenneth "Leeoku" Lee
