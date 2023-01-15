import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

const savedGame = GameSavingLoader.load(data).then((saving) => {
  return new GameSaving(saving);
}, (error) => {
  throw new Error(error);
});

export default savedGame;
