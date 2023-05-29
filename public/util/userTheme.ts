export type TuserTheme = "dark" | "light";

const getUserTheme = (): TuserTheme => {
  const isThemeDark: boolean =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme: TuserTheme = isThemeDark ? "dark" : "light";
  return theme;
};

export default getUserTheme;
