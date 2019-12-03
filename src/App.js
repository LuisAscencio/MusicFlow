import React, { Component } from "react";
import tone from "tone";
import Model from "./Model";

export class App extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="card-title">MusicFlow</h1>
        <Model />
      </div>
    );
  }
}

export default App;
