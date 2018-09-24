import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetch_weather from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    this.props.fetchweather(this.state.term);
    this.setState({term: ''})


  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-group">
        <input
          placeholder="Get a five-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Summit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchweather: fetch_weather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
