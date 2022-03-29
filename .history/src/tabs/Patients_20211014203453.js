import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'

export default function Patients() {
    return (
        <div className="patientpage">
            <div>
                <h1>Patients</h1>
                <div>
                    <MdViewList />
                    <div class="box">
	                    <FaSearch />
                        <input type="text" name="">
                    </div>
                </div>
            </div>
        </div>
    )
}

