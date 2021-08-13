import 'styled-components';

interface ThemePalette {
  main: string;
  secondary: string;
  abisso: string;
  terra: string;
  aqua: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      terracotta: ThemePalette;
    };
    fonts: {
      main: string;
      display: string;
    };
  }
}
