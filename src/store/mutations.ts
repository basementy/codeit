import types from './types';

export default {
  [types.SET_LEVELS](state: any, levels: Record<string, any>[]) {
    const gameLevels = levels.map((level: Record<string, any>) => ({ ...level, open: false, completed: false }));
    gameLevels[0].open = true;
    state.levels = gameLevels;
  },
  [types.SET_GAME_LEVEL](state: any, levelId: number) {
    state.gameLevelId = levelId;
  },
};
