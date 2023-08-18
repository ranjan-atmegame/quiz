'use client';
import QuizImage from '@/components/ui/Image/QuizImage';
import Ad from '@/components/ad';
import { BLOG_LIST } from '../data/blog';

export default function Detail() {
  const blog = BLOG_LIST[0];
  return (
    <>
      <Ad />
      <div>
        <QuizImage name={blog.name} imageName={blog.image} />
        <span>{blog.title}</span>
      </div>
    </>
  );
}
