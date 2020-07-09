import levels from '@/utils/levels';
import challenges from '@/utils/challenges';
import types from './types';

const loadGameLevels = ({ commit }) => {
  if (global.localStorage.levels) {
    commit(types.SET_LEVELS, JSON.parse(global.localStorage.levels));
  } else {
    const formatedLevel = levels.map((level) => ({
      ...level,
      challenges: challenges
        .find((challenge) => challenge.id === level.id)?.challenges,
    }));

    commit(types.SET_LEVELS, formatedLevel);
  }
};

const updateChallengeStatus = ({ commit }, challengeId) => {
  commit(types.UPDATE_CHALLENGE_STATUS, challengeId);
};

const updateLevelStatus = ({ commit }, levelId) => {
  commit(types.UPDATE_LEVEL_STATUS, levelId);
};

const updateUserLife = ({ commit }) => {
  commit(types.UPDATE_USER_LIFE);
};

const setCurrentLevel = ({ commit }, levelId) => {
  commit(types.SET_CURRENT_LEVEL, levelId);
};

const setGameLevel = ({ commit }, levelId) => {
  commit(types.SET_GAME_LEVEL, levelId);
};

const setGameChallenge = ({ commit }, challengeId) => {
  commit(types.SET_GAME_CHALLENGE, challengeId);
};

const resetLevelState = ({ commit }, levelId) => {
  commit(types.RESET_LEVEL_STATE, levelId);
};

export default {
  loadGameLevels,
  setCurrentLevel,
  setGameLevel,
  setGameChallenge,
  updateChallengeStatus,
  updateLevelStatus,
  updateUserLife,
  resetLevelState,
};
