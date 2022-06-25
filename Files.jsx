import axios from "axios";
import React, { Component } from "react";

export default class Files extends Component {
  state = {
    selectedfile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedfile: event.target.files[0],
    });
  };
  filesUploadHandler = () => {
    const fd = new FormData();
    fd.append(this.state.selectedfile, this.state.selectedfile.name);
    axios.post(`https://api.imgur.com/3/${fd}`).then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div>
        <h1>upload your photo</h1>
        <input type="file" name="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.filesUploadHandler}>upload</button>
      </div>
    );
  }
}
