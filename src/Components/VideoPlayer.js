import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=gTcm41mjRtU"/>
      </div>
    )
  }
}
