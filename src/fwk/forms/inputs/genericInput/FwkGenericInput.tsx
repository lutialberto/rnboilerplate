import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {IFwkGenericInputProps} from './IFwkGenericInputProps';
import FwkGenericText from '~/fwk/texts/genericText/FwkGenericText';

const FwkGenericInput = forwardRef<TextInput, IFwkGenericInputProps>(
  (
    {
      label = '',
      labelStyle,
      labelComponent,
      inputContainerStyle,
      errorMessage = '',
      errorMessageStyle,
      errorMessageComponent,
      placeholder,
      placeholderTextColor,
      value,
      onChange,
      enabled = true,
      type = 'text',
      passwordIcon1,
      passwordIcon2,
      clearIcon,
      style,
      onBlur = () => {},
      onFocus = () => {},
      multiline = false,
      onSubmit,
    },
    ref,
  ) => {
    const [passwordHidden, setPasswordHidden] = useState(type === 'password');

    const renderPasswordIcon = () => {
      if (passwordHidden) {
        return passwordIcon1;
      } else {
        return passwordIcon2;
      }
    };

    return (
      <View>
        {labelComponent ?? <FwkGenericText text={label} style={labelStyle} />}
        <View style={inputContainerStyle}>
          <TextInput
            ref={ref}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={style}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            editable={enabled}
            secureTextEntry={passwordHidden}
            multiline={multiline}
            onSubmitEditing={onSubmit}
          />
          {type === 'password' && enabled && (
            <TouchableOpacity onPress={() => setPasswordHidden((prev: boolean) => !prev)}>
              <>{renderPasswordIcon()}</>
            </TouchableOpacity>
          )}
          {value !== '' && enabled && (
            <TouchableOpacity onPress={() => onChange('')}>
              <>{clearIcon}</>
            </TouchableOpacity>
          )}
        </View>
        {errorMessage &&
          (errorMessageComponent ?? (
            <FwkGenericText style={errorMessageStyle} text={errorMessage} />
          ))}
      </View>
    );
  },
);

export default FwkGenericInput;
