import { db } from "../database/db.connection.js";

export function getUserByIdDB(userId) {
    return db.query(`SELECT * FROM Usuarios WHERE id_usuario=$1;`, [userId]);
}