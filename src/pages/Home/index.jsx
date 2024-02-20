import MusicList from '../MusicList';
import Player from '../../components/Player';

const Home = ({music, handleTrackSelect, selectedTrack,}) => {

  return (
    <div>
      <div>
        <MusicList tracks={music} onTrackSelect={handleTrackSelect} selectedTrack={selectedTrack}/>
          <Player
            src={selectedTrack?.ringtone}
            autoPlay={false}
            style={{ margin: '10px 0', borderRadius: '12px', background: 'linear-gradient(to right, #614385, #516395)'}}
            header={`${selectedTrack?.subtitle} - ${selectedTrack?.title}`}
          />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
