'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { getContestById } from '@/components/home/api';
const Detail = dynamic(() => import('./Detail'));
const Ad = dynamic(() => import('@/components/ad'));
const JoinButton = dynamic(() => import('../joinButton'));

export default function ContestDetail({ auth: { isSignedIn, user } }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [contest, setContest] = useState(null);

  const contestId = searchParams.get('contestId');
  const { slug } = params;

  useEffect(() => {
    if (contestId && slug) {
      getContestById(slug, contestId).then((contest) => {
        if (!contest) {
          return router.push('/');
        }
        setContest(contest);
      });
    }
  }, [contestId, slug]);

  const handleClick = (e) => {
    if (user.coins < contest.entryCoins) {
      alert(`You don't have coin to play.`);
      e.preventDefault();
      return router.push('/');
    }
  };

  if (!contest) {
    return '';
  }

  return (
    <>
      {contest && <Detail contest={contest} />}
      <JoinButton
        isSignedIn={isSignedIn}
        href={`/${contest.slug}-quiz/play-contest?contestId=${contest._id}`}
        Click={handleClick}
      />
      <Ad />
    </>
  );
}
