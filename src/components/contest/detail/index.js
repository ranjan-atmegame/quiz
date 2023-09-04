'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { getContestById } from '@/components/home/api';
import Modal from '@/components/bonusModal/Modal';
import { authenticate, updateUser } from '@/api/auth';
import { showRewardAd } from '@/utils';
const Detail = dynamic(() => import('./Detail'));
const Ad = dynamic(() => import('@/components/ad'));
const JoinButton = dynamic(() => import('../joinButton'));

export default function ContestDetail({ auth: { isSignedIn, user } }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [contest, setContest] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

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
      e.preventDefault();
      setDisplayModal(true);
      // return router.push('/');
    }
  };

  // const onModalOk = (e) => {
  //   e.preventDefault();
  //   //
  //   router.push('/');
  // };

  const onModalOk = (e) => {
    e.preventDefault();
    const { user } = authenticate();

    showRewardAd((result) => {
      if (result?.status) {
        updateUser({ coins: user.coins + BONUS_COINS });
      }
      router.push('/');
    });
  };

  const closeBonusModal = (e) => {
    e.preventDefault();
    setDisplayModal(false);
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
        onClick={handleClick}
      />
      <Ad />
      {displayModal && (
        <Modal onClose={closeBonusModal} handleClick={onModalOk} />
      )}
    </>
  );
}
