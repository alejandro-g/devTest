/*Manipulation of information on DB through controller*/
import { RequestHandler } from 'express';
import student from './student';
import Student from './student';

// Create a student and save it into the collections
export const createStudent: RequestHandler = async (req, res) => {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    console.log(student); 
    res.json('student saved')
}

// Get all students stored in mongo collection
export const getStudents: RequestHandler = async (req, res) => {
    try {
        const students = await Student.find();
        return res.json(students);
    } catch (error) {
        res.json(error);
    }
}

// Get a student by ID and return students info
export const getStudent: RequestHandler = async (req, res) => {
    const studentFound = await Student.findById(req.params.id);
    if(!studentFound) return res.status(204).json(); //if student with specific isn't found, return error
    return res.json(studentFound);
}

// Get a student by ID and delete in from mongo collection 
export const deleteStudent: RequestHandler = async (req, res) => {
    const studentDeleted = await Student.findByIdAndDelete(req.params.id);
    if(!studentDeleted) return res.status(204).json(); //if student with specific isn't found, return error
    return res.json(studentDeleted);
}

// Get a student by ID and update the information stored within mongo collection 
export const updateStudent: RequestHandler = async (req, res) => {
    const studentUpdated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }); // new retorna el json actualizado
    if(!studentUpdated) return res.status(204).json(); //if student with specific isn't found, return error
    return res.json(studentUpdated);
}