import types from './types';

export default {
  [types.SET_LEVELS](state, levels) {
    state.levels = levels;
  },
  [types.SET_GAME_CHALLENGE](state, levelId) {
    state.currentChallenge = levelId;
  },
  [types.SET_GAME_LEVEL](state, levelId) {
    state.levelId = levelId;
  },
  [types.SET_CURRENT_LEVEL](state, levelId) {
    state.currentLevel = levelId;
  },
  [types.UPDATE_USER_LIFE](state) {
    state.userLife -= 1;
  },
  [types.UPDATE_CHALLENGE_STATUS](state, challengeId) {
    const currentLevel = state.levels.find((level) => level.id === state.currentLevel);
    const currentChallenge = currentLevel.challenges
      .find((challenge) => challenge.id === challengeId);

    currentChallenge.completed = true;
  },
  [types.UPDATE_LEVEL_STATUS](state, challengeId) {
    const currentLevel = state.levels.find((level) => level.id === challengeId);
    currentLevel.completed = true;
  },
  [types.RESET_LEVEL_STATE](state, levelId) {
    state.userLife = 5;
    const level = state.levels.find(({ id }) => id === levelId);
    level.challenges = level.challenges.map((challenge) => ({ ...challenge, completed: false }));
  },
};
