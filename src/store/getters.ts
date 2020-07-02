export default {
  levelInformation: ({ gameLevelId, levels }: { gameLevelId: number, levels: Object[] }) =>
    levels.find(({ id }: any) => id === gameLevelId),
};
