import types from './types';

export default {
  [types.SET_LEVELS](state, levels) {
    const gameLevels = levels
      .map((level) => ({
        ...level,
        open: false,
        completed: false,
      }));

    gameLevels[0].open = true;
    state.levels = gameLevels;
  },
  [types.SET_GAME_LEVEL](state, levelId) {
    state.gameLevelId = levelId;
  },
};
