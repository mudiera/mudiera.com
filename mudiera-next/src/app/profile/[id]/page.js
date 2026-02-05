import businessesData from '../../../data/businesses.json';
import Link from 'next/link';

// Generate static params for all businesses
export async function generateStaticParams() {
  return businessesData.businesses.map((business) => ({
    id: business.id.toString(),
  }));
}

export default async function Profile({ params }) {
    // Wait for params to be available
    const { id } = await params;
    const business = businessesData.businesses.find(b => b.id.toString() === id);

    if (!business) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Business not found</h1>
                <Link href="/" className="btn-subscribe">Back to Directory</Link>
            </div>
        );
    }

    return (
        <main>
             <section className="hero-block" style={{ minHeight: '300px' }}>
                <div className="container">
                    <span className="card-meta" style={{ color: 'var(--brand-deep)', fontWeight: 'bold' }}>{business.category}</span>
                    <h1 className="hero-title">{business.name}</h1>
                    <p className="hero-text">{business.location}</p>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                        <div className="main-content">
                            <h3>About</h3>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{business.description}</p>
                        </div>
                        <div className="sidebar" style={{ background: 'var(--brand-lilac)', padding: '30px', borderRadius: '12px' }}>
                            <h4 style={{ marginTop: 0 }}>Contact Details</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                                {business.contact && (
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Contact:</strong> {business.contact}
                                    </li>
                                )}
                                {business.website && (
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Website:</strong> <a href={business.website} target="_blank" rel="noopener noreferrer">{business.website}</a>
                                    </li>
                                )}
                                {business.instagram && (
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>Instagram:</strong> <a href={business.instagram} target="_blank" rel="noopener noreferrer">View Profile</a>
                                    </li>
                                )}
                            </ul>
                            <Link href="/" className="btn-subscribe" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Back to Directory</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
