// HTML References
const poemBody = document.getElementById('poem_body');
document.body.style.backgroundColor = `rgb(180, 180,180)`

// Prompt arrays: format + preposition + qualifier + of + topic
const promptFormat = 'presentation,script,story,essay,post,email,article,talk,book,paragraph,drawing,speech,conversation,talk,comic,words'.split(',');
const promptPreposition = 'about,based on,on'.split(',');
const promptQualifier_Of = 'importance,meaning,significance,value,worth,implications,themes,interestingness,fascination,utility,benefit,risks,side effects,necessity'.split(',');
const promptQualifier_For = 'use,need,necessity,reason'.split(',');
const promptTopic = 'originality,ethical consideration,uniqueness,distinctiveness,individuality,mental health,women,female,socioeconomic structures,society,humanity,creativity,control,decision,geopolitical conflict,powerball numbers,declining birth rates'.split(',');

// Answer arrays


// Variables
let topic = '';
let maxLines = 45;
let currentLines = 0;
let hitMax = false;
let redIterator = 0;

// Utility methods
const getWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}
const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

const createPrompt = () => {
    let promptType = getRandom(10);
    const promptQualifier = `${promptType >= 8 ? `${getWord(promptQualifier_For)} for` : `${getWord(promptQualifier_Of)} of`}`;
    topic = getWord(promptTopic);
    const prompt = `${getWord(promptFormat)} ${getWord(promptPreposition)} ${promptQualifier} ${topic}`;
    return prompt;
}
const makePromptLine = () => {
    let prompt = createPrompt();
    let line = document.createElement('div');
    line.innerHTML = prompt + '\n';
    poemBody.appendChild(line);
}
const makeLine = () => {
    if (currentLines > maxLines) {
        poemBody.removeChild(poemBody.firstChild);
        currentLines--;
        if (hitMax == false) {
            hitMax = true;
        } if (hitMax == true) {
            redIterator++;
            poemBody.style.color = `rgb(${100+redIterator}, 100, 100)`;
            document.body.style.backgroundColor = `rgb(${180-(redIterator*0.25)}, ${180-redIterator}, ${180-redIterator})`
        }
    } else {
        makePromptLine();
        currentLines++;
    }
}

// Run poem
const poem = () => {
    setInterval(makeLine, 120);

}

window.onload = () => {
    poem();
}
