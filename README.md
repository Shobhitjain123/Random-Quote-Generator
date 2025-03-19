Quote Generator

A simple web-based Quote Generator that fetches random quotes and displays them with dynamically changing background images. The application allows users to copy quotes, download the background image, and post the quote on X (formerly Twitter).

Features

Fetches a random quote from the Free API

Dynamically updates background images using Picsum Photos

Copy the displayed quote to the clipboard

Download the background image as a PNG

Post the quote on X (Twitter)

Technologies Used

HTML

CSS

JavaScript (ES6+)

html2canvas for capturing the background image

Folder Structure

|-- index.html        # Main HTML file
|-- index.css         # Stylesheet
|-- index.js          # JavaScript logic
|-- package.json      # Project configuration

Installation & Setup

1. Clone the Repository

git clone https://github.com/yourusername/quote-generator.git
cd quote-generator

2. Install Dependencies

npm install

3. Run the Project

If using a local server, start it with:

npx http-server

Then, open http://localhost:8080 in your browser.

Usage

Click New Quote to fetch a new quote and background image.

Click Copy to copy the quote text.

Click Download Image to save the background image.

Click Post on X to share the quote on X (Twitter).

Troubleshooting

"Uncaught SyntaxError: Cannot use import statement outside a module"

Make sure to add type="module" in index.html:

<script type="module" src="index.js"></script>

"Failed to resolve module specifier 'html2canvas'"

Use a CDN import in index.js:

import html2canvas from "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm";

License

This project is licensed under the MIT License.

Made with ❤️ by [Your Name]
