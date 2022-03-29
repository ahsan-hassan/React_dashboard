import React, { Component } from 'react'
import Styles from '../../Styles/Styles.css'
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month, Agenda } from '@syncfusion/ej2-react-schedule'

export class Schedule extends Component {
    render() {
        return (
            <div style={{height:'300px'}}>
                <ScheduleComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>
        )
    }
}

export default Schedule