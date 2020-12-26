const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <header className="header-container">
        <nav>
            <ul>
                <li><NavLink activeClassName="nav-active" exact to="/">Welcome</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/bookApp">All books</NavLink></li>
                <li><NavLink activeClassName="nav-active" to="/about">About</NavLink></li>
            </ul>
        </nav>;
    </header>
}

export const AppHeader = withRouter(_AppHeader);