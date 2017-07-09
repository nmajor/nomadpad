import React, { Component } from 'react';
import { reduxForm } from 'redux-form/immutable';
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
} from 'react-native-clean-form';
import { Input } from 'react-native-clean-form/redux-form-immutable';

import { View } from 'react-native'

// const onSubmit = (values, dispatch) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(values.toJS());
//       resolve();
//     }, 1500);
//   });
// };

class FormView extends Component {
  onSubmit(values) {
    const { handleSubmit } = this.props;
    handleSubmit(values);
  }
  render() {
    const { submitting } = this.props;

    return (
      <Form style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 1 }} />
        <FieldsContainer style={{ width: '100%' }}>
          <Fieldset label="Register" style={{ width: '100%' }}>
            <Input name="email" label="Email" placeholder="john@example.com" />
            <Input name="password" label="Password" />
            <Input name="password_confirmation" label="Confirm Password" />
          </Fieldset>
        </FieldsContainer>
        <View style={{ flex: 1 }} />
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right" onPress={this.onSubmit} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'Form',
  validate: values => {
    const errors = {};
    values = values.toJS();

    if (!values.first_name) { errors.first_name = 'First name is required.'; }
    if (!values.last_name) { errors.last_name = 'Last name is required.'; }
    if (!values.email) { errors.email = 'Email is required.'; }

    return errors;
  },
})(FormView);
