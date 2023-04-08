import express from "express"; 
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use( express.json() ); // Manage json messages
app.use( "/api", employeesRoutes ); // Use and prefix "/api" to empleyees' routes 
app.use( indexRoutes ); // Use index routes

//Endpoints not found. Handling 404 errors.
app.use( ( req, res, next ) => {
    res.status( 404 ).json( { message : "Endpoint not found"} )
} )

export default app;
