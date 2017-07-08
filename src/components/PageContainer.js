import React, { Component } from 'react';
import { View } from 'react-native';
// import { View, StatusBar } from 'react-native';
import Footer from './Footer';
import { bgColor } from '../styleVars';

class PageContainer extends Component {
  render() {
    const {
      containerStyle,
      bodyStyle,
      footerStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={bodyStyle}>
          {this.props.children}
        </View>
        <View style={footerStyle}>
          <Footer sceneKey={this.props.sceneKey} />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  bodyStyle: {
    flex: 1,
    backgroundColor: bgColor,
  },
  footerStyle: {
    height: 50,
  },
};

export default PageContainer;
