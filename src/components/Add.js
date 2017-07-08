import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import PageContainer from './PageContainer';

class Add extends Component {
  render() {
    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <View><Text>ADD PAGE</Text></View>
        </ScrollView>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Add);
