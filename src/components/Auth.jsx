import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else onLogin(data.user)
  }

  return (
    <form onSubmit={handleLogin} className="container mt-5" style={{ maxWidth: '400px' }}>
  <div className="card p-4 shadow-sm bg-light">
    <h2 className="text-center mb-4">Espace Admin</h2>

    <div className="mb-3">
      <input type="email" className="form-control" placeholder="Email"
        value={email} onChange={e => setEmail(e.target.value)} />
    </div>

    <div className="mb-3">
      <input type="password" className="form-control" placeholder="Mot de passe"
        value={password} onChange={e => setPassword(e.target.value)} />
    </div>

    <button type="submit" className="btn btn-warning w-100">Se connecter</button>
  </div>
</form>

  )
}
