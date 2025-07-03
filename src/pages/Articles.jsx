import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [layout, setLayout] = useState('timeline') // 'magazine', 'cards', 'timeline', 'masonry'

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Erreur lors du chargement des articles:', error)
    } else {
      setArticles(data || [])
      // Debug: affiche les URLs des images
      data?.forEach(article => {
        if (article.image_url) {
          console.log('URL image:', article.image_url)
        }
      })
    }
    setLoading(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8C9] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎪</div>
          <p className="text-lg">Chargement des articles...</p>
        </div>
      </div>
    )
  }

  // ==================== LAYOUT MAGAZINE ====================
  const MagazineLayout = () => (
    <div className="max-w-4xl mx-auto space-y-12">
      {articles.map((article, index) => (
        <article key={article.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex`}>
          {article.image_url && (
            <div className="lg:w-1/2">
              <img 
                src={article.image_url} 
                alt={article.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          )}
          <div className={`${article.image_url ? 'lg:w-1/2' : 'w-full'} p-8`}>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>📅</span>
              <time>{formatDate(article.created_at)}</time>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              {article.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )

  // ==================== LAYOUT CARTES ====================
  const CardsLayout = () => (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          {article.image_url && (
            <img 
              src={article.image_url} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span>📅</span>
              <time>{formatDate(article.created_at)}</time>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              {article.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {truncateText(article.content, 150)}
            </p>
            <button className="mt-4 text-[#FF9F68] hover:text-[#FF8A50] font-semibold">
              Lire la suite →
            </button>
          </div>
        </article>
      ))}
    </div>
  )

  // ==================== LAYOUT TIMELINE ====================
  const TimelineLayout = () => (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#FFD7B5] h-full"></div>
        
        {articles.map((article, index) => (
          <div key={article.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {/* Point sur la timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF9F68] rounded-full border-4 border-white shadow-lg z-10"></div>
            
            {/* Contenu de l'article */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <article className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-sm text-gray-500 mb-2">
                  📅 {formatDate(article.article_date || article.created_at)}
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900">
                  {article.title}
                </h2>
                {article.image_url && (
                  <img 
                    src={article.image_url} 
                    alt={article.title}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                )}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {truncateText(article.content, 200)}
                </p>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // ==================== LAYOUT MASONRY (Pinterest-style) ====================
  const MasonryLayout = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {articles.map((article) => (
        <article key={article.id} className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          {article.image_url && (
            <img 
              src={article.image_url} 
              alt={article.title}
              className="w-full object-cover"
            />
          )}
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span>📅</span>
              <time>{formatDate(article.created_at)}</time>
            </div>
            <h2 className="text-lg font-bold mb-3 text-gray-900">
              {article.title}
            </h2>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FFF8C9] py-8 px-4">
      {/* Header avec sélecteur de layout */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">📰 Actualités du Festival</h1>
          <p className="text-gray-600 text-lg">Toutes les dernières nouvelles de La Felicità</p>
        </div>

        {/* Sélecteur de disposition */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setLayout('magazine')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              layout === 'magazine' ? 'bg-[#FFD7B5] text-black' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            📖 Magazine
          </button>
          <button
            onClick={() => setLayout('cards')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              layout === 'cards' ? 'bg-[#FFD7B5] text-black' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            🃏 Cartes
          </button>
          <button
            onClick={() => setLayout('timeline')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              layout === 'timeline' ? 'bg-[#FFD7B5] text-black' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            ⏰ Timeline
          </button>
          <button
            onClick={() => setLayout('masonry')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              layout === 'masonry' ? 'bg-[#FFD7B5] text-black' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            🧱 Masonry
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🎪</div>
            <h2 className="text-2xl font-bold mb-4">Aucun article pour le moment</h2>
            <p className="text-gray-600">Les actualités du festival arriveront bientôt !</p>
          </div>
        ) : (
          <>
            {layout === 'magazine' && <MagazineLayout />}
            {layout === 'cards' && <CardsLayout />}
            {layout === 'timeline' && <TimelineLayout />}
            {layout === 'masonry' && <MasonryLayout />}
          </>
        )}
      </div>
    </div>
  )
}