const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;
let isConnected = false;

async function beforeAllSetup() {
  try {
    if (isConnected) {
      return;
    }

    // Close any existing connections
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    
    // Create new MongoDB memory server instance
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    // Configure mongoose
    mongoose.set('strictQuery', false);
    
    // Connect to the in-memory database
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
  } catch (error) {
    console.error('Error in test setup:', error);
    // Cleanup if server was created but connection failed
    if (mongoServer) {
      await mongoServer.stop();
    }
    isConnected = false;
    mongoServer = null;
    throw error;
  }
}

async function beforeEachSetup() {
  try {
    // Ensure connection is established
    if (!isConnected || mongoose.connection.readyState !== 1) {
      try {
        await beforeAllSetup();
      } catch (err) {
        console.error('Failed to establish connection:', err);
        throw err;
      }
    }
    
    // Only attempt to clean collections if we have a valid connection
    if (mongoose.connection.readyState === 1) {
      try {
        const collections = await mongoose.connection.db.collections();
        const deletePromises = collections.map(collection => collection.deleteMany({}));
        await Promise.all(deletePromises);
      } catch (err) {
        console.error('Failed to clean collections:', err);
        throw err;
      }
    }
  } catch (error) {
    console.error('Error in test cleanup:', error);
    throw error;
  }
}

async function afterEachSetup() {
  // Ensure all operations are complete
  await new Promise(resolve => setTimeout(resolve, 100));
}

async function afterAllSetup() {
  try {
    // Ensure proper cleanup regardless of connection state
    if (mongoose.connection.readyState !== 0) {
      try {
        await mongoose.connection.dropDatabase();
      } catch (err) {
        console.error('Error dropping database:', err);
      }
      await mongoose.connection.close();
    }

    if (mongoServer) {
      try {
        await mongoServer.stop({ doCleanup: true });
      } catch (err) {
        console.error('Error stopping MongoDB server:', err);
      }
    }

    // Reset state regardless of errors
    isConnected = false;
    mongoServer = null;
  } catch (error) {
    console.error('Error during cleanup:', error);
    // Ensure cleanup state is reset even on error
    isConnected = false;
    mongoServer = null;
    throw error;
  }
}

beforeAll(beforeAllSetup);
beforeEach(beforeEachSetup);
afterEach(afterEachSetup);
afterAll(afterAllSetup);

module.exports = {
  beforeAll: beforeAllSetup,
  beforeEach: beforeEachSetup,
  afterEach: afterEachSetup,
  afterAll: afterAllSetup
};