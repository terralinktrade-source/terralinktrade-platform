import React from 'react'
import { getServerSession } from 'next-auth'
import authOptions from '../../../lib/auth'

const trustSignals = ['Supplier coordination', 'Trade visibility', 'Secure partner access']

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.brandPanel}>
          <div style={styles.brandRow}>
            <div style={styles.logoMark}>TL</div>
            <span style={styles.brandTag}>B2B Platform</span>
          </div>

          <div style={styles.headingGroup}>
            <p style={styles.eyebrow}>Terra Link Trade</p>
            <h1 style={styles.heading}>Trade operations, simplified.</h1>
          </div>

          <p style={styles.subheading}>
            Secure access for procurement, supplier coordination, and cross-border trade
            operations.
          </p>

          <ul style={styles.featureList}>
            {trustSignals.map((item) => (
              <li key={item} style={styles.featureItem}>
                <span style={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <p style={styles.cardEyebrow}>Welcome back</p>
            <h2 style={styles.cardTitle}>Sign in</h2>
          </div>

          {session ? (
            <div style={styles.successBox}>
              <div style={styles.successLabel}>Signed in</div>
              <div style={styles.successEmail}>{session.user?.email}</div>
              <a href="/dashboard" style={styles.primaryButton}>
                Open dashboard
              </a>
            </div>
          ) : (
            <>
              <div style={styles.inputWrap}>
                <label style={styles.label}>Business email</label>
                <div style={styles.inputField}>name@company.com</div>
              </div>

              <a href="/api/auth/signin" style={styles.primaryButton}>
                Continue with email
              </a>

              <p style={styles.helperText}>
                We’ll send a secure sign-in link to your work email.
              </p>
            </>
          )}

          <div style={styles.divider}>
            <span style={styles.dividerText}>Trusted partner access</span>
          </div>

          <div style={styles.footerMeta}>
            <span>Secure</span>
            <span>Compliant</span>
            <span>Operational</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f4f7f5 0%, #edf4f1 100%)',
  },
  shell: {
    width: '100%',
    maxWidth: '1100px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 32px 80px rgba(15, 35, 33, 0.12)',
    border: '1px solid rgba(21, 63, 49, 0.08)',
    background: '#ffffff',
  },
  brandPanel: {
    padding: '56px 52px',
    background: 'linear-gradient(180deg, #102c26 0%, #183d36 100%)',
    color: '#e9f1ee',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '26px',
  },
  logoMark: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #d4b06a, #b88d3f)',
    color: '#102c26',
    fontWeight: 800,
    fontSize: '1.1rem',
    letterSpacing: '0.08em',
  },
  brandTag: {
    fontSize: '0.74rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#dfece6',
    opacity: 0.9,
  },
  headingGroup: {
    marginBottom: '18px',
  },
  eyebrow: {
    margin: 0,
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#b7d0c7',
    marginBottom: '10px',
  },
  heading: {
    margin: 0,
    fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
    lineHeight: 1.06,
    letterSpacing: '-0.06em',
    fontWeight: 700,
  },
  subheading: {
    margin: 0,
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: '#cfddd8',
    maxWidth: '460px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '32px 0 0',
    display: 'grid',
    gap: '14px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 0',
    color: '#edf5f2',
  },
  check: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(212, 176, 106, 0.2)',
    color: '#e6c782',
    fontWeight: 700,
    fontSize: '0.85rem',
  },
  card: {
    padding: '52px 42px',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardHeader: {
    marginBottom: '28px',
  },
  cardEyebrow: {
    margin: 0,
    color: '#5d7a70',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  cardTitle: {
    margin: 0,
    color: '#102c26',
    fontSize: '2.2rem',
    lineHeight: 1.1,
    letterSpacing: '-0.05em',
  },
  inputWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '18px',
  },
  label: {
    color: '#355147',
    fontSize: '0.82rem',
    fontWeight: 600,
  },
  inputField: {
    border: '1px solid #dfeae6',
    borderRadius: '12px',
    background: '#f5f9f7',
    padding: '16px 16px',
    color: '#7f918c',
    fontSize: '1rem',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '15px 18px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #193f38 0%, #01f3f0 100%)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 12px 30px rgba(25, 63, 56, 0.22)',
    marginTop: '8px',
  },
  helperText: {
    margin: '18px 0 0',
    color: '#587067',
    fontSize: '0.92rem',
    lineHeight: 1.5,
    textAlign: 'center',
  },
  successBox: {
    borderRadius: '16px',
    border: '1px solid #dfeae6',
    background: '#f5faf8',
    padding: '18px 18px 16px',
  },
  successLabel: {
    color: '#5a7b71',
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  successEmail: {
    color: '#123a34',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '18px',
    wordBreak: 'break-word',
  },
  divider: {
    position: 'relative',
    margin: '28px 0 18px',
    textAlign: 'center',
    borderTop: '1px solid #edf1ee',
  },
  dividerText: {
    position: 'relative',
    top: '-11px',
    background: '#ffffff',
    padding: '0 12px',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#6b7e79',
  },
  footerMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    color: '#5d7a70',
    fontSize: '0.74rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}

