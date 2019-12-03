import React, { Component } from "react";
import { matMul } from "@tensorflow/tfjs";

export class Model extends Component {
  state = {
    Checkpoint:
      "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv",
    RNN: new matMul.MusicRNN(this.state.Checkpoint)
  };

  render() {
    return <div></div>;
  }
}

export default Model;
