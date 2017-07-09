import React, { Component } from 'react';
import { View } from 'react-native';
import FooterIcon from './FooterIcon';
import { Actions, ActionConst } from 'react-native-router-flux';

class Footer extends Component {
  renderFooterIcon() {
    if (this.props.sceneKey === 'add') {
      return (<FooterIcon
        fontSize="20"
        text="Search"
        onPress={() => { Actions.search({ type: ActionConst.RESET }); }}
        active={this.props.sceneKey === 'add'}
      />);
    }

    return (<FooterIcon
      text="+"
      onPress={() => { Actions.add({ type: ActionConst.RESET }); }}
      active={this.props.sceneKey === 'add'}
    />);
  }
  render() {
    const { footerStyle } = styles;
    return (
      <View style={footerStyle}>
        {this.renderFooterIcon()}
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
