import { StorageService } from "./storage-service.js"

const GOOGLE_BOOKS_KEY = 'googleBooksDB';

export const GoogleBooksService = {
    getGoogleBooks
}

function getGoogleBooks() {
    const googleBooks = StorageService.loadFromStorage(GOOGLE_BOOKS_KEY);
    if (googleBooks) return googleBooks
    else {
        return axios.get('https://www.googleapis.com/books/v1/volumes?printType=books&q=tennis')
            .then(books => {
                StorageService.saveToStorage(GOOGLE_BOOKS_KEY, books.data);
                return books.data;
            })
    }
}