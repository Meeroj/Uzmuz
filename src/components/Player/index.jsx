import React from 'react'
import ReactH5AudioPlayer from 'react-h5-audio-player';

const Player = ({src,autoPlay, style, header}) => {
  return (
    <div className=' relative start-[23vw] w-[76vw]'>
         <ReactH5AudioPlayer
            src={src}
            autoPlay={autoPlay}
            style={style}
            header={header}
          />
    </div>
  )
}

export default Player