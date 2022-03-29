import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: String,
    number: Number,
    team: String,
    position: String,
    projPoints: Number,
    selectedFile: String,
    starter: Boolean,
    userId: String,
})

let PlayerModel =  mongoose.model('playerModel', playerSchema);

export default PlayerModel;
