import { AppHeader } from './cmps/header.jsx';
import { About } from './pages/about.jsx'
import { BookApp } from './pages/book-app.jsx'
import { Home } from './pages/home.jsx'
import { BookDetails } from "./cmps/BookDetails.jsx"
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
    return (
        <Router>
            < section className="app" >
                <AppHeader />
                <Switch>
                    <Route path="/bookApp/:bookId" component={BookDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/bookApp" component={BookApp} />
                    <Route path="/" component={Home} />
                </Switch>
            </section >
        </Router>
    )

}

