import db from "../config/database"

export const getOwnedPlaylist = async(userId) => {
    const [response] = await db.promise().query()
}