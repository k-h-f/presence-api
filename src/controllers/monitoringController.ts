import { SupabaseService } from '../databaseService/supabaseService';

class MonitoringController {
  async update(serverId: number, channelId?: string, bots?: string[]) {
    SupabaseService.getService().updateMonitoringRecord(
      serverId,
      channelId,
      bots
    );
  }
}

export default MonitoringController;
