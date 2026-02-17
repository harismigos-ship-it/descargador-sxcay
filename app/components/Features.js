export default function Features() {
    const features = [
        { title: 'Alta Calidad', desc: 'Descarga videos en 4K, 1080p y más sin límites.', icon: '✨' },
        { title: 'Formato MP3', desc: 'Convierte cualquier video a audio de alta fidelidad.', icon: '🎵' },
        { title: 'TikTok sin Marca', desc: 'Descarga videos de TikTok limpios y rápidos.', icon: '📱' },
        { title: 'Monetización', desc: 'Usa nuestra API para generar ingresos con tus descargas.', icon: '💰' }
    ]

    return (
        <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {features.map((f, i) => (
                    <div key={i} className="glass-morphism" style={{ padding: '40px', textAlign: 'left' }}>
                        <div style={{ fontSize: '40px', marginBottom: '20px' }}>{f.icon}</div>
                        <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{f.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
