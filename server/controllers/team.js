import PlayerModel from "../models/playerModel.js";
import mongoose from "mongoose";

export const getTeam = async (req, res) => {
    try{
        const playerModel = await PlayerModel.find();
        res.status(200).json(playerModel);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const createPlayer = async (req, res) => {
    const post = req.body;

    const newPlayer = new PlayerModel({ ...post, userId: req.userId })

    try {
        await newPlayer.save();

        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePlayer = async (req, res) => {
    const {id: _id} = req.params;
    const player = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No player with that id');

    const updatedTeam = await PlayerModel.findByIdAndUpdate(_id, player, { new: true });

    res.json(updatedTeam);
}

export const deletePlayer = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No player with that id');

    await PlayerModel.findByIdAndDelete(_id);

    res.json({message: 'Player Deleted'});
}

export const makeStarter = async (req,res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No player with that id');

    const updatedPlayer = await PlayerModel.findById(_id);

    await PlayerModel.findByIdAndUpdate(_id, {starter: updatedPlayer.starter = true});

    res.json(updatedPlayer);
}

export const makeBench = async (req,res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No player with that id');

    const updatedPlayer = await PlayerModel.findById(_id);

    await PlayerModel.findByIdAndUpdate(_id, {starter: updatedPlayer.starter = false});

    res.json(updatedPlayer);
}