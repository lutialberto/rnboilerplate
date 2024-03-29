import {StyleSheet, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import {IFwkGenericInputProps} from '~/fwk/forms/inputs/genericInput/IFwkGenericInputProps';
import GenericInput from '../genericInput/GenericInput';

const MultilineInput = forwardRef<TextInput, IFwkGenericInputProps>(
  ({style, inputContainerStyle, ...props}, ref) => {
    return (
      <GenericInput
        {...props}
        multiline
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        style={[styles.input, style]}
        ref={ref}
      />
    );
  },
);

export default MultilineInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
  },
  input: {
    height: 100,
    textAlignVertical: 'top',
  },
});
