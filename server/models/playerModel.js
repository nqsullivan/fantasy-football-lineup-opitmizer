import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: String,
    number: Number,
    team: String,
    position: String,
    projPoints: Number,
    selectedFile: String,
    starter: Boolean,
})

const PlayerModel = mongoose.model('playerModel', playerSchema);

export default PlayerModel;
