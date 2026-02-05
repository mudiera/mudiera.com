export default function Categories() {
  const categories = ['Health & Beauty', 'Food & Drinks', 'Services', 'Shopping', 'Community', 'Events'];
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Categories</h1>
          <p className="page-subtitle">Explore businesses by category.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
            <div className="category-pills" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} className="pill" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>{cat}</button>
            ))}
            </div>
        </div>
      </section>
    </main>
  );
}
