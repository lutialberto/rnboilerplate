import {StyleSheet} from 'react-native';
import React from 'react';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {
  ROUTE_ABOUT,
  ROUTE_BIOMETRIC_AUTH,
  ROUTE_BUTTONS,
  ROUTE_FORMS,
  ROUTE_LISTS,
  ROUTE_LOADING,
  ROUTE_MENU,
  ROUTE_MODALS,
  ROUTE_SLIDERS,
  ROUTE_TABS,
  ROUTE_TEXTS,
  ROUTE_TOASTS,
  ROUTE_USER_PREFERENCES,
} from '~/navigation/routes/SignedInRoutes';
import Logout from './components/logout/Logout';

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
    {
      label: translator.buttons.loading,
      onPress: () => navigator.navigate(ROUTE_LOADING),
    },
    {
      label: translator.buttons.modals,
      onPress: () => navigator.navigate(ROUTE_MODALS),
    },
    {
      label: translator.buttons.toasts,
      onPress: () => navigator.navigate(ROUTE_TOASTS),
    },
    {
      label: translator.buttons.forms,
      onPress: () => navigator.navigate(ROUTE_FORMS),
    },
    {
      label: translator.buttons.about,
      onPress: () => navigator.navigate(ROUTE_ABOUT),
    },
    {
      label: translator.buttons.userPreferences,
      onPress: () => navigator.navigate(ROUTE_USER_PREFERENCES),
    },
    {
      label: translator.buttons.lists,
      onPress: () => navigator.navigate(ROUTE_LISTS),
    },
    {
      label: translator.buttons.menu,
      onPress: () => navigator.navigate(ROUTE_MENU),
    },
    {
      label: translator.buttons.sliders,
      onPress: () => navigator.navigate(ROUTE_SLIDERS),
    },
    {
      label: translator.buttons.biometricAuth,
      onPress: () => navigator.navigate(ROUTE_BIOMETRIC_AUTH),
    },
    {
      label: translator.buttons.tabs,
      onPress: () => navigator.navigate(ROUTE_TABS),
    },
  ];

  return (
    <AppScreenContainer style={styles.container}>
      <>
        {buttons.map(button => (
          <PrimaryButton
            key={button.label}
            label={button.label}
            onPress={button.onPress}
            containerStyle={styles.button}
          />
        ))}
        <Logout />
      </>
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
