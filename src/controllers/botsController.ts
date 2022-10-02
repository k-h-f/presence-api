import { SupabaseService } from '../databaseService/supabaseService';

class BotsController {
  async getBots(serverId: number) {
    return SupabaseService.getService().getBots(serverId);
  }
}

export default BotsController;
