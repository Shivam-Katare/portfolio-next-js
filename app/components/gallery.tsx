"use client"

import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import supabase from '../lib/supabaseClient';
import { GalleryImage } from '../lib/types';
import { Skeleton, Spin } from 'antd';

export default function Gallery() {

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('ImageShowCase')
      .select('*')
  
    if (error) {
      console.error('Error fetching images:', error);
    } else {
      setImages(data);
    }
    setLoading(false);
  }

 const overlayRender = ({ index }: { index: number }) => {
    const className = `
      absolute left-0 bottom-0 p-2 w-full min-h-24
      text-xs text-slate-300 z-50 bg-black/50
    `;
    return (
      <div className={className}>
        <div className="flex justify-between">
          <div>{images[index].description}</div>
          <div>{index + 1} / {images.length}</div>
        </div>
      </div>
    );
  };

  return (
    <PhotoProvider
      bannerVisible={true}
      overlayRender={overlayRender}
    >
      <div className="gallery-container">
        {
          loading ?
           <Spin size="large" />
           :
           <>
            {images.map((item, index) => (
            <article key={index} className="container__item hover:cursor-pointer">
              <PhotoView key={index} src={item.url}>
                   <Image loading='lazy' src={item?.url} alt={item?.description && item?.description} width={200} height={200} />
              </PhotoView>
            </article>
          ))}
           </>
        }
      </div>
    </PhotoProvider>
  );
}