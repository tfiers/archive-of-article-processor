import React from "react"

export class Sentence extends React.Component<{ text: String }> {
  render = () => (
    <span>{this.props.text} </span>
  )
}
