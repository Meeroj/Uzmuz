import React from 'react'
import ReactH5AudioPlayer from 'react-h5-audio-player';

const Player = ({ src, autoPlay, style, header }) => {
  return (
    <div className={` fixed start-[23vw] -bottom-3 w-[75vw] playerUp`}>
      <ReactH5AudioPlayer
        src={src}
        style={style}
        header={header}
        autoPlay={autoPlay}
      />
    </div>
  )
}

export default Player
