import React from 'react'
import Details from './Details'

export default function Appointmenttable() {
    return (
        <div className="reqcol" style={{marginBottom:'25px'}}>
            <div className="reqs">
            <h4>Appointments</h4>
            <a href="" style={{textAlign:'center'}}>5<br></br>
            View all</a>
            </div>
            <Details />
            <Details />
        </div>
    )
}
