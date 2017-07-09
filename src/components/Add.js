import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import PageContainer from './PageContainer';
import { Actions, ActionConst } from 'react-native-router-flux';
import { createResidence, setResidenceFormValue, clearResidenceForm } from '../actions';
import { Input, Button, Spinner, Card, CardSection } from './common';

class Add extends Component {
  componentWillUnmount() {
    this.props.clearResidenceForm();
  }
  onCityChange(text) {
    this.props.setResidenceFormValue('city', text);
  }
  onAddressChange(text) {
    this.props.setResidenceFormValue('address', text);
  }
  onContactChange(text) {
    this.props.setResidenceFormValue('contact', text);
  }
  handleSubmitPress() {
    const {
      city,
      address,
      contact,
    } = this.props.form;

    this.props.createResidence({
      city,
      address,
      contact,
    }, () => {
      Actions.search({ type: ActionConst.RESET });
    });
  }
  renderButton() {
    if (this.props.form.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.handleSubmitPress.bind(this)}>
        Create
      </Button>
    );
  }
  render() {
    const { form } = this.props;

    return (
      <PageContainer sceneKey={this.props.sceneKey}>
        <ScrollView style={{ flex: 1 }}>
          <Card>
            <CardSection border>
              <Input
                label="City"
                value={form.city}
                onChangeText={this.onCityChange.bind(this)}
              />
            </CardSection>
            <CardSection border>
              <Input
                label="Address"
                value={form.address}
                onChangeText={this.onAddressChange.bind(this)}
              />
            </CardSection>
            <CardSection border>
              <Input
                label="Contact"
                value={form.contact}
                onChangeText={this.onContactChange.bind(this)}
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

const mapStateToProps = ({ residenceForm }) => {
  return { form: residenceForm };
};

export default connect(mapStateToProps, { createResidence, setResidenceFormValue, clearResidenceForm })(Add);
