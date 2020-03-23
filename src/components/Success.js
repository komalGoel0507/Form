import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './design.css'
//import { List, ListItem } from 'material-ui/List';
//import RaisedButton from 'material-ui/RaisedButton';
const muiTheme = getMuiTheme({
  palette: {
    //textColor: color.white,
   // primary1Color: Colors.#F7FAF8e,
    //primary2Color: Colors.indigo700,
    //accent1Color: Colors.redA200,
    //pickerHeaderColor: Colors.blue400,
    
    }
  
  /*appBar: {
    height: 25,
  },*/
});




export class Success extends Component {
   
  
    render() {
              //const { values: { firstName, lastName, email, occupation, city, bio }} = this.props;
              return (
                <MuiThemeProvider>
                <React.Fragment>
                <AppBar title ="Success"  style={{ backgroundColor: '#E57373', }} />
                <div class="design3">
                  <br/>
                <h1>Corona Test - Negative.</h1>
                <h1>Thank you for your Patience! </h1>
                <h2>Still you need to be on 15 days self Isolation.</h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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


export default Success;
