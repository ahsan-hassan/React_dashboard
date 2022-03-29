import React, { Component } from 'react'
import style from '../styles/style.css'

export class Requests extends Component {
    render() {
        return (
            <div className="reqcol">
                <div className="reqs">
                <h4>Requests</h4>
                <a href="">View all</a>
                </div>
                <Reqno />
                <Reqno />
            </div>
        )
    }
}

export default Requests