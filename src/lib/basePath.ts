export const BASE_PATH: string = "/resume-brightai/";

export function withBasePath(path: string): string {
  const stripped = path.startsWith("/") ? path.slice(1) : path;
  const base = BASE_PATH.endsWith("/") ? BASE_PATH : BASE_PATH + "/";
  return base + stripped;
}
