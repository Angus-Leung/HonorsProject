import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is the default path");
});

router.get('/testSound', (req, res) => {
    res.send("This is the default path 2");
});

export default router;
