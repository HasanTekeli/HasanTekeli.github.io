import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import { lecturers } from '../lecturers';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lecturers: [],
      searchfield:''
    }
  }

  componentDidMount() {
    this.setState({ lecturers: lecturers });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredLecturers = this.state.lecturers.filter(lecturer => {
      return lecturer.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="f1">Bölüm Başkanlığı Sistemi</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList lecturers={filteredLecturers}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default Users;