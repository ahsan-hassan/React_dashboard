import React, { Component } from 'react'
import style from '../styles/style.css'
import { Button } from 'react-bootstrap'
import profileimage from '../images/pic1.png'

export class Appointments extends Component {
    render() {
        return (
            <div className="appointments">
      <h4 className="appointmentTitle">Latest transactions</h4>
      <table className="appointmentTable">
        <tr className="appointmentTr">
          <th className="appointmentTh">Patient</th>
          <th className="appointmentTh">Reason</th>
          <th className="appointmentTh">Time</th>
          <th className="appointmentTh">Action</th>
        </tr>
        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Reason">Nech Wound</td>
          <td className="Amount">4:00 PM</td>
          <td className="Action">
        
          </td>
        </tr>

        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Reason">Nech Wound</td>
          <td className="Amount">4:00 PM</td>
          <td className="Action">
        
          </td>
        </tr>
        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Reason">Nech Wound</td>
          <td className="Amount">4:00 PM</td>
          <td className="Action">
        
          </td>
        </tr>
        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Reason">Nech Wound</td>
          <td className="Amount">4:00 PM</td>
          <td className="Action">
        
          </td>
        </tr>
        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Reason">Nech Wound</td>
          <td className="Amount">4:00 PM</td>
          <td className="Action">
        
          </td>
        </tr>

        
      </table>
    </div>
        )
    }
}

export default Appointments