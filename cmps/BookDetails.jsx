import { BookService } from "../services/book-service.js"
import { ReviewAdd } from "./ReviewAdd.jsx"
const { Link } = ReactRouterDOM;

export class BookDetails extends React.Component {

    state = {
        selectedBook: null,
        pageCount: '',
        publishedStatus: '',
        priceColorClass: '',
        lang: ''
    }

    componentDidMount() {
        const { bookId } = this.props.match.params
        console.log(this.props.match.params);
        BookService.getBookById(bookId).then(book => {
            this.setState({ selectedBook: book }, () => {
                this.pageCount();
                this.publishedStatus();
                this.priceColorClass();
                this.bookLanguage();
            });
        });
    }

    pageCount = () => {
        const { pageCount } = this.state.selectedBook;
        var lengthTitle;
        if (pageCount < 100) lengthTitle = 'Light reading'
        else if (pageCount > 100) lengthTitle = 'Decent reading'
        else if (pageCount > 500) lengthTitle = 'Long reading'
        this.setState({ pageCount: lengthTitle })
    }

    publishedStatus = () => {
        const { publishedDate } = this.state.selectedBook;
        const currDate = new Date().getFullYear()
        var status = 'A little old';
        if (currDate - publishedDate > 10) status = 'Veteran Book'
        else if (currDate - publishedDate < 1) status = 'New!'
        this.setState({ publishedStatus: status })
    }

    priceColorClass = () => {
        const price = this.state.selectedBook.listPrice.amount;
        var colorClass = ''
        if (price > 150) colorClass = 'red-price'
        else if (price < 20) colorClass = 'green-price'
        this.setState({ priceColorClass: colorClass })
    }

    bookLanguage = () => {
        const { language } = this.state.selectedBook;
        this.setState({ lang: language })
    }

    render() {
        const { selectedBook, pageCount, publishedStatus, priceColorClass, lang } = this.state;
        if (!selectedBook) return null
        return <section className="book-details-container">
            <Link to='/bookApp'><button className="go-back">Back to the books list</button></Link>
            <h2>{selectedBook.title}</h2>
            <h3 className="subtitle">{selectedBook.subtitle}</h3>
            <h4 className={`details-price ${priceColorClass}`}>{selectedBook.listPrice.amount}{BookService.getCurrency(selectedBook.listPrice)}</h4>
            <div className="book-tags">
                <span className="page-count">Book length: {pageCount}</span>
                <span className="published">Oldness: {publishedStatus}</span>
                <span className="language">Language: {lang}</span>
            </div>
            <div className="authors">Authors: {selectedBook.authors.map(author => <span key={author}> {author}</span>)}</div>
            <div className="categories">Categories: {selectedBook.categories.map(categorie => <span key={categorie}> {categorie}</span>)}</div>
            <div className="thumbnail-container">
                {selectedBook.listPrice.isOnSale && <span className="sale-badge">Sale!</span>}
                <img src={selectedBook.thumbnail} className="book-thumbnail" />
            </div>
            <ReviewAdd bookId={selectedBook.id} />
        </section >
    }

}