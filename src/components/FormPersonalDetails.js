import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './design.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.white,
    //primary2Color: Colors.indigo700,
    //accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.pink500,
   },
  /*appBar: {
    height: 25,
  },*/
});
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
              const { values, handleChange , } = this.props;
              return (
                <MuiThemeProvider>
                <React.Fragment>
                <AppBar title = "Enter Personal Details"  style={{ backgroundColor: '#B61B1B', }}  />
                <div className="design">
                <br/>
                <br/>
                <TextField 
                 hintText = " Enter Your Present Address."
                 hintStyle ={{color: 'white'}}
                 inputStyle={{color: 'white'}}
                 floatingLabelText="Present Address"
                 floatingLabelStyle={{color: 'white'}}
                 onChange = { handleChange ('PresentAddress')}
                 deafultValue ={values.PresentAddress}
                />
                <br/>
                <br/>
                <TextField 
                hintText = " Enter Your Symptoms."
                hintStyle ={{color: 'white'}}
                floatingLabelText="Symptoms"
                inputStyle={{color: 'white'}}
                floatingLabelStyle={{color: 'white'}}
                onChange = { handleChange ('Symptoms')}
                deafultValue ={values.Symptoms}
                />
                <br/>
                <br/>
                <TextField 
                hintText = " Blood Test Result Enter(P/N)."
                hintStyle ={{color: 'white'}}
                floatingLabelText="BloodTest"
                inputStyle={{color: 'white'}}
                floatingLabelStyle={{color: 'white'}}
                onChange = { handleChange ('BloodTest')}
         
                deafultValue ={values.BloodTest}
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
                <RaisedButton
                label="Back"
                Primary={false}
            
                styles={styles.button}
                onClick={this.back}
                />
                <br/>
                <br/>
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
             margin:1500
            }
               }

export default FormPersonalDetails;
