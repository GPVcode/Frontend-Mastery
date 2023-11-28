// onLoad, get a new number for word game.
let word1 = "";
window.addEventListener("load", async (event) => {
    const promise = await fetch('https://words.dev-apis.com/word-of-the-day');
    const processedResponse = await promise.json();
    let word = processedResponse.word;
    word1 = word;
    // document.querySelector(".word").innerText = word1;
});

// validate api https://words.dev-apis.com/validate-word;

let gridRows = document.querySelectorAll('.grid-row');
let cells = document.querySelectorAll('.cell');

function typeLetter (key){
    let regex = /^[a-zA-Z]+$/;
    let column = 1;
    if(key === 'Backspace'){
        return;
    }
    if(regex.test(key) === false){
        console.log("false")
    }
    // while(column <= 5){
    //     if(key){
    //         document.querySelector(`.cell${column}`).innerText = key;
    //         column++;
    //     }
    // };
};

document.addEventListener('keydown', (e) => {
    let key = e.key;
    typeLetter(key);
})



// let grid = [];
// gridRows.forEach(row => {
//     grid.push(row)
// })
// document.addEventListener('keydown', (e) => {
//     let key = e.key;
//     while(column <= 5){
//         if(column === 5) {
//             stack = [];
//             row++;
//         } else {
//             grid[row][column] = key;
//             gridRows[0] = grid[row][column]
//         }
//     };

// })

// gridRows.forEach((row) => {
//     let key = document.addEventListener('keydown', (e) => e.key)

//     while(stack.length < 5){
//         stack.push(key);
//         row[stack.length] = key;

//     }
// })
// track current row
// fill up first row until column reaches > 4. When cells are full, update current row plus 1
// when letter is pressed, letter in current cell is updated.
// let row = 0, column = 0;

// for(let i = 0; i < cells.length; i++){
//     gridRows[0][0] = stack[0]
// }
// typed letter pushes value to a stack
// the stack fills up the divs
// gridRows.forEach(row => {

//     let cells = row.querySelectorAll('.cell');
//     let stack = [];
//     for(let i = 0; i < cells.length; i++){
//         if(document.addEventListener('keydown', (e) => {
//             console.log(e.key)
//         }) === "Backspace"){
//             stack.pop();
//         }
//         else {
//             document.addEventListener('keydown', (e) => {
//                 stack.push(e.key)
//             })
//         }
//     }
// })
