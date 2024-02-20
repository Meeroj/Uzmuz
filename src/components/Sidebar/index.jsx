import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SideBar = ({setUrl, setSubUrl}) => {
  return (
    <div className='flex flex-col fixed h-[100vh]'>
      <div className='flex flex-col w-[22vw] h-[50vh] p-2 mt-2 rounded-xl bg-[#1F1F1F]'>
        <div className="ms-5"><p className='text-4xl font-bold text-white'><span className='text-red-600'>U</span>zmuz<span className='text-red-600'>.net</span></p></div>
        <div className="flex flex-col items-end list-none ms-4 mt-6 overflow-auto">
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer'onClick={()=>{setUrl('/top/home/'), setSubUrl('uz_serialized_tracks')}}> <HomeIcon /> Home</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/tracks/uz/'), setSubUrl('uz_serialized_tracks')}}> <LibraryMusicIcon /> Uzbek</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/tr/'), setSubUrl('tr_serialized_tracks')}}> <LibraryMusicIcon /> Turk</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/az/'), setSubUrl('az_serialized_tracks')}}> <LibraryMusicIcon /> Azarbayjan</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/sa/'), setSubUrl('sa_serialized_tracks')}}> <LibraryMusicIcon /> Saudiy Arabia</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/kz/'), setSubUrl('kz_serialized_tracks')}}> <LibraryMusicIcon /> Kazak</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/tj/'), setSubUrl('tj_serialized_tracks')}}> <LibraryMusicIcon /> Tajik</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('tracks/kg/'), setSubUrl('kg_serialized_tracks')}}> <LibraryMusicIcon /> Kirgiz</li>

        </div>
      </div>
      <div className='flex flex-col w-[22vw] max-h-[45vh] p-2 mt-2 rounded-xl bg-[#1F1F1F] '>
        <p className='text-2xl font-bold text-white ms-5'>Genre</p>
        <div className="flex flex-col items-end list-none ms-4 mt-6 overflow-auto">
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/electronic/'), setSubUrl('electronic_serialized_tracks')}}> <LibraryMusicIcon /> Electronik</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/rock/'), setSubUrl('rock_serialized_tracks')}}> <LibraryMusicIcon /> Rock</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/pop/'), setSubUrl('pop_serialized_tracks')}}> <LibraryMusicIcon /> Pop</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/dance/'), setSubUrl('dance_serialized_tracks')}}> <LibraryMusicIcon /> Dance</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/rnb_soul/'), setSubUrl('rnb_soul_serialized_tracks')}}> <LibraryMusicIcon /> Soul</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/alternative/'), setSubUrl('alternative_serialized_tracks')}}> <LibraryMusicIcon /> Alternative</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/latin/'), setSubUrl('latin_serialized_tracks')}}> <LibraryMusicIcon /> Latin</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/film_tv/'), setSubUrl('film_tv_serialized_tracks')}}> <LibraryMusicIcon /> Film TV</li>
          <li className='text-sm font-medium w-full text-white rounded-md hover:bg-slate-700 p-2 cursor-pointer' onClick={()=>{setUrl('/top/hit/'), setSubUrl('hit_serialized_tracks')}}> <LibraryMusicIcon /> Hit Music</li>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
