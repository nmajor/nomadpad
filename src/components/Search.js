import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SearchForm from './SearchForm';
import PageContainer from './PageContainer';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { primaryColor } from '../styleVars';
// import { Actions, ActionConst } from 'react-native-router-flux';
import { Card } from './common';
// import { Button, Spinner, Card, CardSection } from './common';
// import { queryResidences, setSearchFormValue, clearSearchForm } from '../actions';

class Search extends Component {
  handleAddPress() {
    Actions.add();
  }
  renderResultsList() {
    return _.map(this.props.residences, (residence, id) => {
      return (
        <Card key={id}>
          <Text>City: {residence.city}</Text>
          <Text>Address: {residence.address}</Text>
          <Text>Contact: {residence.contact}</Text>
        </Card>
      );
    });
  }
  renderAddFooter() {
    return (<View style={styles.footerStyle}>
      <TouchableOpacity onPress={this.handleAddPress.bind(this)} style={styles.addStyle}><Text style={styles.addTextStyle}>+</Text></TouchableOpacity>
    </View>);
  }
  renderBody() {
    if (_.isEmpty(this.props.residences)) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <SearchForm />
          </View>
        </View>
      );
    }

    return (<View style={{ flex: 1 }}>
      <View style={{ height: 150, justifyContent: 'center' }}>
        <SearchForm />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {this.renderResultsList()}
      </ScrollView>
    </View>);
  }
  render() {
    // <TextInput
    //   autoCorrect
    //   style={inputStyle}
    //   value={form.search}
    //   onChangeText={this.onSearchChange.bind(this)}
    // />

    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        {this.renderBody()}
      </PageContainer>
    );
  }
}

const styles = {
  footerStyle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  addStyle: {
  },
  addTextStyle: {
    color: primaryColor,
    fontSize: 50,
  },
};

const mapStateToProps = ({ residences }) => {
  return { residences };
};

export default connect(mapStateToProps)(Search);
