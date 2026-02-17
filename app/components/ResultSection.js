export default function ResultSection({ result, loading }) {
    if (loading) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid rgba(255,255,255,0.1)',
                    borderTopColor: '#0071e3',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    animation: 'spin 1s linear infinite'
                }} />
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Analizando video...</p>
                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes spin { to { transform: rotate(360deg); } }
        ` }} />
            </div>
        )
    }

    if (!result) return null

    return (
        <section style={{
            padding: '40px 20px',
            maxWidth: '1000px',
            margin: '0 auto',
            animation: 'fadeIn 0.5s ease-out'
        }}>
            <div className="glass-morphism" style={{ padding: '30px', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <img src={result.thumbnail} alt={result.title} style={{ width: '300px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{result.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
                        {result.uploader} • {result.duration}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
                        {result.formats.slice(0, 8).map((f, i) => (
                            <a
                                key={i}
                                href={f.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: f.isAudio ? 'rgba(217, 0, 255, 0.1)' : 'rgba(0, 113, 227, 0.1)',
                                    border: `1px solid ${f.isAudio ? 'rgba(217, 0, 255, 0.2)' : 'rgba(0, 113, 227, 0.2)'}`,
                                    padding: '12px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    transition: 'background 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseOut={(e) => e.currentTarget.style.background = f.isAudio ? 'rgba(217, 0, 255, 0.1)' : 'rgba(0, 113, 227, 0.1)'}
                            >
                                <div style={{ fontWeight: '600' }}>{f.qualityLabel}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{f.extension.toUpperCase()}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      ` }} />
        </section>
    )
}
