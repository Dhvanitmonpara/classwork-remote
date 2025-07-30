// create an object representing a book with properties title, author, and publication year and console it

let book = {
    title: "The hunger games",
    author: "Suzane Collins",
    publicationYear: "2008"
}

console.log(book)

// access properties of the object

console.log("book title:", book.title);
console.log("book author:", book.author);
console.log("book publication year:", book.publicationYear);

// add a method to the book object that returns the string with the book title and author

const getBookInfo = function () {
    return `${this.title} by ${this.author}`
}

book.getBookInfo = getBookInfo

console.log(book.getBookInfo())

// create a method to update the publication year of the book object

const updatePublicationYear = function (newYear){
    this.publicationYear = newYear;
    console.log(`${this.title} has been published in ${this.publicationYear}`)
}

book.updatePublicationYear = updatePublicationYear

book.updatePublicationYear("2013")

// create a nested object representing a library with properties name and books (an array of book objects) and console it

let library = {
    name: "Hunger Games Library",
    books: [book, {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: "1960"
    }]
}

// access the name of library and titles of all the books in the library

console.log("Library name:", library.name)

for (let i = 0; i < library.books.length; i++) {
    console.log("Book title:", library.books[i].title)
}

// add a method to the book object that returns the string with the book title and year

const getBookInfoWithYear = function () {
    return `${this.title} by ${this.author}, published in ${this.publicationYear}`
}

book.getBookInfoWithYear = getBookInfoWithYear

console.log(book.getBookInfoWithYear())

// use a for...in loop to iterate over the properties of the library object and console them

for (let property in library) {
    console.log(property, ":", library[property])
}

// use object.keys and object.values to get an array of keys and values, respectively, and console them

console.log("Keys:", Object.keys(library))
console.log("Values:", Object.values(library))

