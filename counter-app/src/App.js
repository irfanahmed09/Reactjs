import Navbar from "./components/navbar";
import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const countersState = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: countersState });
  };

  handleReset = () => {
    const countersState = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: countersState });
  };

  handleIncrement = (counter) => {
    const countersState = [...this.state.counters];
    const index = countersState.indexOf(counter);
    countersState[index].value++;
    this.setState({ counters: countersState });
  };

  refreshTab = () => {
    window.location.reload();
  };

  createCounter = () => {
    const obj = this.state.counters;
    var max = -1;

    for (let i = 0; i < obj.length; i++) {
      if (obj[i].id > max) {
        max = obj[i].id;
      }
    }

    const newObj = { id: max + 1, value: 0 };
    this.setState({
      counters: this.state.counters.concat(newObj),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          createCounter={this.createCounter}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onRefresh={this.refreshTab}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
