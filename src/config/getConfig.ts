interface Config {
  PORT: number;
  SUPABASE_KEY: string;
  SUPABASE_URL: string;
}

export const getConfig = (): Config => ({
  PORT: (process.env.PORT && parseInt(process.env.PORT)) || 4000,
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_KEY: process.env.SUPABASE_KEY || ''
});
