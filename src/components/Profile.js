import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import PageContainer from './PageContainer';

class Home extends Component {
  render() {
    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <View><Text>PROFILE PAGE</Text></View>
        </ScrollView>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Home);
