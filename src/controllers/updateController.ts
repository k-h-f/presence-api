import { SupabaseService } from '../databaseService/supabaseService';

class UpdateController {
  async postUpdate(serverId: string, channelId?: string, bots?: string[]) {
    SupabaseService.getService().updateMonitoringRecord(
      serverId,
      channelId,
      bots
    );
  }
}

export default UpdateController;
