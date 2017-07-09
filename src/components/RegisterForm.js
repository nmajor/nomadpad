// import React, { Component } from 'react';
// import { reduxForm } from 'redux-form/immutable';
// import { View } from 'react-native';
// import { Input, Button, Spinner, Card, CardSection } from './common';
//
// // const onSubmit = (values, dispatch) => {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log(values.toJS());
// //       resolve();
// //     }, 1500);
// //   });
// // };
//
// class FormView extends Component {
//   onSubmit(values) {
//     const { handleSubmit } = this.props;
//     handleSubmit(values);
//   }
//   renderButton() {
//     if (this.props.loading) {
//       return <Spinner size="large" />;
//     }
//
//     return (
//       <Button onPress={this.onSubmit.bind(this)}>
//         Login
//       </Button>
//     );
//   }
//   render() {
//     const { submitting } = this.props;
//
//     return (
//       <Card>
//         <CardSection border>
//           <Input
//             label="Email"
//             placeholder="password"
//             value={this.props.email}
//           />
//         </CardSection>
//         <CardSection border>
//           <Input
//             secureTextEntry
//             label="Password"
//             placeholder="password"
//             value={this.props.password}
//           />
//         </CardSection>
//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//       </Card>
//     );
//   }
// }
//
// export default reduxForm({
//   form: 'Form',
//   validate: values => {
//     const errors = {};
//     values = values.toJS();
//
//     if (!values.first_name) { errors.first_name = 'First name is required.'; }
//     if (!values.last_name) { errors.last_name = 'Last name is required.'; }
//     if (!values.email) { errors.email = 'Email is required.'; }
//
//     return errors;
//   },
// })(FormView);
