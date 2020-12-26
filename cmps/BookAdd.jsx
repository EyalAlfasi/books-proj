import { eventBusService } from "../services/eventBusService.js";
import { UtilService } from "../services/util-service.js"
import { BookService } from "../services/book-service.js"
import { GoogleBooksService } from "../services/google-books-service.js"
export class BookAdd extends React.Component {

    state = {
        booksToAdd: [],
    }

    componentDidMount() {
        this.setState({ booksToAdd: GoogleBooksService.getGoogleBooks() }, () => {
        })

    }

    onAddBook = (book) => {
        const info = book.volumeInfo
        const newBook = {
            id:book.id,
            title: info.title,
            subtitle: info.subtitle && info.subtitle,
            thumbnail: info.imageLinks.thumbnail,
            listPrice: {
                amount: UtilService.getRandomInt(10, 190),
                currencyCode: UtilService.getRandomCurrencyCode(),
                isOnSale: UtilService.getRandomTrueOrFalse()
            },
            pageCount: info.pageCount,
            publishedDate: info.publishedDate,
            language: info.language,
            authors: [...info.authors],
            categories: [...info.categories]
        }
        BookService.addBook(newBook);
        this.props.loadBooks()
    }

    render() {
        const { items } = this.state.booksToAdd;
        if (!items) return 'Loading...'
        return <section className="books-to-add-container">
            {items.map(item => {
                return <div className="book-to-add" key={item.id}>
                    <h2 className="book-to-add-name">{item.volumeInfo.title}</h2>
                    <button className="add-book-btn" onClick={() => this.onAddBook(item)}>+</button>
                </div>
            })}
        </section>
    }
}

