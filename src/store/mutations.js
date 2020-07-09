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
  [types.SET_CHALLENGES](state, level) {
    const challengesFormated = level.challenges
      .map((challenge) => ({
        ...challenge,
        completed: false,
      }));

    state.level = { id: level.id, challenges: challengesFormated };
  },
  [types.SET_GAME_LEVEL](state, levelId) {
    state.levelId = levelId;
  },
};
