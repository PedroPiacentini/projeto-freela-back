import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { createSessionDB, createUserDB, getUserByEmailDB } from "../repositories/auth.repository.js";

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const user = await getUserByEmailDB(email);
        if (user.rowCount !== 0) return res.status(409).send({ message: "E-mail já foi cadastrado!" });

        const hash = bcrypt.hashSync(password, 10);
        console.log("a")
        await createUserDB(name, email, hash);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmailDB(email);
        if (user.rowCount === 0) return res.status(401).send({ message: "E-mail não cadastrado!" });
        console.log(user.rows[0])

        const isPasswordCorrect = bcrypt.compareSync(password, user.rows[0].senha);
        if (!isPasswordCorrect) return res.status(401).send({ message: "Senha incorreta!" });

        const token = uuid();
        await createSessionDB(user.rows[0].id_usuario, token);
        res.send({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}
