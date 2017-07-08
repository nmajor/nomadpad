import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import { primaryColor, primaryColorDark } from './styleVars';

class RouterComponent extends Component {
  shouldComponentUpdate() {
    return false;
  }
  isInitial(key) {
    return this.props.initialScene === key;
  }
  render() {
    const {
      navBarStyle,
      navBarTitleStyle,
    } = styles;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
        />
        <Router
          sceneStyle={{ paddingTop: 64 }}
          navigationBarStyle={navBarStyle}
          titleStyle={navBarTitleStyle}
          leftButtonIconStyle={{ tintColor: '#FFF' }}
        >
          <Scene key="welcome" sceneStyle={{ paddingTop: 0 }} component={Welcome} hideNavBar initial={this.isInitial('welcome')} />
        </Router>
      </View>
    );
  }
}

const styles = {
  navBarStyle: {
    backgroundColor: primaryColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    borderBottomColor: primaryColorDark,
    borderBottomWidth: 1,
  },
  navBarTitleStyle: {
    color: '#FFF',
  },
};

const mapStateToProps = ({ pagesViewed }) => {
  let initialScene = 'home';

  if (!pagesViewed.welcome) {
    initialScene = 'welcomed';
  }

  return { initialScene };
};

export default connect(mapStateToProps)(RouterComponent);
