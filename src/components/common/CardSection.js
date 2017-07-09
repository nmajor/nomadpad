import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  let { containerStyle } = styles;
  const { border } = props;

  if (border) {
    containerStyle = {
      ...containerStyle,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    };
  }

  return (
    <View style={[containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

export { CardSection };
