import React, { useEffect, useState } from 'react'
import { Student } from './Student'
import * as studentService from './StudentService'
import StudentItem from './StudentItem'

const StudentList = () => {

    const [students, setStudents] = useState<Student[]>([])

    const loadStudents = async () => {
        const res = await studentService.getStudents()

        // order students listed on the table from earliest to eldest
        const orderedStudents = res.data.map(student => {
            return{ 
                ...student,
                createdAt: student.createdAt ? new Date(student.createdAt) : new Date(),
                updatedAt: student.updatedAt ? new Date(student.updatedAt) : new Date(),
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()) 
        setStudents(orderedStudents);
    }

    useEffect(() => {
        loadStudents();
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{textAlign: 'left'}}>Id</th>
                        <th scope="col" style={{textAlign: 'left'}}>Student Name</th>
                        <th scope="col" style={{textAlign: 'center'}}>Edit</th>
                        <th scope="col" style={{textAlign: 'center'}}>Delete</th>
                        <th scope="col" style={{textAlign: 'center'}}>View Details</th>
                    </tr>
                </thead>
                {students.map((student) => {
                    return <StudentItem student={student} key={student._id}/>
                })}
            </table>
        </div>
    )
}

export default StudentList