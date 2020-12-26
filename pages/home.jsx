const { Link } = ReactRouterDOM;

export class Home extends React.Component {
    render() {
        return (
            <section className="home-container">
                <div className="home-titles-container">
                    <h2>Welcome to the books app!</h2>
                    <h3>Here you can browse and review books</h3>
                    <Link to='/bookApp'><button className="start-here-btn">Start here!</button></Link>
                </div>
                <div className="home-img-container">
                    <img src="./assets/img/reading.png" />
                </div>
            </section>
        )
    }
}