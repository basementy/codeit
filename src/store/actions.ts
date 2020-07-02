import levels from '@/utils/levels.json';
import types from './types';

const loadGameLevels = ({ commit }: any) => {
  commit(types.SET_LEVELS, levels);
};

const setGameLevel = ({ commit }: any, levelId: Number) => {
  commit(types.SET_GAME_LEVEL, levelId);
};

export default {
  loadGameLevels,
  setGameLevel,
};
