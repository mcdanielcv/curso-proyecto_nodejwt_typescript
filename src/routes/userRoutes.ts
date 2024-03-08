import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/users.controller'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

//middleware de jwt para ver si estamos autenticados
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const autHeader = req.headers['authorization']
    const token = autHeader && autHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ error: 'No Autorizado' })
    }

    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) {
            console.log("Error en la autenticación: ", err)
            return res.status(403).json({ error: 'No tiene acceso a este recurso' })
        }
        next(); 
    })

}


router.post('/', authenticateToken, createUser)
router.get('/', authenticateToken, getAllUser)
router.get('/:id', authenticateToken, getUserById)
router.put('/:id', authenticateToken, updateUser)
router.delete('/:id', authenticateToken, deleteUser)

export default router;