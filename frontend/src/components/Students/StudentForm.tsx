/*Modal to add new Student*/
import React, { ChangeEvent, FormEvent, useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import { Student } from './Student';
import * as studentService from './StudentService'
import {useHistory, useParams} from 'react-router-dom'

interface Params {
    id: string,
}

const StudentForm = () => {

    const history = useHistory();
    const params = useParams<Params>(); 

    const initialState = {
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        address: "",
        gender: ""
    }

    const [student, setStudent] = useState<Student>(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if(!params.id) {
            await studentService.addStudent(student);
            toast.success('Student successfully added');
            setStudent(initialState);
        } else {
            await studentService.updateStudent(params.id, student);
            toast.success('Student successfully updated');
        }

        history.push('/');
    }

    const getStudent = async (id: string) => {
        const res = await studentService.getStudent(id);
        const { firstName, lastName, birthday, email, address, gender} = res.data;
        setStudent({firstName, lastName, birthday, email, address, gender})

    }

    // check if params.id exists
    useEffect(() => {
        if (params.id)
            getStudent(params.id);
    },[params.id])

    /*const handleCancelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStudent(initialState);
    }*/

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3>Add Student</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstNameInput">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Your First Name"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.firstName}
                                    autoFocus
                                />
                                <br />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Your Last Name"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.lastName}
                                />
                                <br />
                            </div>

                            <div className="form-group">
                                <label htmlFor="birthdayInput">Date of Birth</label>
                                <input
                                    type="date"
                                    name="birthday"
                                    placeholder=""
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.birthday}
                                />
                                <br />
                            </div>

                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="example@test.com"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.email}
                                />
                                <br />
                            </div>

                            <div className="form-group">
                                <label htmlFor="addressInput">Address</label>
                                <textarea
                                    name="address"
                                    rows={3}
                                    placeholder="Enter students address"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.address}
                                ></textarea>
                                <br />
                            </div>

                            <div className="form-group">
                                <label htmlFor="genderInput">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    placeholder="Male/Female"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={student.gender}
                                />
                                <br />
                            </div>

                            {
                                params.id ? 
                                <button className="btn btn-primary">Update Student</button>
                                :
                                <button className="btn btn-primary">Add Student</button>
                            }

                            <button id="cancel" className="btn btn-primary">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm;