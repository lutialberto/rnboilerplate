import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AppScreenContainer from '~/components/containers/screenContainer/AppScreenContainer';
import {TRANSLATION_SCREENS} from '~/constants/Translator';
import PrimaryButton from '~/components/buttons/primaryButton/PrimaryButton';
import {useDimentions} from '~/hooks/useDimentions';
import ClearIcon from '~/assets/svg/icons_clear.svg';
import CopyIcon from '~/assets/svg/icons_copy.svg';
import {useThemeHandler} from '~/hooks/theme/useThemeHandler';
import {ColorProps} from '~/hooks/theme/Models';
import ShareButton from '~/components/buttons/shareButton/ShareButton';
import GenericScreenHeader from '~/components/containers/genericScreenHeader/GenericScreenHeader';

const translator = TRANSLATION_SCREENS.home.screens.buttons;
const {vw} = useDimentions();

const ButtonsScreen = () => {
  const {getColors} = useThemeHandler();
  const colors = getColors();
  const styles = getStyles(colors);
  const [buttonsEnabled, setButtonsEnabled] = useState(true);

  return (
    <AppScreenContainer>
      <GenericScreenHeader title={translator.title} />
      <PrimaryButton
        onPress={() => {}}
        label={translator.defaultVariant}
        enabled={buttonsEnabled}
        containerStyle={styles.button}
      />
      <PrimaryButton
        onPress={() => {}}
        label={translator.secondaryVariant}
        variant="secondary"
        enabled={buttonsEnabled}
        containerStyle={styles.button}
      />
      <PrimaryButton
        onPress={() => {}}
        label={translator.secondaryNoBorderVariant}
        variant="secondaryNoBorder"
        enabled={buttonsEnabled}
        containerStyle={styles.button}
      />

      <PrimaryButton
        onPress={() => setButtonsEnabled(prev => !prev)}
        label={buttonsEnabled ? translator.disableButtons : translator.enableButtons}
        containerStyle={styles.button}
      />

      <PrimaryButton
        onPress={() => {}}
        label={translator.iconButton}
        icon={<ClearIcon style={{color: colors.fontColor}} />}
        containerStyle={styles.button}
      />
      <ShareButton
        onPress={() => {}}
        icon={<CopyIcon style={{color: colors.fontColor}} />}
        containerStyle={styles.button}
        message={translator.shareTemplate}
      />
    </AppScreenContainer>
  );
};

export default ButtonsScreen;

const getStyles = (colors: ColorProps) => {
  return StyleSheet.create({
    button: {
      marginHorizontal: vw * 10,
      marginVertical: vw,
    },
  });
};
