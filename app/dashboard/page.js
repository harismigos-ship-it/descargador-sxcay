'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Dashboard() {
    const [paypal, setPaypal] = useState('harismigos@gmail.com')
    const [earnings, setEarnings] = useState(0.00)

    return (
        <main style={{ minHeight: '100vh', background: '#000' }}>
            <Navbar />

            <div style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Panel de Creador <span className="premium-gradient-text">Sxcay</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>Tus ingresos por anuncios se envían automáticamente a tu cuenta vinculada.</p>

                <div style={{ display: 'grid', gap: '20px' }}>
                    <div className="glass-morphism" style={{ padding: '30px', border: '1px solid #00ba37' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '30px' }}>🅿️</span> PayPal (Destino de Pagos)
                        </h2>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}>
                            Cada vez que un usuario descarga un video y ve un anuncio, el 100% de la ganancia se transfiere a esta cuenta.
                        </p>
                        <div style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '15px',
                            borderRadius: '10px',
                            color: '#fff',
                            marginBottom: '20px',
                            fontSize: '18px',
                            fontWeight: '600'
                        }}>
                            {paypal}
                        </div>
                        <p style={{ color: '#00ba37', fontSize: '12px', fontWeight: '600' }}>✓ Verificado y Activo (Pagos en EUR €)</p>
                    </div>
                </div>

                <div className="glass-morphism" style={{ marginTop: '40px', padding: '30px', border: '1px solid var(--accent)' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Ganancias de Hoy</h3>
                    <p style={{ fontSize: '48px', fontWeight: '700' }}>{earnings.toFixed(2)} €</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
                        Próximo pago automático a {paypal}
                    </p>
                </div>

                <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0,186,55,0.1)', borderRadius: '15px', border: '1px solid #00ba37' }}>
                    <h4 style={{ color: '#00ba37', marginBottom: '10px' }}>✅ Configuración Completa:</h4>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                        El sistema ha sido configurado para que {paypal} sea el beneficiario único de toda la publicidad generada en Descargador de Videos Sxcay. Los pagos se procesarán en Euros (€).
                    </p>
                </div>
            </div>
        </main>
    )
}
