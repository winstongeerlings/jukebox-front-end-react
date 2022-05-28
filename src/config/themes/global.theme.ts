
export const GlobalTheme = {
  colors: {
    text: '#330000',
    body: '#fff'
  }
};

export interface DefaultTheme {
  colors: {
    main: string;
    secondary: string;
    body: string;
    text: string;
  };
  font: {
    import: string;
    family: string;
  }
}