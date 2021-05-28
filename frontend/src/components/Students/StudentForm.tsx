/*Modal to add new Student*/
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Student } from './Student';

const StudentForm = () => {

    const [student, setStudent] = useState<Student>({
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        address: "",
        gender: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log(student);
    }

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
                                />
                                <br />
                            </div>
                            <button className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm;