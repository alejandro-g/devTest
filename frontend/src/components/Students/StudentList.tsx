import React, { useEffect, useState } from 'react'
import { Student } from './Student'
import * as studentService from './StudentService'
import StudentItem from './StudentItem'

const StudentList = () => {

    const [students, setStudents] = useState<Student[]>([])

    const loadStudents = async () => {
        const res = await studentService.getStudents()
        setStudents(res.data)
    }

    useEffect(() => {
        loadStudents();
    }, [])

    return (
        <div>
            {students.map((student) => {
                return <StudentItem student={student} />
            })}
        </div>
    )
}

export default StudentList