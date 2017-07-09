import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Button, Spinner, Card, CardSection } from './common';
import { queryResidences, clearResidences, setSearchFormValue, clearSearchForm } from '../actions';

class Search extends Component {
  componentWillUnmount() {
    this.props.clearSearchForm();
  }
  onQueryChange(text) {
    this.props.setSearchFormValue('query', text);

    if (text.length === 0) {
      this.props.clearResidences();
    }
  }
  handleSubmitPress() {
    const { query } = this.props.form;
    this.refs.search.blur();

    this.props.queryResidences(query, () => {
      Actions.viewResidence({ type: ActionConst.RESET });
    });
  }
  renderButton() {
    if (this.props.form.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.handleSubmitPress.bind(this)}>
        Search
      </Button>
    );
  }
  render() {
    // <TextInput
    //   autoCorrect
    //   style={inputStyle}
    //   value={form.search}
    //   onChangeText={this.onSearchChange.bind(this)}
    // />
    const { inputStyle, containerStyle } = styles;

    const { form } = this.props;

    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <TextInput
              ref="search"
              autoCorrect
              style={inputStyle}
              placeholder="Enter a City"
              value={form.query}
              onChangeText={this.onQueryChange.bind(this)}
            />
          </View>
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    textAlign: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const mapStateToProps = ({ searchForm }) => {
  return { form: searchForm };
};

export default connect(mapStateToProps, { queryResidences, clearResidences, setSearchFormValue, clearSearchForm })(Search);
