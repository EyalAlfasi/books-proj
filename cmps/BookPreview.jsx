const { Link } = ReactRouterDOM;

export function BookPreview({ book, currency }) {
    let bookTitleClasses = (currency(book.listPrice) === '₪') ? 'book-price dir-rtl' : 'book-price';
    return <Link to={`/bookApp/${book.id}`}>
        <section className="book-preview">
            <h2 className="book-title">{book.title}</h2>
            <img src={book.thumbnail} alt="" className="book-preview-img"/>
            <h3 className={bookTitleClasses}><span>{currency(book.listPrice)}</span><span>{book.listPrice.amount}</span></h3>
        </section>
    </Link>
}


