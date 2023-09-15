'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { getContestById } from '@/components/home/api';
import Modal from '@/components/bonusModal/Modal';
import { authenticate, updateUser } from '@/api/auth';
import { showRewardAd } from '@/utils';
import { BONUS_COINS } from '@/utils/Constant';
import Prize from '@/components/prize';
const Detail = dynamic(() => import('./Detail'));
const Ad = dynamic(() => import('@/components/ad'));
const JoinButton = dynamic(() => import('../joinButton'));
const PrizeAndIssueButton = dynamic(() =>
  import('../joinButton/PrizeAndIssueButton')
);
import Header from '@/components/ui/layout/Header';
import Footer from '@/components/ui/layout/Footer';

export default function ContestDetail() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [contest, setContest] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPrize, setDisplayPrize] = useState(false);

  const contestId = searchParams.get('contestId');
  const { slug } = params;
  const isSignedIn = false;

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
    const { user } = authenticate();
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
      if (result?.status !== 'viewed') {
        rewardAdX();
      }

      updateUser({ coins: user.coins + BONUS_COINS });
      router.push('/');
    });

    // showRewardAd((result) => {
    //   if (result?.status) {
    //     updateUser({ coins: user.coins + BONUS_COINS });
    //   }
    //   router.push('/');
    // });
    // rewardAdX();
  };

  const closeBonusModal = (e) => {
    e.preventDefault();
    setDisplayModal(false);
  };

  const togglePrize = (e) => {
    e.preventDefault();
    setDisplayPrize((prevState) => !prevState);
  };

  if (!contest) {
    return '';
  }

  return (
    <>
      <Header />
      {contest && <Detail contest={contest} />}
      <JoinButton
        isSignedIn={isSignedIn}
        href={`/${contest.slug}-quiz/play-contest?contestId=${contest._id}`}
        onClick={handleClick}
      />
      <Ad />
      <PrizeAndIssueButton showPrizes={togglePrize} />
      {displayPrize && (
        <Prize prizeId={contest.prizeId} onDismiss={togglePrize} />
      )}

      {displayModal && (
        <Modal
          onClose={closeBonusModal}
          handleClick={onModalOk}
          message={`You don't have enough coins to play this contest.`}
        />
      )}
      <Footer />
    </>
  );
}
