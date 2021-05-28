import React from 'react'
import { Student } from './Student'

interface Props {
    student: Student
}

const StudentItem = ({student}:Props) => {
    return (
        <div>
            <h1>{student.firstName}</h1>
            <h2>{student.lastName}</h2>
        </div>
    )
}

export default StudentItem;