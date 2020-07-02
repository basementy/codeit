export default {
  levelInformation: ({ gameLevelId, levels }: { gameLevelId: number; levels: Record<string, any>[] }) => levels.find(({ id }: any) => id === gameLevelId),
};
