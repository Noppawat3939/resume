export const concatSkill = <T extends any[]>(...data: T) =>
  data.flat().map((item) => item?.name);
