import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let staffUsers = new Schema({
   username: {
       type: String
   },
   password: {
       type: String
   }
});
export default mongoose.model('staffUsers', staffUsers);