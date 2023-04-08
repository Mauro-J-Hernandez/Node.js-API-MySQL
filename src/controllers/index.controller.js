// import express from "express";
import { pool } from "../db.js";

export const pingDB = async ( req, res ) => {
    const [result] = await pool.query( "Select 'Pong' AS result" );
    res.json( result[0].result )
};

