import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ldgadjstnqtzquuuxjvl.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZ2FkanN0bnF0enF1dXV4anZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MjE4MjYsImV4cCI6MjA1OTk5NzgyNn0.QgDUE7ygElmElLgUMmK3Rhhm4Pbh2LXcJOUN0EhORLE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    db: {
      schema: 'public'
    }
  })

// TEMP TEST — delete this after it works
async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('posts').select('*')
    if (error) {
      console.error('Supabase error:', error)
    } else {
      console.log('Supabase data:', data)
    }
  } catch (err) {
    console.error('Fetch failed:', err)
  }
}

testSupabaseConnection()