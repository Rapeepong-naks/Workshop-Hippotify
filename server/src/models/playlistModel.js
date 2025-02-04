import db from "../config/database"

export const getOwnedPlaylist = async(userId) => {
    const [response] = await db.promise().query(
        `SELECT id, title
        FROM playlists
        WHERE user_id = ?`, [userId]
    );
    return response;
}