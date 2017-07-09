import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
// import { Actions, ActionConst } from 'react-native-router-flux';
import { primaryColor } from '../styleVars';
import { loginUserFacebook, setLoginFormValue } from '../actions';
import { Input, Button, Spinner, Card, CardSection } from './common';

const saladImage = require('../assets/map-desk.jpg');

class Login extends Component {
  onEmailChange(text) {
    this.props.setLoginFormValue('email', text);
  }
  onPasswordChange(text) {
    this.props.setLoginFormValue('password', text);
  }
  handleSubmitPress() {
    const { email, password } = this.props.form;
    this.props.loginUser(email, password);
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.handleSubmitPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    const {
      imageStyle,
      // headerTextStyle,
      // bodyStyle,
      // buttonStyle,
      // touchableStyle,
      // buttonContainerStyle,
      // buttonTextStyle,
      overlayStyle,
      formWrapperStyle,
    } = styles;

    const { form } = this.props;

    return (
      <Image style={imageStyle} source={saladImage}>
        <View style={overlayStyle}>
          <View style={formWrapperStyle}>
            <Card>
              <CardSection border>
                <Input
                  label="Email"
                  placeholder="password"
                  value={form.email}
                  onChangeText={this.onEmailChange.bind(this)}
                />
              </CardSection>
              <CardSection border>
                <Input
                  secureTextEntry
                  label="Password"
                  placeholder="password"
                  value={form.password}
                  onChangeText={this.onPasswordChange.bind(this)}
                />
              </CardSection>
              <CardSection>
                {this.renderButton()}
              </CardSection>
            </Card>
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
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  formWrapperStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

const mapStateToProps = ({ loginForm }) => {
  return {
    form: loginForm,
  };
};

export default connect(mapStateToProps, { loginUserFacebook, setLoginFormValue })(Login);
