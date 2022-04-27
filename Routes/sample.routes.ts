
import { Router } from 'express';
import sampleModel from "../Models/sampleModel";
const router = Router();
function loggerMiddleware(request, response, next) {
    console.log(`${request.method} ${request}`);
    next();
}

router.get('/list', async (req, res) => {
    try {
        if (req.query.maxResults) {
            const ret = await sampleModel.find({}).limit(parseInt(req.query.maxResults));
            res.json(ret);
        } else {
            const ret = await sampleModel.find({});
            res.json(ret);
        }
        res.send();

    } catch (e) {
        res.status(500);
        res.json({ error: e.message });
        res.send();
    }
});

router.get('/hello', async (req, res) => {
    res.send("Hello world!");
});


router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const sample = new sampleModel({ name });
        const ret = await sample.save();
        res.json(ret);
        res.send();
    } catch (e) {
        res.status(500);
        res.json({ error: e.message });
        res.send();
    }
});

router.get("/:id", async (req, res) => {
    try {
        if (!req.params.id) {
            throw "no ID was passed as a parameter";
        }
        const ret = await sampleModel.findById(req.params.id);
        res.json(ret);
        res.send();

    } catch (e) {
        res.status(500);
        res.json({ error: e.message });
        res.send();
    }
});

export default router;






