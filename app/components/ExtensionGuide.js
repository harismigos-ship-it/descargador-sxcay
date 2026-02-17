export default function ExtensionGuide() {
    return (
        <section id="extension" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="glass-morphism" style={{ padding: '40px', border: '1px solid var(--accent)' }}>
                <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Descarga Directa desde YouTube 🚀</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>
                    Para descargar videos directamente mientras navegas en YouTube, instala nuestro script de usuario ligero:
                </p>

                <div style={{ background: '#111', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
                    <h4 style={{ marginBottom: '10px', color: '#0071e3' }}>Instrucciones:</h4>
                    <ol style={{ paddingLeft: '20px', color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li>Instala la extensión <b>Tampermonkey</b> en tu navegador Chrome o Edge.</li>
                        <li>Haz clic en "Añadir nuevo script".</li>
                        <li>Pega el código que te proporcionamos abajo.</li>
                        <li>¡Listo! Aparecerá un botón de <b>"Descargar con Sxcay"</b> debajo de cada video en YouTube.</li>
                    </ol>
                </div>

                <button style={{
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    Copiar Script de Usuario
                </button>
            </div>
        </section>
    )
}
