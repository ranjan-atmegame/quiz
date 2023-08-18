'use client';
import { useState, useEffect } from 'react';
import Ad from '../ad';
import { BLOG_LIST } from './data/blog';
import Item from './Item';

export default function Blog() {
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    setBlogList(BLOG_LIST);
  }, []);

  const blogListJSX = () => {
    return blogList.map((blog) => <Item key={blog.id} blog={blog} />);
  };

  return (
    <>
      <Ad />
      {blogList && blogListJSX()}
    </>
  );
}
