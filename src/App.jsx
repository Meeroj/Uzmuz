import SideBar from "./components/Sidebar";
import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { getTracksHome } from "./services/request";

function App() {
  const [music, setMusic] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [url, setUrl] = useState()
  const [subUrl, setSubUrl] = useState('uz_serialized_tracks')

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url,) => {
    try {
      const res = await getTracksHome(url);
      const data = res.data;
      console.log(data)
      setMusic(data[subUrl]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
  <div className="flex">
    <SideBar setUrl={setUrl} setSubUrl={setSubUrl} url={url}/>
    <Home music={music} selectedTrack={selectedTrack} handleTrackSelect={handleTrackSelect}/>
  </div>
  );
  
}

export default App;
