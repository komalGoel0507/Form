import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormUserDetails extends Component {
    continue = e => {
                     e.preventDefault();
                     this.props.nextStep();
                    };
    render() {
              const { values, handleChange } = this.props;
              return (
                <MuiThemeProvider>

                <React.Fragment>
                <AppBar title = "Enter User Details" />
                <TextField 
                 hintText = " Enter Your First Name"
                 floatingLableText ="First Name"
                 onChange = { handleChange ('firstName')}
                 deafultValue ={values.firstName}
                />
                <br/>
                <TextField 
                hintText = " Enter Your Last Name"
                floatingLableText ="Last Name"
                onChange = { handleChange ('lastName')}
                deafultValue ={values.lastName}
                />
                <br/>
                <TextField 
                hintText = " Enter Your Email id"
                floatingLableText ="Email"
                onChange = { handleChange ('email')}
                deafultValue ={values.email}
                />
                <br/>
                <RaisedButton
                label="Continue"
                Primary={true}
                styles={styles.button}
                onClick={this.continue}
                />
                </React.Fragment>
                </MuiThemeProvider>
                );
            }
}
const styles = { 
    button: {
             margin:15 
            }
               }

export default FormUserDetails;
