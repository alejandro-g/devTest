/* guardar todas las funciones que le piden algo al backend */
import axios from 'axios'
import { Student } from './Student'

const API = 'http://localhost:5000';

export const getStudents = async () => {
    return await axios.get<Student[]>(`${API}/students`)
}

export const addStudent = async (student: Student) => {
    return await axios.post(`${API}/students`, student)
}

