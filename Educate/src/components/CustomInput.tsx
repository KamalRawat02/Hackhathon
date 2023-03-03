import React from 'react';
import {Input} from '@rneui/themed';
interface Props {
  inputStyle?: any;
  children?: any;
  placeText?: string;
  heading: string;
  leftIconType?: any;
  rightIconType?: any;
  value: any;
  onChangeText: any;
}
const CustomInput = (props: Props) => {
  return (
    <Input
      label={props.heading}
      placeholder={props.placeText}
      leftIcon={props.leftIconType}
      rightIcon={props.rightIconType}
      {...props}
      value={props.value}
      onChangeText={props.onChangeText}>
      {props.children}
    </Input>
  );
};

export default CustomInput;
