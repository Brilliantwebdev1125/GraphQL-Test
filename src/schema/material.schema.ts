import mongoose from 'mongoose';

const MaterialSchema = new mongoose.Schema({name: String});

const Material = mongoose.model('material', MaterialSchema);

export default Material;
