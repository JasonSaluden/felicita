import { useState } from 'react'
import { supabase } from '../supabaseClient'
export default ArticleForm


function ArticleForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let imageUrl = null
    if (image) {
      const { data, error } = await supabase.storage
        .from('articles')
        .upload(`images/${Date.now()}_${image.name}`, image)

      if (error) return alert(error.message)
      imageUrl = supabase.storage.from('articles').getPublicUrl(data.path).data.publicUrl
    }

    const { error } = await supabase.from('articles').insert({ title, content, image_url: imageUrl })
    if (error) alert(error.message)
    else alert('Article ajouté !')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card p-4 shadow-sm bg-light">
        <h2 className="mb-4">Créer un nouvel article</h2>
  
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Titre"
            value={title} onChange={e => setTitle(e.target.value)} />
        </div>
  
        <div className="mb-3">
          <textarea className="form-control" placeholder="Contenu"
            value={content} onChange={e => setContent(e.target.value)} rows="6" />
        </div>
  
        <div className="mb-3">
          <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])} />
        </div>
  
        <button type="submit" className="btn btn-warning">Publier</button>
      </div>
    </form>
  )
  
}
