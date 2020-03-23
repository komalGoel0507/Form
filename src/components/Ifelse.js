import React, { Component } from 'react';
import Success from './Success';
import SuccessN from './SuccessN';


export class Ifelse extends Component {
   
    render() {  
        
if(this.props.BloodTest === 'P')
{
    return <SuccessN />;
} 
else 
{
    return <Success />;
}
    }
}
            
export default Ifelse ;