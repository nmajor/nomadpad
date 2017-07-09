import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { primaryColor } from '../styleVars';

const FooterIcon = (props) => {
  const { viewStyle } = styles;
  let { textStyle } = styles;

  if (props.fontSize) {
    textStyle = { ...textStyle, fontSize: parseInt(props.fontSize, 10) };
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 40,
    lineHeight: 40,
    color: primaryColor,
  },
};

export default FooterIcon;
