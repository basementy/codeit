const challengeInformation = ({ currentChallenge, currentLevel, levels }) => {
  const gameLevel = levels.find((level) => level.id === currentLevel);
  return gameLevel?.challenges
    ?.find(({ id }) => id === currentChallenge) || {};
};

const levelInformation = ({ levelId, levels }) => levels
  ?.find(({ id }) => id === levelId) || {};

export default {
  challengeInformation,
  levelInformation,
};
