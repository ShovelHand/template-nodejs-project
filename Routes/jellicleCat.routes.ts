/*Jellicle cat routes, routes for Jellicle cats. */

import { Router } from 'express';
import jellicleCatModel from "../Models/jellicleCatModel";

const router = Router();

function loggerMiddleware(request, response, next) {
  console.log(`${request.method} ${request}`);
  next();
}

router.get('/list', async (req, res) => {
  try {
    const ret = await jellicleCatModel.find({});
    res.json(ret);
    res.send();
  } catch (e) {
    res.status(500);
    //res.json({ error: e.message });
    return;
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const { facts } = req.body;
    const cat = new jellicleCatModel({ name, facts });
    const ret = await cat.save();
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
    const ret = await jellicleCatModel.findById(req.params.id);
    res.json(ret);
    res.send();

  } catch (e) {
    res.status(500);
    res.json({ error: e.message });
    res.send();
  }
});

export default router;






