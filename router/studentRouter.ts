import express, {Router} from "express"
import { deleteStudent, readuser, register, updateStudent } from "../controller/studentController"

const router = Router()

router.route("/read").get(readuser)
router.route("/register").post(register)
router.route("/delete").delete(deleteStudent)
router.route("/update").patch(updateStudent)

export default router