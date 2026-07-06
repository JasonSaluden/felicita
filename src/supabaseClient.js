import { createClient } from '@supabase/supabase-js'

// Configurable via un fichier .env (variables REACT_APP_SUPABASE_URL et
// REACT_APP_SUPABASE_ANON_KEY). La clé "anon" est publique par conception :
// la protection des données repose sur les règles RLS côté Supabase.
const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL || 'https://dwocrluqhyonjqlyjvun.supabase.co'
const supabaseKey =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3b2NybHVxaHlvbmpxbHlqdnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTUwNDIsImV4cCI6MjA2MjYzMTA0Mn0.DseiPc9QBxy0McN24eMaZ0vbUmANw_bD4T6IQNzhC6w'

export const supabase = createClient(supabaseUrl, supabaseKey)
