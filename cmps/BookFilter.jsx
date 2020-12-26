export class BookFilter extends React.Component {

    state = {
        titleFilter: '',
        priceFilter: 0
    }

    handleFilter = (ev) => {
        const filterCB = () => {
            this.props.onSetFilter(this.state);
        };
        console.log(ev.target);
        if (ev.target.type === 'text') {
            this.setState({ titleFilter: ev.target.value }, filterCB);
        }
        else this.setState({ priceFilter: +ev.target.value }, filterCB);
    }

    render() {
        return <div className="filters">
            <form className="filters-form">
                <input onChange={this.handleFilter} type="text" placeholder="Start typing..." value={this.state.titleFilter} />
                <input onChange={this.handleFilter} type="range" max="300" value={this.state.priceFilter} />
            </form>
        </div >

    }

}