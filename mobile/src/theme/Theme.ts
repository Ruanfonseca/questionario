import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createContext } from 'react';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  configureFonts,
} from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const fontConfig = {
  fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial,"Sansita One"'
};

export const defaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
  fonts: {
    ...MD3LightTheme.fonts,
    SansitaOne: {
      fontFamily: '"Sansita One"', // Defina o nome da sua fonte personalizada
      fontWeight: 'normal', // Defina o peso da fonte (opcional)
    },
    Poppins: {
      fontFamily: 'Poppins', // Defina o nome da sua fonte personalizada
      fontWeight: 'normal', // Defina o peso da fonte (opcional)
    }
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
