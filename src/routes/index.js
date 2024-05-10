import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.route('/')
    .get((req, res) => {
        const locals = {
            title: 'Caesar Cipher',
        }

        return res.render('caesar', locals)
    });

export default router;