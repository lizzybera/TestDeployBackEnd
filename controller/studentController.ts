import express, {Request,Response} from "express"
import studentModel from "../model/studentModel"

export const readuser = async (req: Request, res: Response): Promise<Response> =>{
    try {
        
        const user = await studentModel.find().sort({ createdat: -1})

        return res.status(200).json({
            message: "user gotten sucessfully",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "user cannot be gotten sucessfully"
        })
    }
}

export const register = async (req: Request, res: Response): Promise <Response> =>{
    try {
        const {name,studentClass, dob} = req.body

        const user = await studentModel.create({name, studentClass, dob})

        return res.status(200).json({
            message: "Student registered",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "Students not registered"
        })
    }
}

export const updateStudent = async (req: Request, res: Response): Promise <Response> =>{
    try {
        const {studentClass} = req.body
        const {id} = req.params

        const user = await studentModel.findByIdAndUpdate(
            id,
            { studentClass},
            {new: true})

        return res.status(200).json({
            message: "Student updated",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "Students not updated"
        })
    }
}

export const deleteStudent = async (req: Request, res: Response): Promise <Response> =>{
    try {
        const {id} = req.params

        const user = await studentModel.findByIdAndDelete(id)

        return res.status(200).json({
            message: "Student deleted",
            data: user
        })

    } catch (error) {
        return res.status(404).json({
            message: "Student not deleted"
        })
    }
}