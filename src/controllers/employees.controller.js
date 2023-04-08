// import express from "express";
import { pool } from "../db.js";

export const getEmployees = async ( req, res ) => {
    try {
        const [rows] = await pool.query( "SELECT * FROM employee" );
        res.json( rows );
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: "Internal - DB Server Error" } );
    }
};

export const getEmployee = async ( req, res ) => {
    const { id } = req.body;
    const [ rows ] = await pool.query( "SELECT * FROM employee WHERE id = ?", [id] );
    if (rows.length == 0) {
        res.status( 404 ).json( { "message": "Employee not found"} );
    }
    else { res.json( rows ); };
};


export const getEmployeeById = async ( req, res ) => {
    const id = req.params.id;
    console.log( id );
    const [ rows ] = await pool.query( "SELECT * FROM employee WHERE id = ?", [id] );
    if (rows.length == 0) {
        res.status( 404 ).json( { "message": `Employee ID ${id} not found`} );
    }
    else { res.json( rows ); };
};

export const createEmployee = async ( req, res ) => {
    const { name, salary } = req.body;
    const sql = "INSERT INTO employee (name, salary) values (?,?)";
    const values = [name, salary];
    const [rows] = await pool.query( sql, values );
    console.log( req.body, name, salary );
    res.send( {
        id: rows.insertId,
        name,
        salary
    } );
};

export const deleteEmployee = async ( req, res ) => {
    const { id } = req.params;
    console.log( "deleting employee id:", id );
    const [rows] = await pool.query( "DELETE FROM employee WHERE id=?", [req.params.id] );
    res.send( rows[0] );
}
export const updateEmployee = async ( req, res ) => {
    // const { id } = req.params;
    const id = req.params.id;
    const { name, salary } = req.body;
    const sql = `UPDATE employee 
                  SET name = IFNULL(?,name), salary = IFNULL(?, salary)
                  WHERE id = ?`;
    const values = [name, salary, id];
    const [result] = await pool.query( sql, values );
    if ( result.affectedRows == 0 ) {
        return res.status( 404 ).json( { message: `id ${id} not found` } )
    }
    const [rows] = await pool.query( "SELECT * FROM employee WHERE id = ?", [id] );

    res.json(rows[0]);
};
