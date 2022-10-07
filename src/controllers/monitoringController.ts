import { Monitioring } from '../databaseService/dto';
import { SupabaseService } from '../databaseService/supabaseService';

class MonitoringController {
  async getMonitoring(serverId: string): Promise<Monitioring[]> {
    const response = await SupabaseService.getService().getMonitoring(serverId);
    return response;
  }
}

export default MonitoringController;
