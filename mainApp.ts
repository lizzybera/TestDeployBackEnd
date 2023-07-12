import express, { Application } from "express"
import cors from "cors"
import student from "./router/studentRouter"

const mainApp = (app: Application)=>{
    app
    .use(express.json())
    .use(cors())

    .use("/students", student)
}

export  default mainApp