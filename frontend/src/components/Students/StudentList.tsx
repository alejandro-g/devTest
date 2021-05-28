import React, { useEffect } from 'react'
import axios from 'axios'

const StudentList = () => {

    const loadStudents = async () => {
        const res = await axios.get('http://localhost:5000/students')
        console.log(res)
    }

    useEffect(() => {
        loadStudents();
    }, [])

    return (
        <div>
            student list
        </div>
    )
}

export default StudentList