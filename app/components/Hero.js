'use client'
import { useState } from 'react'

export default function Hero({ onExtract }) {
    const [url, setUrl] = useState('')

    return (
        <section style={{
            padding: '120px 20px 60px',
            textAlign: 'center',
            background: 'radial-gradient(circle at top, #1a1a1a 0%, #000 70%)'
        }}>
            <h2 style={{ fontSize: '14px', color: '#ff3b3b', letterSpacing: '2px', fontWeight: '600', marginBottom: '10px' }}>PROXIMAMENTE</h2>
            <h1 style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.1'
            }}>
                Descargador de <br />
                <span className="premium-gradient-text">Videos Sxcay</span>
            </h1>
            <p style={{
                fontSize: 'clamp(18px, 3vw, 24px)',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '40px'
            }}>
                Una mente más brillante para tus descargas.
            </p>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
                animation: 'glow 4s infinite alternate'
            }} className="glass-morphism">
                <div style={{ display: 'flex', padding: '10px' }}>
                    <input
                        type="text"
                        placeholder="Pega el enlace de YouTube o TikTok aquí..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            padding: '20px',
                            color: '#fff',
                            fontSize: '18px',
                            outline: 'none'
                        }}
                    />
                    <button
                        onClick={() => onExtract(url)}
                        style={{
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '0 40px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Descargar
                    </button>
                </div>
            </div>
        </section>
    )
}
