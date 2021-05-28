/* guardar todas las funciones que le piden algo al backend */
import axios from 'axios'

export const getStudents = async () => {
    return await axios.get('http://localhost:5000/students')
}
