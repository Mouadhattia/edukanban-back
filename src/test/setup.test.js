const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const setup = require('./setup');

describe('Test Setup', () => {
  let mongoServer;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(async () => {
    if (mongoServer) {
      await mongoServer.stop();
    }
    await mongoose.disconnect();
  });

  it('should handle connection errors gracefully', async () => {
    // Mock MongoMemoryServer to simulate failure
    jest.spyOn(MongoMemoryServer, 'create').mockRejectedValue(
      new Error('Failed to create MongoDB instance')
    );

    await expect(setup.beforeAll()).rejects.toThrow('Failed to create MongoDB instance');
  });

  it('should handle mongoose connection errors', async () => {
    // Mock successful server creation but failed connection
    mongoServer = {
      getUri: jest.fn().mockReturnValue('mongodb://invalid-uri'),
      stop: jest.fn().mockResolvedValue(undefined)
    };

    jest.spyOn(MongoMemoryServer, 'create').mockResolvedValue(mongoServer);
    jest.spyOn(mongoose, 'connect').mockRejectedValue(
      new Error('Connection failed')
    );

    await expect(setup.beforeAll()).rejects.toThrow('Connection failed');
    expect(mongoServer.stop).toHaveBeenCalled();
  });

  it('should handle cleanup errors in beforeEach', async () => {
    const mockCollection = {
      deleteMany: jest.fn().mockRejectedValue(new Error('Cleanup failed'))
    };
    const mockDb = {
      collections: jest.fn().mockResolvedValue([mockCollection])
    };

    jest.spyOn(mongoose, 'connection', 'get').mockReturnValue({
      db: mockDb,
      readyState: 1
    });

    await expect(setup.beforeEach()).rejects.toThrow('Cleanup failed');
  });

  it('should handle disconnection errors in afterAll', async () => {
    mongoServer = {
      stop: jest.fn().mockRejectedValue(new Error('Stop failed'))
    };

    jest.spyOn(mongoose, 'connection', 'get').mockReturnValue({
      close: jest.fn().mockRejectedValue(new Error('Disconnect failed')),
      readyState: 1
    });

    await expect(setup.afterAll()).rejects.toThrow('Error in test teardown');
  });
});