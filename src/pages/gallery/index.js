import React from 'react';
import Layout from '@theme/Layout';
import PhotoAlbum from 'react-photo-album';

const photos = [
  {
    src: '/img/undraw_docusaurus_mountain.svg',
    width: 800,
    height: 600,
  },
  {
    src: '/img/undraw_docusaurus_react.svg',
    width: 1600,
    height: 900,
  },
];

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>

        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </Layout>
  );
}
