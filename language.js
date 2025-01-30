// Simple mapping of characters to sign language images
const signLanguageDict = {
    "a": "images/a.png",
    "b": "images/b.png",
    "c": "images/c.png",
    "d": "images/d.png",
    "e": "images/e.png",
    // Add more letters or symbols here...
};

function translateText() {
    const textInput = document.getElementById('textInput').value.toLowerCase();
    const outputDiv = document.getElementById('output');
    
    // Clear previous output
    outputDiv.innerHTML = '';
    
    // Loop through the text and display corresponding sign language images
    for (let i = 0; i < textInput.length; i++) {
        const char = textInput[i];
        if (signLanguageDict[char]) {
            const imgElement = document.createElement('img');
            imgElement.src = signLanguageDict[char];
            imgElement.alt = char;
            imgElement.style.width = "50px";
            imgElement.style.margin = "5px";
            outputDiv.appendChild(imgElement);
        } else if (char === " ") {
            const space = document.createElement('span');
            space.innerText = '  '; // space between words
            outputDiv.appendChild(space);
        }
    }
}

