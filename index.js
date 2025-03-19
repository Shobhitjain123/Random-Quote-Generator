const quoteContent = document.querySelector("#quote>p")
const quoteAuthor = document.querySelector("#author>p")
const quoteBackground = document.querySelector(".quote")

let content
let author
let imageUrl
async function getQuote(){
    const res = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    const quote = await res.json()
    content = quote.data.content;
    author = quote.data.author;

    imageUrl = await getRandomBackgroundImg();

    quoteBackground.style.backgroundImage=`url(${imageUrl})`
    quoteContent.textContent = content;
    quoteAuthor.textContent = `~${author}`
}

function copyText(){
    navigator.clipboard.writeText(content)    
}

function postOnX(){
    const uri = `https://x.com/intent/post?text=${content} 
    
                 ~${author}`
    const link = encodeURI(uri)
    window.open(link, "_blank")
}

async function getRandomBackgroundImg() {
    const res = await fetch("https://picsum.photos/420/134");
    const imageUrl = res.url;

    // Preload the image
    return new Promise((resolve) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => resolve(imageUrl); // Resolve only after image loads
    });
}

async function captureDivAsImg()  {
    const bgImageUrl = quoteBackground.style.backgroundImage.slice(5, -2); // Removes `url("...")`
    
    if (!bgImageUrl) {
        alert("No background image found!");
        return;
    }

    // Create an image element
    const img = new Image();
    img.crossOrigin = "anonymous"; // Avoid CORS issues if the image server allows it
    img.src = bgImageUrl;

    img.onload = () => {
        // Create a canvas
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        // Draw the image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Convert to base64
        const imgData = canvas.toDataURL("image/png");

        // Create download link
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "background-image.png";
        link.click();
    };
    
}

getRandomBackgroundImg()
getQuote()
