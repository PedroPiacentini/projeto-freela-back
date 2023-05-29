import { db } from "../database/db.connection.js";

export function createPostDB(userId, description, picture) {
    return db.query(
        `
            INSERT INTO Fotos (id_usuario, legenda, link)
                VALUES ($1, $2, $3)
        `,
        [userId, description, picture]);
}

export function getPostDB(userId) {
    return db.query(
        `SELECT * FROM Fotos WHERE id_usuario=$1`,
        [userId]
    );
}