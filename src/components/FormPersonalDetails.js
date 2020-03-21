import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormPersonalDetails extends Component {
    continue = e => {
                     e.preventDefault();
                     this.props.nextStep();
                    };
    back = e => {
                  e.preventDefault();
                  this.props.prevStep();
                };
    render() {
              const { values, handleChange } = this.props;
              return (
                <MuiThemeProvider>

                <React.Fragment>
                <AppBar title = "Enter Personal Details" />
                <TextField 
                 hintText = " Enter Your Occupation"
                 floatingLableText ="Occupation"
                 onChange = { handleChange ('occupation')}
                 deafultValue ={values.occupation}
                />
                <br/>
                <TextField 
                hintText = " Enter Your City Name"
                floatingLableText ="City Name"
                onChange = { handleChange ('city')}
                deafultValue ={values.city}
                />
                <br/>
                <TextField 
                hintText = " Enter Your BIO"
                floatingLableText ="Bio"
                onChange = { handleChange ('bio')}
                deafultValue ={values.bio}
                />
                <br/>
                <RaisedButton
                label="Continue"
                Primary={true}
                styles={styles.button}
                onClick={this.continue}
                />
                <RaisedButton
                label="Back"
                Primary={false}
                styles={styles.button}
                onClick={this.back}
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

export default FormPersonalDetails;
