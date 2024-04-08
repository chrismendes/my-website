export const friendlyURL = (url: string): string => {
  const base: URL = new URL(url);
  const hostOnly = base.hostname;
  const unwanted = "www.";
  return hostOnly.replace(unwanted, "");
}