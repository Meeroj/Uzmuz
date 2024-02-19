import { useState, useEffect } from "react";
import { getTracksHome } from "../../services/request";
import  Player  from "../Player/index";
const Home = () => {
    const [music, setMusic] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const res = await getTracksHome();
        const data = res.data;
        setMusic(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
  return (
    <>
      {music && music.uz_serialized_tracks.map(track => (
        <Player track={track.ringtone}/>
      ))}
    </>
  )
}

export default Home