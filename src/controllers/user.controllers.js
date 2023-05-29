import { getUserByIdDB } from "../repositories/user.repository.js";

export async function getUserById(req, res) {
    const { id } = req.params;

    try {
        const user = await getUserByIdDB(id);
        if (user.rowCount === 0) return res.status(409).send({ message: "Este usuário não existe" });

        res.send(user.rows[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}