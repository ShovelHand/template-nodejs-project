import { model, Schema, Model, Document } from 'mongoose';

export interface Isample {
  name: string;
  facts: string;
}

export const jellicleSchema = new Schema({
  name: String,
  facts: String,

});

const jellicleCatModel = model('cat', jellicleSchema);

export default jellicleCatModel;
