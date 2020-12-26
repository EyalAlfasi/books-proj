import { BookService } from "../services/book-service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookAdd } from "../cmps/BookAdd.jsx"
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class BookApp extends React.Component {

    state = {
        books: [],
        filter: {
            titleFilter: '',
            priceFilter: 0,
        }
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        BookService.updateBooksFromStorage()
        BookService.query()
            .then(books => { this.setState({ books }) })
    };



    onSetFilter = (filter) => {
        this.setState({ filter });
    }
    getBooksForDisplay = () => {
        const { filter } = this.state;
        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filter.titleFilter.toLowerCase()) &&
                book.listPrice.amount >= filter.priceFilter;
        });
    }

    render() {

        return <section>
            <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
            <BookList currency={BookService.getCurrency} books={this.getBooksForDisplay()} />
            <BookAdd loadBooks={this.loadBooks}/>
        </section>
    }

}
