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

// import { View, Text } from 'react-native'

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
      <Form>
        <FieldsContainer>
          <Fieldset label="Register">
            <Input name="first_name" label="First name" placeholder="John" />
            <Input name="last_name" label="Last name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="something@domain.com" />
            <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" />
          </Fieldset>
        </FieldsContainer>
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
