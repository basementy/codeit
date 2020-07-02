import levels from '@/utils/levels.json';
import types from './types';

const loadGameLevels = ({ commit }) => {
  commit(types.SET_LEVELS, levels);
};

const setGameLevel = ({ commit }, levelId) => {
  commit(types.SET_GAME_LEVEL, levelId);
};

export default {
  loadGameLevels,
  setGameLevel,
};
