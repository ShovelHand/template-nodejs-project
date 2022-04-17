// test/post.test.ts
import sampleModel from "../Models/sampleModel";
import ISample from "../Models/sampleModel";
import * as mongoose from 'mongoose';

beforeAll(async () => {
    const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.dmfce.mongodb.net/JestTests?retryWrites=true&w=majority";
    await mongoose.connect(uri);

    try {
        // Connect to the MongoDB cluster
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully to MongoDB");
        });
    } catch (e) {
        console.error(e);
    }
});

afterEach(async () => {
 //   await dbHandler.clearDatabase()
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('post test', () => {
    it('entity can be created correctly', async () => {
        // expect that two assertios will be made
        expect.assertions(2);
        // create new post model instance
        let id: string;
        const canPost = async () => {
            const sample = new sampleModel();
            // set some test properties
            sample.name = 'Test item';
            // save test post to db
            id = await sample.save();
            // find inserted post by title
            const sampleInDB = await sampleModel.findOne({ name: 'Test item' }).exec();
            console.log('sample document from DB', sampleInDB);
            // check that title is expected
            expect(sampleInDB.name).toEqual('Test item');
        }
        const canGetById = async () => {
            const sampleInDB = await sampleModel.findById(id).exec();
            expect(sampleInDB.name).toEqual('Test item')
        };
        const deleteById = async () => {
            sampleModel.findByIdAndDelete(id);
        };
        await canPost();
        await canGetById();
        deleteById();
        
    });
});
