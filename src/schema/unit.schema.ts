import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({name: String});

const Unit = mongoose.model('unit', UnitSchema);

export default Unit;
