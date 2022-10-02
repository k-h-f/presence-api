import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { getConfig } from '../config/getConfig';
import { Tables } from './constants';

const { SUPABASE_KEY, SUPABASE_URL } = getConfig();

export class SupabaseService {
  private static supabaseService: SupabaseService;
  private client: SupabaseClient;

  private constructor() {
    this.client = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  public static getService() {
    if (!SupabaseService.supabaseService) {
      SupabaseService.supabaseService = new SupabaseService();
    }

    return this.supabaseService;
  }

  public async getBots(serverId: number) {
    const result = await this.client
      .from(Tables.MONITORING)
      .select('bots')
      .filter('serverId', 'eq', serverId);
    return result.data;
  }
}
