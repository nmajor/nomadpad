import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import Search from './components/Search';
import Add from './components/Add';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import { primaryColor, primaryColorDark } from './styleVars';
import appConfig from '../app.json';

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

    const title = appConfig.displayName;

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
          <Scene key="welcome" sceneStyle={{ paddingTop: 0 }} component={Register} hideNavBar initial={this.isInitial('welcome')} />
          <Scene key="register" sceneStyle={{ paddingTop: 0 }} component={Register} hideNavBar initial={this.isInitial('register')} />
          <Scene key="login" sceneStyle={{ paddingTop: 0 }} component={Login} hideNavBar initial={this.isInitial('login')} />
          <Scene key="search" component={Search} title={title} initial={this.isInitial('home')} />
          <Scene key="add" component={Add} title={title} />
          <Scene key="profile" component={Profile} title={title} />
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
  let initialScene = 'search';
  console.log(pagesViewed);

  if (!pagesViewed.welcome) {
    initialScene = 'welcome';
  }

  return { initialScene };
};

export default connect(mapStateToProps)(RouterComponent);
