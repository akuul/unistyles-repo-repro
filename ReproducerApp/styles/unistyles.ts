import {StyleSheet} from 'react-native-unistyles';
import {appThemes} from './theme';

StyleSheet.configure({
  settings: {initialTheme: 'light'},
  themes: appThemes,
});

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
