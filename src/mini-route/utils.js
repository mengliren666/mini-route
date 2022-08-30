export const normalizePathname = (pathname) =>
  pathname.replace(/^\/*/, "/");  //除掉你设置了多个"/",或没有"/"