import React from 'react'
import Dashboard from '../components/dashboardcomponents/Dashboard'
import Header from '../components/header/header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Patients() {
    return (
        <div>
            <Sidebar />
            <Header />
            <Dashboard />
        </div>
    )
}
