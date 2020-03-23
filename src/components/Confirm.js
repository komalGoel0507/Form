import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import {white, darkWhite} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './design.css'
import vid4 from './video/vid4.mp4';
import Divider from 'material-ui/Divider';
const muiTheme = getMuiTheme({
  palette: {
    //textColor: color.white,
   // primary1Color: Colors.#F7FAF8e,
    //primary2Color: Colors.indigo700,
    //accent1Color: Colors.redA200,
    //pickerHeaderColor: Colors.blue400,
    secondaryTextColor: Colors.white,
   
    }
  
  /*appBar: {
    height: 25,
  },*/
});



export class Confirm extends Component {
    continue = e => {
                     e.preventDefault();
                     //process form //
                     this.props.nextStep();
                    };
    back = e =>     {
                        e.preventDefault();
                        this.props.prevStep();
                    };
  
    render() {
              const { values: { Name, age, TravellingFrom, ArrivalDate, PresentAddress, Symptoms, BloodTest  }} = this.props;
              return (
                <MuiThemeProvider>

                <React.Fragment>
                <AppBar title = "A.I.I.M.S"  style={{ backgroundColor: '#3e2723', }} />
                <div className="design2">
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
                    <source src={vid4} type="video/mp4"/>
                  </video>
               <List> 
                   <ListItem
                   
                   primaryText =  {<span style={{color: white}}>Name</span> }
                   listStyle ={{color:'white'}}
                   style={{left: 490,  }}
                   //insetChildren={true}
                  secondaryText =  { <span style={{color: white}}> <br/>{Name}</span> }
                  
                   />
                  
                     <ListItem
                     style={{left: 490,  }}
                      // insetChildren={true}
                   primaryText =  {<span style={{color: white}}>Age</span> }
                   secondaryText = { <span style={{color: white}}> <br/>{age}</span> }
                   />
                    
                     <ListItem
                     style={{left: 490,  }}
                    //insetChildren={true}
                   primaryText =  {<span style={{color: white}}>Traveeling From</span> }
                   secondaryText = { <span style={{color: white}}> <br/>{TravellingFrom}</span> }
                   />
                     <ListItem
                     
                   //            insetChildren={true}
                   style={{left: 490,  }}
                   primaryText =  {<span style={{color: white}}>Arrival Date</span> }
                   secondaryText =  { <span style={{color: white}}> <br/>{ArrivalDate}</span> }
                   /> 
                     <ListItem
                      // insetChildren={true}
                      style={{left: 490,  }}
                   primaryText = {<span style={{color: white}}>Present Address</span> }
                   secondaryText =  { <span style={{color: white}}> <br/>{PresentAddress}</span> }
                   /> 
                     <ListItem
                     //  insetChildren={true}
                     style={{left: 490,  }}
                   primaryText =  {<span style={{color: white}}>Symptoms</span> }
                   secondaryText =  { <span style={{color: white}}> <br/>{Symptoms}</span> }
                   /> 
                   
                   <ListItem 
                   //  insetChildren={true}
                   style={{left: 490,  }}
                   
                   primaryText =  {<span style={{color: white, }}>Blood Test</span> }
                   secondaryText = { <span style={{color: white}}> <br/>{BloodTest}</span> }
                   /> 
               </List>
               <Divider/>
               <RaisedButton
                style={{left: 490,  }}
                label="Confirm & Continue"
                Primary={true}
                styles={styles.button}
                onClick={this.continue}
                /> 
                <RaisedButton
                
                label="Back"
                style={{left: 490,  }}
                Primary={false}
                styles={styles.button}
                onClick={this.back}
                />
                <br/><br/><br/>
                </div>
                </React.Fragment>
                </MuiThemeProvider>
                );
            }
}
const styles = { 
  button: {
    left: 490
           
          }
             }

export default Confirm;
