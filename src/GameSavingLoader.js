import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load(string) {
    return read(string).then((result) => json(result)).then((response) => JSON.parse(response));
  }
}
