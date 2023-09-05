'use client';
import { useState, useEffect } from 'react';
import Ad from '../ad';
import Item from './Item';
import { getBlogList } from '@/api';

export default function Blog() {
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    getBlogList().then((response) => {
      setBlogList(response.blogs);
    });
  }, []);

  const blogListJSX = () => {
    return blogList.map((blog) => <Item key={blog._id} blog={blog} />);
  };

  return (
    <>
      <Ad />
      {blogList && blogListJSX()}
    </>
  );
}
