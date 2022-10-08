import { Tables } from './constants';
import { SupabaseService } from './supabaseService';
import {
  mockEq,
  mockFrom,
  mockLike,
  mockSelect,
  mockSupabase,
  mockUpdate
} from './testUtils/mockClient';

jest.mock('@supabase/supabase-js', () => {
  return {
    createClient: jest
      .fn()
      .mockImplementation(() => mockSupabase(['random', 'data']))
  };
});

describe('Supabase Service', () => {
  describe('updateMonitoringRecord', () => {
    it('should create a record if result is empty', async () => {
      const service = SupabaseService.getService();
      await service.updateMonitoringRecord('1234', '5678', ['91011', '121314']);

      expect(mockFrom).toHaveBeenCalledWith(Tables.MONITORING);
      expect(mockSelect).toHaveBeenCalledWith('bots, serverId');
      expect(mockEq).toHaveBeenCalledWith('serverId', '1234');

      expect(mockFrom).not.toHaveBeenCalledTimes(2);
    });

    it('should update the bots column if bots list exists but channelId does not', async () => {
      const service = SupabaseService.getService();
      await service.updateMonitoringRecord('1234', undefined, [
        '91011',
        '121314'
      ]);

      expect(mockFrom).toHaveBeenCalledWith(Tables.MONITORING);
      expect(mockUpdate).toHaveBeenCalledWith({ bots: ['91011', '121314'] });
      expect(mockEq).toHaveBeenCalledWith('serverId', '1234');

      expect(mockFrom).not.toHaveBeenCalledTimes(2);
    });

    it('should update the channelId column if channelId exists but not bots list', async () => {
      const service = SupabaseService.getService();
      await service.updateMonitoringRecord('1234', '4567');

      expect(mockFrom).toHaveBeenCalledWith(Tables.MONITORING);
      expect(mockUpdate).toHaveBeenCalledWith({ channelId: '4567' });
      expect(mockEq).toHaveBeenCalledWith('serverId', '1234');
    });

    describe('getMonitoring', () => {
      it('should correclty query for monitoring information', async () => {
        const service = SupabaseService.getService();
        await service.getMonitoring('1234');

        expect(mockFrom).toHaveBeenCalledWith(Tables.MONITORING);
        expect(mockSelect).toHaveBeenCalledWith('serverId, channelId, bots');
        expect(mockLike).toHaveBeenCalledWith('serverId', '1234');
      });
    });
  });
});
