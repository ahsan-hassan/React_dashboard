import React, { Component } from 'react'
import Header from '../components/header/header'
import Sidebar from '../components/Sidebar/Sidebar'
import style from '../styles/style.css'

export class Requests extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Header />
                <h1>Patients</h1>
            </div>
        )
    }
}

export default Requests