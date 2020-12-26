import { BookPreview } from "../cmps/BookPreview.jsx"


export function BookList({ books, currency }) {
    return <section >
        <div className="books-list">
            {books.map(book => <BookPreview currency={currency} key={book.id} book={book}/>)}
        </div>
    </section>
}
