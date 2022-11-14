import dbConnect from '../../../database/dbConnect'
import nc from 'next-connect'
import { getUser, updateUser, deleteUser } from '../../../database/controllers/userControllers'

const handler = nc()

dbConnect()

handler.get(getUser)

handler.put(updateUser)
handler.patch(updateUser)

handler.delete(deleteUser)



export default handler