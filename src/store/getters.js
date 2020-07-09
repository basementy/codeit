export default {
  levelInformation:
    ({ levelId, levels }) => levels.find(({ id }) => id === levelId),
};
