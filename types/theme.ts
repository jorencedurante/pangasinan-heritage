export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
}

export interface SiteTheme {
  siteName: string;
  shortName: string;
  tagline: string;
  client: string;
  colors: ThemeColors;
}
