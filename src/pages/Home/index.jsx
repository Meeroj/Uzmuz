import MusicList from '../../components/MusicList';
import Player from '../../components/Player';

const Home = ({music, handleTrackSelect, selectedTrack,}) => {

  return (
    <div>
      <div>
        <MusicList tracks={music} onTrackSelect={handleTrackSelect} selectedTrack={selectedTrack}/>
        {selectedTrack&&
          <Player
          src={selectedTrack?.ringtone}
          autoPlay={true}
          style={{ margin: '10px 0', borderRadius: '12px 12px 0 0', background: 'linear-gradient(to right, #614385, #516395)'}}
          header={`${selectedTrack?.subtitle} - ${selectedTrack?.title}`}
          />
        }
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
