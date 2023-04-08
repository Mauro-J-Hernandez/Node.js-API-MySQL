import { Router } from "express";
// import { pool } from "../db.js"; 
import { getEmployees, getEmployee, getEmployeeById, createEmployee, deleteEmployee, updateEmployee } from "../controllers/employees.controller.js";

const router = Router();

// Endpoints (routes) for Employees -----------

router.get( "/employees", getEmployees );

router.get( "/employee", getEmployee );

router.get( "/employee/:id", getEmployeeById );

router.post( "/employees", createEmployee );

router.patch( "/employee/:id", updateEmployee);

router.delete( "/employee/:id", deleteEmployee );

export default router;