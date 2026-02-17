export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: '44px',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(20px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 20px',
                fontSize: '12px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.8)'
            }}>
                <div style={{ fontWeight: '600', color: '#fff' }}>Sxcay</div>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <span>YouTube</span>
                    <span>TikTok</span>
                    <span>MP3</span>
                    <span>Premium</span>
                    <span>Soporte</span>
                </div>
                <div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 14.5L10.5 10.5M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}
