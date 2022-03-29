import React, { Component } from 'react'
import style from '../styles/style.css'
import { Button } from 'react-bootstrap'

export class Appointments extends Component {
    render() {
        return (
            <div className="appointments">
      <h4 className="appointmentTitle">Latest transactions</h4>
      <table className="appointmentTable">
        <tr className="appointmentTr">
          <th className="appointmentTh">Customer</th>
          <th className="appointmentTh">Date</th>
          <th className="appointmentTh">Amount</th>
          <th className="appointmentTh">Status</th>
        </tr>
        <tr className="appointmentTr">
          <td className="appointmentprofile">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="Name">Susan Carol</span>
          </td>
          <td className="Date">2 Jun 2021</td>
          <td className="Amount">$122.00</td>
          <td className="Status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
        )
    }
}

export default Appointments