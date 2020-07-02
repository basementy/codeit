export default {
  levelInformation:
    ({ gameLevelId, levels }) => levels.find(({ id }) => id === gameLevelId),
};
