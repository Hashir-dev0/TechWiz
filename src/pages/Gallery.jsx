import React from 'react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Image 1',
      description: 'Description for image 1',
      imageUrl: '/vite.svg', // Placeholder image
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description for image 2',
      imageUrl: '/vite.svg',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for image 3',
      imageUrl: '/vite.svg',
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description for image 2',
      imageUrl: '/vite.svg',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for image 3',
      imageUrl: '/vite.svg',
    },
    // Add more items as needed
  ];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }} data-aos="fade-down">Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
        justifyItems: 'center',
      }}>
        {galleryItems.map((item, index) => (
          <div key={item.id} style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '250px',
            transition: 'transform 0.3s ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            data-aos="zoom-in" data-aos-delay={index * 200}
          >
            <img src={item.imageUrl} alt={item.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#555' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
