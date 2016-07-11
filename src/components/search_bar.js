import React, {Component} from 'react';
//functional component
// const SearchBar = () => {
//   return <input />;
// };

// class component
class SearchBar extends Component {
  constructor(pros) {
    super(pros);
    // debugger;
    // only place to mutate state
    this.state = {term: ''};
  }
  render() {
    // arrow function
    // return <input onChange ={event => console.log(event.target.value)}/>;
    return (
      <div className="search-bar">
        <input
        // state: controlled component
          value={this.state.term}
          // onChange ={event => this.setState({term: event.target.value})} />
          onChange ={event => this.onInputChange(event.target.value)} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.onButtonClick(this.state.term)}
        >Search</button>
      </div>
    )
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  onButtonClick(term) {
    // this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar ;
