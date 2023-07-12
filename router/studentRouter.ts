import express, {Router} from "express"
import { deleteStudent, read, register, updateStudent } from "../controller/studentController"

const router = Router()

router.route("/").get(read)
router.route("/register").post(register)
router.route("/delete").delete(deleteStudent)
router.route("/update").patch(updateStudent)

export default router