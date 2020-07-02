import types from './types';

export default {
  [types.SET_LEVELS](state: any, levels: Object[]) {
    const gameLevels = levels.map((level) => ({ ...level, open: false, completed: false }));
    gameLevels[0].open = true;
    state.levels = gameLevels;
  },
  [types.SET_GAME_LEVEL](state: any, levelId: Number) {
    state.gameLevelId = levelId;
  },
};
