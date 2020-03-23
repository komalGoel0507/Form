import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './design.css'


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const muiTheme = getMuiTheme({
    palette: {
      textColor: Colors.darkBlack,
     // primary1Color: Colors.white,
      //primary2Color: Colors.indigo700,
      //accent1Color: Colors.redA200,
     // pickerHeaderColor: Colors.blue400,
    },
    appBar: {
      height: 5,
    },
  });
export class FormUserDetails extends Component {
    continue = e => {
                     e.preventDefault();
                     this.props.nextStep();
                    };
    render() {
              const { values, handleChange } = this.props;
              return (
                <MuiThemeProvider /*muiTheme={muiTheme}*/>
                <React.Fragment>
              <AppBar title = "Enter Your Details" style={{ backgroundColor: '#B61B1B', }} />
                <div className="design">
                <br/>
                <TextField 
                 hintText = " Enter Your Name."
                 hintStyle ={{color: 'white'}}
                 floatingLabelText="Name"
                 inputStyle={{color: 'white'}}
                 floatingLabelStyle={{color: 'white'}}
                 onChange = { handleChange ('Name')}
                 deafultValue ={values.Name}
                />
                <br/>
                <TextField 
                hintText = " Enter Your Age."
                hintStyle ={{color: 'white'}}
                floatingLabelText="Age"
                inputStyle={{color: 'white'}}
                floatingLabelStyle={{color: 'white'}}
                onChange = { handleChange ('age')}
                deafultValue ={values.age}
                />
                <br/>
                <TextField 
                hintText = "You are Travelling From. "
                hintStyle ={{color: 'white'}}
                floatingLabelText="Travelling From"
                floatingLabelStyle={{color: 'white'}}
                inputStyle={{color: 'white'}}
                onChange = { handleChange ('TravellingFrom')}
                deafultValue ={values.TravellingFrom}
                />
                <br/>
                 <TextField 
                hintText = " Enyer Your Arrival Date."
                hintStyle ={{color: 'white'}}
                floatingLabelText="Arrival Date"
                floatingLabelStyle={{color: 'white'}}
                inputStyle={{color: 'white'}}
                onChange = { handleChange ('ArrivalDate')}
                deafultValue ={values.ArrivalDate}
                />
                <br/>
                <br/>
                <br/>
                <RaisedButton
                label="Continue "
                Primary={true}
                styles={styles.button}
                onClick={this.continue}
                
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
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
