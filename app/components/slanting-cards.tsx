import { Skeleton } from 'antd';
import supabase from 'app/lib/supabaseClient';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type SlantingCardsProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

type WinnigProject = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

function SlantingCards({ title, description, link, image }: SlantingCardsProps) {
  return (
    <Link href={link} target='_blank'>
      <div className='w-full grid grid-cols-[0.9fr_0.1fr] justify-items-start items-center p-3 border-solid border-[2px] border-black rounded-[6px]'>
        <div>
          <h3 className='font-medium  text-neutral-900 dark:text-neutral-100'>{title}</h3>
          <p className='mt-0.5 text-neutral-600 text-[12px] dark:text-neutral-400'>{description}</p>
        </div>

        <Image src={image} alt='arrow-up' width={33} height={33} className='rounded-[33px] w-[33px]' />
      </div>
    </Link>
  )
}

function SlantingCardsContainer() {
  const [winningProjects, setWinningProjects] = useState<WinnigProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('WinningProject')
      .select('*')

    if (error) {
      console.error('Error fetching images:', error);
    } else {
      setWinningProjects(data);
    }
    setIsLoading(false);
  }

  return (
    <div className='w-full grid grid-cols-1 gap-4'>
      {
        isLoading ? (
          <Skeleton active />
        ) : (
          winningProjects.map((project) => (
            <SlantingCards
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))
        )
      }
    </div>
  )
}

export default SlantingCardsContainer