import React from 'react'
import { Student } from './Student'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom'

interface Props {
    student: Student
}

const StudentItem = ({student}:Props) => {

    const fullName = `${student.firstName} ${student.lastName}`;

    const history = useHistory();

    return (
            <tr>
                <th scope="row">{student._id}</th>
                <td>{fullName}</td>

                <td style={{textAlign: 'center'}}>
                    <button 
                    style={{border: 'none'}}
                    onClick={() => history.push(`/update/${student._id}`)}> 
                    <i><FontAwesomeIcon icon={faEdit} /></i>
                    </button>
                </td>

                <td style={{textAlign: 'center'}}>
                    <button 
                    style={{border: 'none'}}>
                    <i><FontAwesomeIcon icon={faTrash} /></i>
                    </button>
                    </td>
                <td style={{textAlign: 'center'}}>
                    <button 
                    style={{border: 'none'}}>
                    <i><FontAwesomeIcon icon={faInfoCircle} /></i>
                    </button>
                </td>
            </tr>
    )
}

export default StudentItem;