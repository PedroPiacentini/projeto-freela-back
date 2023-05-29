import { createPostDB, getPostDB } from "../repositories/post.repository.js";
import { getUserByIdDB } from "../repositories/user.repository.js";

export async function createPost(req, res) {
    const { userId } = res.locals;
    const { description, picture } = req.body;

    try {
        const user = await getUserByIdDB(userId);
        if (user.rowCount === 0) return res.status(409).send({ message: "Usuário não existente" });

        createPostDB(userId, description, picture);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getPost(req, res) {
    const { id } = req.params;
    console.log(id)

    try {
        const user = await getUserByIdDB(id);
        if (user.rowCount === 0) return res.status(409).send({ message: "Usuário não existente" });

        const posts = await getPostDB(id);

        res.send(posts.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}