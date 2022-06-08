// const secretWord = document.getElementById('secret-word').value; // Input word
const secretOutput = document.getElementById('secret-output')
const katiesSecretWord = 'sequester';

function secrets() {
// Why didn't using constants at the top of the file work for this?
    let secretWord = document.getElementById('secret-word').value; // Input word
    letsecretOutput = document.getElementById('secret-output');
    if(secretWord == katiesSecretWord) {
        secretOutput.textContent = 'I love you beautiful sea star <3';
    }
    else {
        secretOutput.textContent = 'try again';
    }
    
}
