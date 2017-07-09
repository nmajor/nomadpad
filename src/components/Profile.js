import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PageContainer from './PageContainer';

class Profile extends Component {
  showEditProfile() {
    Actions.editProfile();
  }
  render() {
    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <View><Text>PROFILE PAGE</Text></View>
          <TouchableOpacity onPress={this.showEditProfile.bind(this)}><Text>Edit Profile</Text></TouchableOpacity>
        </ScrollView>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {};
};

export default connect(mapStateToProps)(Profile);
