// TODO: define addFavoriteBook(..) function

var favoriteBooks = [];
const addFavoriteBook = (bookname) => {
    const NameArr = bookname.split(' ');
    
    for(let i of NameArr){
        if(i === "Great"){
            return;
        } 
    }
    favoriteBooks.push(bookname)
    // console.log(favoriteBooks)
};

// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {

    console.log(`Favorite Books: ${favoriteBooks.length}`)
    for(let book of favoriteBooks){
        console.log(book)
    }
};


addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
