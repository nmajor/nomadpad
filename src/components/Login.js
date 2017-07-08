import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, Image } from 'react-native';
// import { Actions, ActionConst } from 'react-native-router-flux';
import { primaryColor } from '../styleVars';
import { loginUser } from '../actions';

const saladImage = require('../assets/map-desk.jpg');

class Login extends Component {
  onButtonPress() {
    this.props.loginUser();
    console.log('blah button pressed on login pave');
  }
  render() {
    const {
      imageStyle,
      headerTextStyle,
      // bodyStyle,
      buttonStyle,
      touchableStyle,
      buttonContainerStyle,
      buttonTextStyle,
      overlayStyle,
    } = styles;

    return (
      <Image style={imageStyle} source={saladImage}>
        <View style={overlayStyle}>
          <Text style={headerTextStyle}>Login</Text>
          <View style={buttonContainerStyle}>
            <View style={buttonStyle}>
              <TouchableOpacity style={touchableStyle} onPress={this.onButtonPress.bind(this)}>
                <Text style={buttonTextStyle}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = {
  imageStyle: {
    flex: 1,
    height: null,
    width: null,
  },
  headerTextStyle: {
    color: '#FFF',
    fontSize: 36,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  bodyStyle: {
    fontFamily: 'Helvetica',
    fontWeight: '100',
    color: '#FFF',
    fontSize: 18,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainerStyle: {
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: primaryColor,
    height: 50,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
  },
  touchableStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '300',
    fontSize: 18,
  },
  overlayStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { loginUser })(Login);
