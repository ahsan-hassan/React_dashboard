import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import Reqno from '../components/dashboardcomponents/Reqno'

export default function Patients() {
    return (
        <div className="patientpage">
            <div style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
                <h1>Patients</h1>
                <div style={{display:'flex'}}>
                    <MdViewList style={{height:'35px', width:'40px'}}/>
                    <div class="box">
	                    <FaSearch />
                        <input style={{border:'none'}} type="text" name="" />
                    </div>
                </div>
            </div>
            <Reqno />
        </div>
    )
}

