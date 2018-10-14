import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.send("This is the default path");
});

export default router;
