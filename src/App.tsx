import React from "react";
import { Cursor } from "./Cursor";
import { Sentence } from "./Sentence";

export class App extends React.Component<{}, { content: any }> {

  constructor() {
    super({})
    this.state = {
      content: <div>
        <Sentence text="Hello I am an article." />
        <Sentence text="I contain sentences like this one." />
        <Cursor />
      </div>
    }
  }

  render = () => this.state.content

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "ArrowLeft") {
      this.state.content
    }
  }
}
