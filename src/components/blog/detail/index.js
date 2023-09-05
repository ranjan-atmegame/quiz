'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Ad from '@/components/ad';
import { getBlogBySlug } from '@/api';
import Item from './Item';

export default function Detail() {
  const [blog, setBlog] = useState();
  const params = useParams();

  useEffect(() => {
    getBlogBySlug(params.title).then((blog) => {
      setBlog(blog);
    });
  }, [params.title]);

  return (
    <>
      <Ad />
      {blog && <Item blog={blog} />}
    </>
  );
}
