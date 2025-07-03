import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Auth from '../components/Auth'

export default function Admin() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('create') // 'create' ou 'manage'
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  
  // États pour le formulaire
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const [articleDate, setArticleDate] = useState('')
  const [editingArticle, setEditingArticle] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
  }, [])

  useEffect(() => {
    if (user && activeTab === 'manage') {
      fetchArticles()
    }
  }, [user, activeTab])

  const fetchArticles = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      alert('Erreur lors du chargement des articles: ' + error.message)
    } else {
      setArticles(data || [])
    }
    setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    let imageUrl = null
    if (image) {
      const { data, error } = await supabase.storage
        .from('articles')
        .upload(`images/${Date.now()}_${image.name}`, image)

      if (error) {
        alert('Erreur upload image: ' + error.message)
        setLoading(false)
        return
      }
      imageUrl = supabase.storage.from('articles').getPublicUrl(data.path).data.publicUrl
    }

    const articleData = { 
      title, 
      content, 
      image_url: imageUrl,
      article_date: articleDate || new Date().toISOString()
    }

    let result
    if (editingArticle) {
      // Mise à jour
      result = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', editingArticle.id)
    } else {
      // Création
      result = await supabase
        .from('articles')
        .insert(articleData)
    }

    if (result.error) {
      alert('Erreur: ' + result.error.message)
    } else {
      alert(editingArticle ? 'Article mis à jour !' : 'Article créé !')
      resetForm()
      if (activeTab === 'manage') fetchArticles()
    }
    setLoading(false)
  }

  const resetForm = () => {
    setTitle('')
    setContent('')
    setImage(null)
    setArticleDate('')
    setEditingArticle(null)
  }

  const handleEdit = (article) => {
    setEditingArticle(article)
    setTitle(article.title)
    setContent(article.content)
    // Formater la date pour l'input date
    if (article.article_date) {
      const date = new Date(article.article_date)
      const formattedDate = date.toISOString().slice(0, 10)
      setArticleDate(formattedDate)
    }
    setActiveTab('create')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return

    const { error } = await supabase.from('articles').delete().eq('id', id)
    if (error) {
      alert('Erreur lors de la suppression: ' + error.message)
    } else {
      alert('Article supprimé !')
      fetchArticles()
    }
  }

  if (!user) return <Auth onLogin={setUser} />
  if (user.email !== 'contactlafelicita@gmail.com') return <p>Accès refusé</p>

  return (
    <div className="min-h-screen bg-[#FFF8C9] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Espace Administration</h1>
          <p className="text-gray-600">Gérez les articles du festival La Felicità</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => {setActiveTab('create'); resetForm()}}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'create'
                  ? 'bg-[#FFD7B5] text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              ✏️ Créer un article
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'manage'
                  ? 'bg-[#FFD7B5] text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              📝 Gérer les articles
            </button>
          </div>
        </div>

        {activeTab === 'create' && (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingArticle ? '✏️ Modifier l\'article' : '✨ Nouvel article'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de l'article
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Nouvelle programmation annoncée !"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD7B5] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de l'article
                </label>
                <input
                  type="date"
                  value={articleDate}
                  onChange={(e) => setArticleDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD7B5] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Si non renseignée, la date actuelle sera utilisée
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Rédigez votre article ici..."
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD7B5] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image (optionnelle)
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD7B5] focus:border-transparent"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#FFD7B5] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffc399] transition disabled:opacity-50"
                >
                  {loading ? '⏳ Publication...' : (editingArticle ? '💾 Mettre à jour' : '🚀 Publier')}
                </button>
                
                {editingArticle && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">📚 Articles publiés</h2>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="text-xl">⏳ Chargement...</div>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-500">Aucun article publié pour le moment</p>
              </div>
            ) : (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div key={article.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {article.content.substring(0, 150)}...
                        </p>
                        <p className="text-sm text-gray-400">
                          Publié le {new Date(article.article_date || article.created_at).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long', 
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      
                      {article.image_url && (
                        <img 
                          src={article.image_url} 
                          alt={article.title}
                          className="w-20 h-20 object-cover rounded-lg ml-4"
                        />
                      )}
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(article)}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm font-medium"
                      >
                        ✏️ Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition text-sm font-medium"
                      >
                        🗑️ Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Déconnexion */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              supabase.auth.signOut()
              setUser(null)
            }}
            className="px-6 py-2 text-gray-600 hover:text-black transition font-medium"
          >
            🚪 Se déconnecter
          </button>
        </div>
      </div>
    </div>
  )
}