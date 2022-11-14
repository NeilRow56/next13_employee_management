import dbConnect from '../../../database/dbConnect'
import nc from 'next-connect'
import { getUsers, newUser } from '../../../database/controllers/userControllers'

const handler = nc()
 
dbConnect()
 
handler.get(getUsers)

handler.post(newUser)

export default handler



