import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';
import PrimaryText from '~/components/texts/primaryText/PrimaryText';
import SendEmailForm from '~/screens/home/screens/forms/screens/sendEmail/components/sendEmailForm/SendEmailForm';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationType} from '~/navigation/MainStack';
import {SendEmailFormInputs} from '~/screens/home/screens/forms/screens/sendEmail/models/SendEmailFormInputs';
import {IFormErrors} from '~/hooks/forms/Models';
import {ROUTE_REGISTER_EMAIL_VERIFICATION} from '~/navigation/routes/NotSignedInRoutes';

const translator = TRANSLATION_SCREENS.welcome.screens.register.screens.sendEmail;

const RegisterScreen = () => {
  const navigator = useNavigation<MainScreenNavigationType>();

  const onSuccess = (values: SendEmailFormInputs) => {
    navigator.navigate(ROUTE_REGISTER_EMAIL_VERIFICATION, {email: values.email});
  };

  const onError = (values: SendEmailFormInputs, errors: IFormErrors<SendEmailFormInputs>) => {};
  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.header} />
      <PrimaryText text={translator.message} />
      <View style={styles.formContainer}>
        <SendEmailForm onSuccess={onSuccess} onError={onError} />
      </View>
    </AppScreenContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
});
