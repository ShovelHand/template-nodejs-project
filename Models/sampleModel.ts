import { model, Schema, Model, Document } from 'mongoose';

export interface Isample {
    name: string;
}


export const sampleSchema = new Schema({
    name: String,

});

const sampleModel = model('sample', sampleSchema);

export default sampleModel;
