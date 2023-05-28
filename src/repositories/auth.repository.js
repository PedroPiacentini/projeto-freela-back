import { db } from "../database/db.connection.js";

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}

export function createUserDB(name, email, password) {
    return db.query(
        `INSERT INTO user (name, email, senha) VALUES ($1s, $2, $3)`,
        [name, email, password]
    );
}