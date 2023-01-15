import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const savedGame = GameSavingLoader.load(data).then((saving) => new GameSaving(saving), (error) => {
  throw new Error(error);
});

export default savedGame;
