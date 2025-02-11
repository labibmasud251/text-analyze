# Text Analyzer API

A RESTful API service that analyzes text content, providing statistics like word count, character count, sentence count, paragraph count, and longest word.

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm

## Setup

1. Clone the repository:

git clone https://github.com/labibmasud251/text-analyze

cd text-analyze

2. Install dependencies:

npm install

3. Create a `.env` file in the root directory with the following content:

```
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=text_analyzer
```

4. Set up the database:

CREATE DATABASE text_analyzer

```bash
# Run migrations
npm run migrate

```

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run start` - Build and starts the application for Production
- `npm test` - Run tests
- `npm run migrate` - Run database migrations

## API Endpoints

- `POST text/add_text` - Add new text for analysis
- `GET text` - Get all text entries
- `GET /analyze/get_word_count/:id` - Get the word count
- `GET /analyze/get_character_count/:id` - Get the character count
- `GET /analyze/get_sentence_count/:id` - Get the sentence count
- `GET /analyze/get_paragraph_count/:id` - Get the paragraph count
- `GET /analyze/get_longest_words/:id` - Get the longest words

## Running Tests

```bash
npm test
```

## Development

To start the development server with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## Build

To build the project:

```bash
npm run build
```

The compiled files will be in the `dist` directory.

## Production

To run in production:

```bash
npm run build
npm start
```
