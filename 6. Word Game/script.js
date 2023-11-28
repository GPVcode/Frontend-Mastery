// onLoad, get a new number for word game.
let word1 = [];
window.addEventListener("load", async (event) => {
    const promise = await fetch('https://words.dev-apis.com/word-of-the-day');
    const processedResponse = await promise.json();
    let word = processedResponse.word;
    word1 = word.split('');
    // document.querySelector(".word").innerText = word1;
    console.log(word1)

});

// validate api https://words.dev-apis.com/validate-word;


let column = 1; row = 1;
let maxColumns = 5;

// This handles user's keyboarrd activity
// typeLetter function is called to either handle backspace fucntion or letter input per column.
document.addEventListener('keydown', (e) => {
    let key = e.key;
    typeLetter(key);

    // if column is greater than 5, column goes back to 1 and row increments by 1;
    if(column > maxColumns){
        column = 1
        row++;
    };

});

// Type letter handles backspace if user decides to delete message and what happens in each row column when user types letters
function typeLetter (key){
    // if "backspace" appears from key event, column decreases by 1 and that specific column in that row changes to ''
    // end function after backspace. 
    if(key === "Backspace"){
        handleBackspace();
        return;
    }

    // use regex to ensure only letter are used.
    // if so, user can add new letters in the column spaces
    let regex = /^[a-zA-Z]$/;
    if(regex.test(key)){
        traverseColumn(key)
    }
};

// if column is greater than 1, column decrements and that column space converts to empty string
// if column is not greater than 1, column becomes max column and row decrements by 1
function handleBackspace(){
        
    if(column > 1){
        column--;
    } else if (row > 1){
        row--;
        column = maxColumns;
    }
    document.querySelector(`.row${row} .cell${column}`).innerText = '';
    document.querySelector(`.row${row} .cell${column}`).style.background = ''
}

// This function takes care of letter inputs
// if column is less or equal to max column, set that grid placement to the key which is passed in from out typeLetter function.
function traverseColumn(key){
    if(column <= maxColumns){
        let currentCell = document.querySelector(`.row${row} .cell${column}`);
        if(currentCell){
            currentCell.innerHTML = `<div class='letter-input'>${key}</div>`;
            validator(key)
            column++
        }
    }
}

function validator(key){
    for(let i = 0; i < word1.length; i++){
        // check if key is in word 1 array
            // if it i, background is yellow
            // if it is also in the same index, background is green

    }   
};