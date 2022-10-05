import { SupabaseService } from '../databaseService/supabaseService';

class UpdateController {
  async postUpdateChannel(serverId: number, channelId: number) {
    return { message: `Channel Updated` };
  }

  async postUpdateBots(serverId: number, bots: string[]) {
    SupabaseService.getService().updateBots(serverId, bots);
  }

  async postUpdate(serverId: number, channelId?: string, bots?: string[]) {
    SupabaseService.getService().updateMonitoringRecord(
      serverId,
      channelId,
      bots
    );
  }
}

export default UpdateController;
