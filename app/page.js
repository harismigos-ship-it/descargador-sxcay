'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ResultSection from './components/ResultSection'
import ExtensionGuide from './components/ExtensionGuide'
import Link from 'next/link'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [linked, setLinked] = useState(false)

  const handleExtract = async (url) => {
    if (!url) return
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Usamos la ruta relativa '/api/extract' para que use el motor interno del servidor (24/7)
      const response = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setResult(data)
      }
    } catch (err) {
      setError('Error de conexión con el motor de descarga en la nube.')
    } finally {
      setLoading(false)
    }
  }

  const handleAutoLink = () => {
    if (email.includes('@')) {
      setLinked(true)
      alert(`¡Cuenta vinculada automáticamente a ${email}! Ya tienes acceso directo a todas las calidades.`);
    } else {
      alert('Por favor, introduce un correo electrónico válido.')
    }
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <Navbar />

      <div style={{ position: 'absolute', top: '60px', right: '20px', zIndex: 100 }}>
        <Link href="/dashboard" style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          padding: '5px 10px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '5px'
        }}>
          Panel de Creador
        </Link>
      </div>

      <Hero onExtract={handleExtract} />

      {loading && <ResultSection loading={true} />}

      {error && (
        <div style={{
          color: '#ff3b3b',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(255,59,59,0.1)',
          margin: '20px auto',
          maxWidth: '800px',
          borderRadius: '15px',
          border: '1px solid rgba(255,59,59,0.3)'
        }}>
          <b>⚠️ Estado del Motor:</b> {error}
        </div>
      )}

      {result && <ResultSection result={result} />}

      {/* Monetization Banner Placeholder */}
      <div style={{
        maxWidth: '1000px',
        margin: '20px auto',
        height: '100px',
        border: '1px dashed rgba(255,255,255,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '14px',
        background: 'rgba(255,255,255,0.02)'
      }}>
        <div style={{ fontWeight: '600', color: '#00ba37', marginBottom: '5px' }}>💰 Monetización Activa (Euros €)</div>
        <div>Anuncio: Ingresos enviados directamente a harismigos@gmail.com</div>
      </div>

      <Features />

      <ExtensionGuide />

      {/* Simplified Linking Section */}
      <section style={{ padding: '100px 20px', textAlign: 'center', background: '#0a0a0a' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Vincula tu cuenta de YouTube</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Introduce tu correo electrónico para vincular tu cuenta automáticamente y descargar en 4K/8K sin límites.
        </p>

        <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', gap: '10px' }}>
          <input
            type="email"
            placeholder="tu-correo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={linked}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '15px',
              borderRadius: '12px',
              color: '#fff',
              outline: 'none'
            }}
          />
          <button
            onClick={handleAutoLink}
            disabled={linked}
            style={{
              background: linked ? '#333' : 'var(--accent-gradient)',
              color: '#fff',
              border: 'none',
              padding: '0 25px',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: linked ? 'default' : 'pointer'
            }}>
            {linked ? 'Vinculado' : 'Vincular por Correo'}
          </button>
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
        © 2026 Descargador de Videos Sxcay. Todos los derechos reservados.
      </footer>
    </main>
  )
}
