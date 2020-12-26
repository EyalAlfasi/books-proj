import { BookService } from "../services/book-service.js"
export class ReviewAdd extends React.Component {

    state = {
        reviews: [],
        review: {
            fullName: '',
            submitDate: '',
            rating: 0,
            reviewText: ''
        }
    }

    componentDidMount() {
        BookService.updateBooksFromStorage()
        BookService.getBookById(this.props.bookId)
            .then(book => {
                console.log(book);
                const reviews = (book.reviews) ? book.reviews : [];
                this.setState({ reviews })
            })
    }

    onReviewInput = (ev) => {//on input change
        const value = ev.target.value;
        const reviewCopy = { ...this.state.review };
        reviewCopy[ev.target.name] = value;

        console.log(reviewCopy);
        this.setState({
            review: reviewCopy
        });
    };


    onReviewSubmit = (ev) => {
        ev.preventDefault()
        const { bookId } = this.props;
        const { review } = this.state;
        this.setState({ reviews: [...this.state.reviews, review] }, () => {
            BookService.reviewSubmit(review, bookId);
        })
    }

    render() {
        const reviews = this.state.reviews;
        if (!reviews) return null
        return <section className="reviews-container">
            <form onSubmit={this.onReviewSubmit} className="review-form-container">
                <input onChange={this.onReviewInput} name='fullName' placeholder='Full name' type="text" />
                <input onChange={this.onReviewInput} name="submitDate" type="date" />
                <input onChange={this.onReviewInput} name="rating" type="text" />
                <textarea onChange={this.onReviewInput} name="reviewText" cols="30" rows="10"></textarea>
                <button className="submit-review-btn">Submit review</button>
            </form>
            {reviews.length !== 0 &&
                <div className="past-reviews-container">
                    {reviews.map(review => {
                        console.log(review);
                        return <div key={review.fullName}>
                            <h3 className="full-name">{review.fullName}</h3>
                            <h3 className="submit-date">{review.submitDate}</h3>
                            <h3 className="rating">{review.rating}</h3>
                            <p className="review-text">{review.reviewText}</p>
                        </div>
                    })}
                </div>}
        </section>
    }
}