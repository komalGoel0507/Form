import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import vid2 from './video/vid2.mp4'
import './design.css';
const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    pickerHeaderColor: Colors.pink500,
   },

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
                <AppBar title = "Enter Personal Details"  style={{ backgroundColor: '#e53935', }}/>
                <div className="design1">
                <video autoPlay loop muted
                  style={{
                  position: "absolute",
                  width:"100%",
                  left: "50%",
                  top: "60%",
                  height: "190%",
                  objectFit: "cover",
                  transform: "translate(-50%,-50%)",
                  zindex: "-1"
                  }}>
                    <source src={vid2} type="video/mp4"/>
                  </video>
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
