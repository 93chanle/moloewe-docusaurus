import React from 'react';
import Layout from '@theme/Layout';
import PhotoAlbum from 'react-photo-album';

import img1 from '/img/gallery/01.JPG';
import img2 from '/img/gallery/02.JPG';
import img3 from '/img/gallery/03.JPG';
import img4 from '/img/gallery/04.JPG';
import img5 from '/img/gallery/05.JPG';
import img6 from '/img/gallery/06.JPG';
import img7 from '/img/gallery/07.JPG';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50',
          fontSize: '20px',
          padding: '5% 10%',
        }}
      >
        <img src={img1} alt="Ähello"></img>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50',
          fontSize: '20px',
          padding: '5% 10%',
        }}
      >
        <img src={img2}></img>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50',
          fontSize: '20px',
          padding: '5% 10%',
        }}
      >
        <img src={img3}></img>
      </div>
    </Layout>
  );
}
