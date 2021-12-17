import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMonsters: [],
      key: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users?fbclid=IwAR1wi5ygrtpM22QInyWx8RL6-dsl8be7KATtLx6kmqA9l-YRqJbX_do6lwQ"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ listMonsters: data }));
  }
  // handleChange = (e) => {
  //   this.setState({ key: e.target.value });
  // };
  handleChange(e) {
    this.setState({ key: e.target.value });
  }

  render() {
    const { listMonsters, key } = this.state;
    const filteredMonsters = listMonsters.filter((monster) =>
      monster.name.toLowerCase().includes(key.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Reolodex</h1>
        <SearchBox handleSearch={this.handleChange} />
        <br />
        <CardList listMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
