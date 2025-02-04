import * as playlistModel from '../models/playlistModel.js'

const userId = 26;

export const getOwnedPlaylist = async (req , res) => {
    try {
        const playlists = await playlistModel.getOwnedPlaylist(userId);
        return res.status(200).json({
            success: true,
            data: playlists,
            message: "Playlist retrieve successfully"
        });
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal sever error"
        });
    }
}