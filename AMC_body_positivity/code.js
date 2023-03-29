let display_text = document.getElementById("display"); // Represents the text in which the quote will be displayed
let random_picker = 0; // The integer which represents what quote will be selected
let refresh_text = document.getElementById("refresh");


let sentences = ['"The best gift you are ever going to give someone — the permission to feel safe in their own skin."- Hannah Brencher', 
                '“how you love yourself is how you teach others to love you.” ― poet Rupi Kaur',
                '“To lose confidence in one’s body is to lose confidence in oneself.” — author Simone de Beauvoir',
                ' “Don’t let the scale define you. Be active, be healthy, be happy.” — Unknown',
                '“You need to know that you’re enough. … You are enough just as you are.” — Meghan Markle',
                '“You have been criticizing yourself for years and it hasn’t worked. Try approving of yourself and see what happens.” — Louise Hay',
                 'People often say that beauty is in the eye of the beholder, and I say that the most liberating thing about beauty is realizing that you are the beholder. — Salma Hayek',
                '"I keep telling myself that I’m a human being, an imperfect human being who’s not made to look like a doll" — Emma Watson',
                '"No body type is superior to another. Every body is different and each and every one of those body’s are beautiful and strong and important and worthy of great things" — Sailor Brinkley-Cook'
                
]; // the list of all quotes



function generateRandomSentence(){ // generate a random quote on load
    document.querySelector("a[target]").style.display = "none";
    random_picker = Math.floor(Math.random() * sentences.length);
    display_text.innerHTML = sentences[random_picker];
    refresh_text.style.opacity = "1";
}

// redirecting functions
function redirectToAboutPage(){
    document.location.href = "./about.html";
}

function redirectToMainPage(){
    document.location.href = "./index.html";
}

function redirectToSourceCode(){
    document.location.href = "https://github.com/louisPlaire/BodyPositivity_generator";
}
