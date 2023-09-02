'use client';
import Ad from '@/components/ad';
import QuizRules from '@/components/rule';
import Play from './Play';

export default function Submit({ auth: { user } }) {
  return (
    <>
      <Play user={user} />
      <Ad />
      <QuizRules />
    </>
  );
}
