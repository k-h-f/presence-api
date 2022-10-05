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
    serverId: number,
    channelId?: string,
    bots?: string[]
  ) {
    console.log('serverId!!', serverId);
    const result: PostgrestResponse<Monitioring> = await this.client
      .from(Tables.MONITORING)
      .select('bots,serverId')
      .filter('serverId', 'eq', serverId);

    if (!result.data && !result.error) {
    }

    const monitoringBots = result.data;
    console.log('results');
  }

  public async updateBots(serverId: number, bots: string[]) {
    console.log('serverId!!', serverId);
    const result: PostgrestResponse<Monitioring> = await this.client
      .from(Tables.MONITORING)
      .select('bots,serverId')
      .filter('serverId', 'eq', serverId);

    if (!result.data && !result.error) {
    }

    const monitoringBots = result.data;
    console.log('results');
  }

  public async getBots(serverId: number) {
    const result = await this.client
      .from(Tables.MONITORING)
      .select('bots')
      .filter('serverId', 'eq', serverId);
    return result.data;
  }
}
