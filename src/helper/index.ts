/* eslint-disable @typescript-eslint/no-explicit-any */
export const concatSkill = <T extends any[]>(...data: T) =>
  data.flat().map((item) => item?.name);
