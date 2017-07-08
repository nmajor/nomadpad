import React, { Component } from 'react';
import { View } from 'react-native';
import FooterIcon from './FooterIcon';
import { Actions, ActionConst } from 'react-native-router-flux';

class Footer extends Component {
  render() {
    const { footerStyle } = styles;
    return (
      <View style={footerStyle}>
        <FooterIcon
          text="Search"
          onPress={() => { Actions.search({ type: ActionConst.RESET }); }}
          active={this.props.sceneKey === 'search'}
        />
        <FooterIcon
          text="Add"
          onPress={() => { Actions.add({ type: ActionConst.RESET }); }}
          active={this.props.sceneKey === 'add'}
        />
        <FooterIcon
          text="Profile"
          onPress={() => { Actions.profile({ type: ActionConst.RESET }); }}
          active={this.props.sceneKey === 'profile'}
        />
      </View>
    );
  }
}

const styles = {
  footerStyle: {
    borderTopColor: '#CCC',
    borderTopWidth: 1,
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

export default Footer;
