import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Demo1 from './Demo1';


export class Demo6 extends Component {

    render() {
        
        document.getElementById("abc").style.display ="none"; 
        
        return (
            <div>
               <Button onClick={<Demo1/>}>Back</Button>
            <ul>
                <li><a href="#">Name</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
                
            </div>
             
        )
    }
}


export default Demo6
