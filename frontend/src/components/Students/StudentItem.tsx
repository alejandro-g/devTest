import React from 'react';
import { Student } from './Student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import * as studentService from './StudentService';
interface Props {
    student: Student;
    loadStudents: () => void;
}

const StudentItem = ({student, loadStudents}:Props) => {

    const fullName = `${student.firstName} ${student.lastName}`;
    const history = useHistory();
    /*const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);*/
    

    const handleDelete = async (id: string) => {
        await studentService.deleteStudent(id);
        loadStudents();
    }

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
                    style={{border: 'none'}}
                    onClick={() =>  student._id && handleDelete(student._id)}>
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