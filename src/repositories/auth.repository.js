import { db } from "../database/db.connection.js";

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM usuarios WHERE email=$1;`, [email]);
}

export function createUserDB(name, email, password) {
    return db.query(
        `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

export function createSessionDB(userId, token) {

    return db.query(
        `INSERT INTO Sessoes (id_usuario, token) VALUES ($1, $2);`,
        [userId, token]
    );
}

export function findSessionDB(token) {
    return db.query(
        `SELECT id_usuario FROM Sessoes WHERE token=$1`,
        [token]
    )
}