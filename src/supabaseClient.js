import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dwocrluqhyonjqlyjvun.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3b2NybHVxaHlvbmpxbHlqdnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTUwNDIsImV4cCI6MjA2MjYzMTA0Mn0.DseiPc9QBxy0McN24eMaZ0vbUmANw_bD4T6IQNzhC6w'
export const supabase = createClient(supabaseUrl, supabaseKey)
