import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {ROUTE_BUTTONS, ROUTE_TEXTS} from '~/navigation/routes/SignedInRoutes';

const translator = TRANSLATION_SCREENS.home;

const HomeScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const buttons = [
    {
      label: translator.buttons.buttons,
      onPress: () => navigator.navigate(ROUTE_BUTTONS),
    },
    {
      label: translator.buttons.texts,
      onPress: () => navigator.navigate(ROUTE_TEXTS),
    },
  ];

  return (
    <AppScreenContainer style={styles.container}>
      {buttons.map(button => (
        <PrimaryButton
          key={button.label}
          label={button.label}
          onPress={button.onPress}
          containerStyle={styles.button}
        />
      ))}
    </AppScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
