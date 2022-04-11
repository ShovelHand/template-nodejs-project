/* For testing. We use an in-memory MongoDB for testing so we don't have to worry about unintended operations in the 'real' database. */

module.exports = {
    mongodbMemoryServerOptions: {
        instance: {
            dbName: 'jest'
        },
        binary: {
            version: '4.0.2', // Version of MongoDB
            skipMD5: true
        },
        autoStart: false
    }
};