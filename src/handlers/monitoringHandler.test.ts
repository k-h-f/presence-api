import { monitoringHandler } from './monitoringHandler';

jest.mock('../controllers/monitoringController', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getMonitoring: jest
        .fn()
        .mockReturnValue([{ serverId: '1234', bots: ['4567', '891011'] }])
    };
  });
});

const mockSend = jest.fn();

const mockResponse = {
  send: mockSend
};

describe('Monitoring Handler', () => {
  it('should filter and return the monitoring info for a specific server', async () => {
    await monitoringHandler(
      { params: { serverId: '1234' } } as any,
      mockResponse as any
    );

    expect(mockSend).toHaveBeenCalledWith({
      bots: ['4567', '891011'],
      serverId: '1234'
    });
  });

  it('should return Server not found message if serverId is not found in list', async () => {
    await monitoringHandler(
      { params: { serverId: '4567' } } as any,
      mockResponse as any
    );

    expect(mockSend).toHaveBeenCalledWith({ message: 'Server not found' });
  });
});
