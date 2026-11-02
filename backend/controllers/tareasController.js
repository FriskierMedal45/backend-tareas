const asyncHandler = require('express-async-handler');
const Tarea = require('../models/tareaModel');

const getTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mesg: "getTareas"});
});

const createTareas = asyncHandler(async (req, res) => {
    if(!req.body.description){
        res.status(400)
        throw new Error("Debes teclear una despripcion");
    }
    const tarea = await Tarea.create({
        description: req.body.description});

    res.status(201).json(tarea);
});

const updateTareas = asyncHandler(async (req, res) => {
    //verifivar que exite la tarea 
    const tarea = await Tarea.findById(req.params.id);
    if(!tarea){
        res.status(404);
        throw new Error("Tarea no encontrada");
    }

    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTarea);
});

const deleteTareas = asyncHandler(async (req, res) => {
    res.status(200).json({mesg: `deleteTareas ${req.params.id}`});
});

module.exports = {getTareas, createTareas, updateTareas, deleteTareas};
