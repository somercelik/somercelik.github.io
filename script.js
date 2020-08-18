const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">interests</span>',
  about:
    "Hello!<br>I'm Soner Çelik. I am a new graduated, curious and open-minded software developer who is " +
      "searching his way and I love learning things which may or may not " +
      "be useful. I'm all open to new technologies and new tools to make " +
      "things easier. I'm very good at teamwork. Besides, I can think on my " +
      "own when it's needed. Nothing exists that I can't learn. Also, I'm a huge" +
  "Breaking Bad fan, which is the best TV Series of all time made by human-beings.",
  skills:
    '<span class="code">Spoken Languages:</span> English(Upper-Intermediate), Turkish(Native)<br><span class="code">Languages:</span> Java, HTML/CSS/JavaScript<br><span class="code">Technologies:</span> Git, SQL, Native Android Development, REST/SOAP<br><span class="code">Frameworks:</span> React Native, React.JS',
  education:
    "<a href='https://w3.sdu.edu.tr' class='success link'>Süleyman Demirel University</a>, Isparta<br>Bachelor of Computer Science",
  experience: "No experience found.",
  interests: "Reading scientific articals, listening every music genre, playing video games AND trying to understand the machines",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/somercelik/' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/somercelik/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/somercelik/' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">?</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
