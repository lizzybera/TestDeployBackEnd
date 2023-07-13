import express, {Router} from "express"
import { createTask,  deleteTask, getOneTask, getTask, updateTask } from "../controller/studentController"

const router = Router()

router.route("/read").get(getTask)
router.route("/read").get(getOneTask)
router.route("/register").post(createTask)
router.route("/delete/:id").delete(deleteTask)
router.route("/update/:id").patch(updateTask)

export default router