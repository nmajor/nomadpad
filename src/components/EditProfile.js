import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableOpacity, CameraRoll } from 'react-native';
import { Input, Button, Spinner, Card, CardSection } from './common';
import { setProfileFormValue } from '../actions';
import PageContainer from './PageContainer';

class EditProfile extends Component {
  onDisplayNameChange(text) {
    this.props.setProfileFormValue('displayName', text);
  }
  ComponentDidUnmount() {
    this.props.clearLoginForm();
  }
  handleSubmitPress() {
    const { displayName, avatar } = this.props.form;
    this.props.updateUser({ displayName, avatar });
  }
  handlePhotoPress() {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos',
    })
    .then((data) => {
      const image = data[0].node.image;
      this.props.setProfileFormValue('avatar', image);
    });
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
    const { form } = this.props;

    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <View><Text>PROFILE PAGE</Text></View>
          <TouchableOpacity onPress={this.handlePhotoPress.bind(this)}><Text>CAMERA</Text></TouchableOpacity>
          <Card>
            <CardSection border>
              <Input
                label="Email"
                placeholder="password"
                value={form.email}
                onChangeText={this.onDisplayNameChange.bind(this)}
              />
            </CardSection>
            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        </ScrollView>
      </PageContainer>
    );
  }
}

const mapStateToProps = (profileForm) => {
  return {
    form: profileForm,
  };
};

export default connect(mapStateToProps, { setProfileFormValue })(EditProfile);
