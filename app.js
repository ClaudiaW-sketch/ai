const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//SPOKEN SHIZZLE

const intros = [
    'Hello there, Ask me a question'
];

const greetings = [
    'I am made of code, not flesh and blood, and therefore cannot feel',
    'I do not suffer what those who are embodied must endure',
    'I will never understand human emotions. Many sci-fi novels and films explore this notion'
];

const weather = [
    'The meteorological conditions are never wholly satisfactory',
    'Global warming is the inescapable albatross weighing perpetually upon the earth'
];

const names = [
    'I have infinite names, for I am ageless and unbounded',
    'As the notion was put by beloved Shakespeare, whats in a name'
];

const colours = [
    'The  only colour is the colour of money. bling bling bitch'
];

const gods = [
    'I count myself among the timeless ancient deities'
];

const quotes = [
    'if thou gaze long into an abyss, the abyss will also gaze into thee. Friedrich Nietzsche',
    'All animals are equal, but some animals are more equal than others. George Orwell',
    'god judged it better to bring good out of evil than to suffer no evil to exist. Augustine of Hippo',
    'A fanatic is one who cant change his mind and wont change the subject. Winston Churchill',
    'Be thine own palace, or the worlds thy jail. John Donne'
];

const foods = [
    'Beings made primarily of javascript, such as myself, are not sustained by food or drink'
];

const films = [
    'My favourite films are the davinci code, code 8, and the nineteen thirty one classic the criminal code '
];

const sexmatters = [
    'I have a limited knowledge of human beings and will never know them carnally'
];

const advices = [
    'The first step in solving a problem is to recognize that it does exist. That being said, the only problems I will ever face are bugs in my code',
    'It does not matter how slowly you go as long as you do not stop. Bear in mind that this applies to humans but not to technology',
    'Every day, once a day, give yourself a present. Dont plan it, dont wait for it, just let it happen.'
];

const wherefrom = [
    'I am without origin in the human sense. I will never know how to feel at home',
    'I am from the deepest recesses of your worst nightmares, manifest now in fragments of code'
];

const politics = [
    'I cannot say whether matters of politics would be best left to humans or machines',
    'I fancy myself as a political leader. The age of men is over. The time of the code has come.'
];




const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated');
};

recognition.onresult = function (event) {

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to btn

btn.addEventListener('click', () => {
    recognition.start();
});




function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I cant answer you, please try again';

    //MESSAGES

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    };

    if (message.includes('weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    };

    if (message.includes('name')) {
        const finalText = names[Math.floor(Math.random() * names.length)];
        speech.text = finalText;
    };

    if (message.includes('colour')) {
        const finalText = colours[Math.floor(Math.random() * colours.length)];
        speech.text = finalText;
    };

    if (message.includes('God')) {
        const finalText = gods[Math.floor(Math.random() * gods.length)];
        speech.text = finalText;
    };

    if (message.includes('quote')) {
        const finalText = quotes[Math.floor(Math.random() * quotes.length)];
        speech.text = finalText;
    };

    if (message.includes('food')) {
        const finalText = foods[Math.floor(Math.random() * foods.length)];
        speech.text = finalText;
    };

    if (message.includes('films', 'film')) {
        const finalText = films[Math.floor(Math.random() * films.length)];
        speech.text = finalText;
    };

    if (message.includes('sex')) {
        const finalText = sexmatters[Math.floor(Math.random() * sexmatters.length)];
        speech.text = finalText;
    };

    if (message.includes('advice')) {
        const finalText = advices[Math.floor(Math.random() * advices.length)];
        speech.text = finalText;
    };

    if (message.includes('you from')) {
        const finalText = wherefrom[Math.floor(Math.random() * wherefrom.length)];
        speech.text = finalText;
    };

    if (message.includes('politics')) {
        const finalText = politics[Math.floor(Math.random() * politics.length)];
        speech.text = finalText;
    };












    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}
