import {
  createClient,
  PostgrestResponse,
  SupabaseClient
} from '@supabase/supabase-js';
import { getConfig } from '../config/getConfig';
import { Tables } from './constants';
import { Monitioring } from './dto';

export class SupabaseService {
  private static supabaseService: SupabaseService;
  private client: SupabaseClient;

  private constructor() {
    const { SUPABASE_KEY, SUPABASE_URL } = getConfig();
    this.client = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  public static getService() {
    if (!SupabaseService.supabaseService) {
      SupabaseService.supabaseService = new SupabaseService();
    }

    return this.supabaseService;
  }

  public async updateMonitoringRecord(
    serverId: string,
    channelId?: string,
    bots?: string[]
  ) {
    const result: PostgrestResponse<Monitioring> = await this.client
      .from(Tables.MONITORING)
      .select('bots, serverId')
      .eq('serverId', serverId);

    if (!result.data?.length && !result.error) {
      //Create a record then update
      await this.client
        .from(Tables.MONITORING)
        .insert([{ serverId, channelId, bots }]);
      return;
    }

    if (bots) {
      await this.client
        .from(Tables.MONITORING)
        .update({ bots })
        .eq('serverId', serverId);
    }

    if (channelId) {
      await this.client
        .from(Tables.MONITORING)
        .update({ channelId: channelId })
        .eq('serverId', serverId);
    }
  }

  public async getMonitoring(serverId: string) {
    const result: PostgrestResponse<Monitioring> = await this.client
      .from(Tables.MONITORING)
      .select('serverId, channelId, bots')
      .like('serverId', serverId);

    return result.data ?? [];
  }
}
