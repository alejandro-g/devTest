/*Manipulation of information on DB through controller*/
import { RequestHandler } from 'express';
import Student from './student';

export const createStudent: RequestHandler = async (req, res) => {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    console.log(student); 
    res.json('student saved')
}

export const getStudents: RequestHandler = (req, res) => {
    res.json('getting students')
}

export const getStudent: RequestHandler = (req, res) => {
    res.json('getting a student')
}

export const deleteStudent: RequestHandler = (req, res) => {
    res.json('deleting a student')
}

export const updateStudent: RequestHandler = (req, res) => {
    res.json('updating a student')
}