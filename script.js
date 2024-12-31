const prompt = require("prompt-sync")();


let library = [];


function addBook() {
    const title = prompt("Enter the book title: ").trim();
    const author = prompt("Enter the book author: ").trim();
    const isRead = prompt("Have you read this book? (yes/no): ").trim().toLowerCase() === "yes";

    library.push({ title, author, isRead });
    console.log(`Book "${title}" by ${author} added to the library.`);
}


function removeBook() {
    const title = prompt("Enter the title of the book to remove: ").trim();
    const index = library.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
        library.splice(index, 1);
        console.log(`Book "${title}" removed from the library.`);
    } else {
        console.log(`Book "${title}" not found in the library.`);
    }
}


function toggleReadStatus() {
    const title = prompt("Enter the title of the book to toggle read status: ").trim();
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());

    if (book) {
        book.isRead = !book.isRead;
        console.log(`Read status for "${book.title}" updated to: ${book.isRead ? "Read" : "Unread"}`);
    } else {
        console.log(`Book "${title}" not found in the library.`);
    }
}


function displayBooks() {
    if (library.length === 0) {
        console.log("The library is currently empty.");
        return;
    }

    console.log("Books in the library:");
    library.forEach((book, index) => {
        console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Status: ${book.isRead ? "Read" : "Unread"}`);
    });
}


function libraryMenu() {
    while (true) {
        console.log("\nLibrary Menu:");
        console.log("1. Add a book");
        console.log("2. Remove a book");
        console.log("3. Toggle book read status");
        console.log("4. Display all books");
        console.log("5. Exit");

        const choice = prompt("Choose an option (1-5): ").trim();

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                removeBook();
                break;
            case "3":
                toggleReadStatus();
                break;
            case "4":
                displayBooks();
                break;
            case "5":
                console.log("Exiting the library app. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please select a valid option.");
        }
    }
}


libraryMenu();
