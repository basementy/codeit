import levels from '@/utils/levels.json';
import challenges from '@/utils/challenges';
import types from './types';

const loadGameLevels = ({ commit }) => {
  commit(types.SET_LEVELS, levels);
};

const loadGameLevel = ({ commit }, levelId) => {
  const level = challenges.find(({ id }) => id === levelId);
  commit(types.SET_CHALLENGES, level);
};

const setGameLevel = ({ commit }, levelId) => {
  commit(types.SET_GAME_LEVEL, levelId);
};

export default {
  loadGameLevel,
  loadGameLevels,
  setGameLevel,
};
