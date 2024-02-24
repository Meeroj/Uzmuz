import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
const MusicList = ({ tracks, onTrackSelect, selectedTrack, isLoading }) => {
  const navigate = useNavigate()
  const {page} = useSelector(state=>state.music)
  return (
    <div className=' relative start-[23vw] rounded-xl px-5 py-2 w-[75vw] mt-2 music-list'>
      <h2 className='text-white text-4xl font-bold'>{page}</h2>
      {isLoading?<div className='w-full text-center'><CircularProgress color="success" /></div>:
      <ul className='pb-5'>
        {tracks?.map((track, index) => (
          <li key={index} className='text-white flex gap-3 p-2 rounded-md bg-gradient-to-r to-[#755b35] from-[#516395] bg-opacity-5 mt-2 cursor-pointer'>
            {selectedTrack?.key === track?.key ? (
              <span onClick={() => onTrackSelect(false)}><PauseIcon/></span>
              ) : (
                <span onClick={() => onTrackSelect(track)}><PlayArrowIcon/></span>
                )}
            {track.title} - {track.subtitle}
          </li>
        ))}
       
          
          <div className="absolute bottom-0 z-0 start-0 h-8 rounded-md w-[75vw] bg-gradient-to-t to-[#ffffff00] from-[#000000] text-white flex justify-center items-center hover:text-red-500 cursor-pointer" onClick={()=>navigate('/seemore')}>See more</div>
      </ul>
      }
    </div>
  );
};

export default MusicList;
