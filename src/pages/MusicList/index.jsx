import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const MusicList = ({ tracks, onTrackSelect, selectedTrack }) => {
  return (
    <div className=' relative start-[23vw] rounded-xl bg-[#1f1f1f] px-5 py-2 w-[76vw] mt-2'>
      <h2 className='text-white text-4xl font-bold'>Top <span className='text-red-600'>Music</span></h2>
      <ul>
        {tracks?.map((track, index) => (
          <li key={index} onClick={() => onTrackSelect(track)} className='text-white flex gap-3 p-2 rounded-md bg-gradient-to-r to-[#755b35] from-[#516395] bg-opacity-5 mt-2 cursor-pointer'>
            {selectedTrack?.key==track?.key? <PauseIcon/>:
            <PlayArrowIcon/>
            }
            {track.title} - {track.subtitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
