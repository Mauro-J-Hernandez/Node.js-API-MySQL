import { config } from "dotenv";

config();

export const PORT        = process.env.PORT        || 3000;
export const DB_HOST     = process.env.DB_HOST     || "localhost";
export const DB_PORT     = process.env.DB_PORT     || 3306;
export const DB_USER     = process.env.DB_USER     || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "Vv7307334";
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";

console.log( "Environment variables" );
console.log("========================")
console.log( "SERVER PORT = ", process.env.PORT )
console.log( "DB_HOST =     ", process.env.DB_HOST );
console.log( "DB_PORT =     ", process.env.DB_PORT );
console.log( "DB_USER =     ", process.env.DB_USER );
console.log( "DB_PASSWORD = ", process.env.DB_PASSWORD );
console.log( "DB_DATABASE = ", process.env.DB_DATABASE );