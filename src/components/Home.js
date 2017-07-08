import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';

class Home extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }
  render() {
    return (
      <Container sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <EntryForm />
          {this.renderAvgWidget()}
          {this.renderTopWidget()}
          <View style={{ marginBottom: 15 }} />
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasEntries: state.entries.length > 0,
    entries: state.entries,
    goals: state.goals,
  };
};

export default connect(mapStateToProps)(Home);
