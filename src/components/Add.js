import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
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
  onWifiBadPress() { this.props.setResidenceFormValue('wifi', 0); }
  onWifiFairPress() { this.props.setResidenceFormValue('wifi', 1); }
  onWifiGoodPress() { this.props.setResidenceFormValue('wifi', 2); }
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
  renderWifiOptions() {
    return (
      <View>
        <View><Text>Wifi</Text></View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.onWifiBadPress.bind(this)}><Text>Bad</Text></TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.onWifiFairPress.bind(this)}><Text>Fair</Text></TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.onWifiGoodPress.bind(this)}><Text>Good</Text></TouchableOpacity>
        </View>
      </View>
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
            <CardSection>
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
