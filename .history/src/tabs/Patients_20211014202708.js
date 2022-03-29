import React from 'react'
import {MdViewList} from 'react-icons/md'

export default function Patients() {
    return (
        <div className="patientpage">
            <div>
                <h1>Patients</h1>
                <div>
                    <MdViewList />
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <InputEvent type="text" name="">
                </div>
            </div>
        </div>
    )
}

