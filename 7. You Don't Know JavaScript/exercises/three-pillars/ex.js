class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	};

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		};
	};
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${ String( this.favoriteBooks.length ) }`);
		for(let bookname of this.favoriteBooks){
			console.log(bookname)
		}
	};

};

	
function loadBooks( theBookshelf) {
	fakeAjax(BOOK_API, function myBooks(booknames){
		for(let bookname of booknames){
			theBookshelf.addFavoriteBook(bookname)
		}
		theBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

let bookshelf = new Bookshelf();

loadBooks(bookshelf);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
