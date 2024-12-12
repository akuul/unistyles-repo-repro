import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CButton} from './components/CButton';
import './styles/unistyles';
import {UnistylesRuntime} from 'react-native-unistyles';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <CButton text="Primary" buttonType="primary" />
      <CButton text="Secondary" buttonType="secondary" />
      <CButton text="Success" buttonType="success" />
      <CButton text="Danger" buttonType="danger" />

      <Pressable
        style={{marginTop: 50, backgroundColor: 'purple', padding: 20}}
        onPress={() =>
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === 'light' ? 'dark' : 'light',
          )
        }>
        <Text>CHANGE THEME</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
