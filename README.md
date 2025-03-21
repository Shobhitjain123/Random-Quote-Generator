# Quote Generator

A simple web-based Quote Generator that fetches random quotes and displays them with dynamically changing background images. The application allows users to copy quotes, download the background image, and post the quote on X (formerly Twitter).

## Features

- Fetches a random quote from the [Free API](https://api.freeapi.app/api/v1/public/quotes/quote/random)
- Dynamically updates background images using [Picsum Photos](https://picsum.photos)
- Copy the displayed quote to the clipboard
- Download the background image as a PNG
- Post the quote on X (Twitter)

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- [html2canvas](https://html2canvas.hertzen.com/) for capturing the background image

## Folder Structure
```
|-- index.html        # Main HTML file
|-- index.css         # Stylesheet
|-- index.js          # JavaScript logic
|-- package.json      # Project configuration
```

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/quote-generator.git
cd quote-generator
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Project
If using a local server, start it with:
```sh
npx http-server
```
Then, open `http://localhost:8080` in your browser.

## Usage

- Click **New Quote** to fetch a new quote and background image.
- Click **Copy** to copy the quote text.
- Click **Download Image** to save the background image.
- Click **Post on X** to share the quote on X (Twitter).

## License
This project is licensed under the MIT License.

---
Made with ❤️ by Shobhit Jain

