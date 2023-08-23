'use client';
// import moment from 'moment';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
import CoinIcon from '@/components/coin';
import { formatNumber } from '@/utils';
// import { fetchUserTransactions } from '@/api';
// import UserContext from '@/context/user';
import QuizImage from '../ui/Image/QuizImage';
// import Loader from '@/components/loader/shimmer/MiniShimmer';

export default function CoinHistory() {
  //   const router = useRouter();
  //   const { token, isSignedIn } = useContext(UserContext);
  //   const [transactions, setTransactions] = useState(null);

  const isSignedIn = false;

  //   useEffect(() => {
  //     if (!isSignedIn) {
  //       return router.push('/login');
  //     }
  //     fetchUserTransactions(token)
  //       .then(({ transactions }) => setTransactions(transactions))
  //       .catch((error) => {
  //         console.log(error);
  //         setTransactions([]);
  //       });
  //   }, [isSignedIn, token]);

  // const showHistory = () => {
  //   return transactions.map(
  //     ({ _id, name, desc, coins, transaction, image, date }) => {
  //       let tranClass = transaction
  //         ? 'history-bedge earned'
  //         : 'history-bedge paid';

  //       image = image ? image : 'icon.png';

  //       return (
  //         <div key={_id} className="history-list">
  //           <div className="quiz-thumb">
  //             <QuizImage name={name} imageName={image} />
  //           </div>
  //           <div className="quiz-name-date">
  //             <h4>{name}</h4>
  //             <h5>{desc}</h5>
  //             <span className={tranClass}>
  //               {transaction ? 'Earned' : 'Paid'}
  //             </span>
  //             <span> {moment(date).format('MMMM Do YYYY')}</span>
  //           </div>
  //           <div className="earned-paid-coins">
  //             <CoinIcon />
  //             {` ${formatNumber(coins)}`}
  //           </div>
  //         </div>
  //       );
  //     }
  //   );
  // };

  const showStaticHistory = () => {
    return (
      <div key={1} className="history-list">
        <div className="quiz-thumb">
          <QuizImage name={'tech'} imageName={'tech.png'} />
        </div>
        <div className="quiz-name-date">
          <h4>{'Tech'}</h4>
          <h5>{'Tech Contest'}</h5>
          <span className={'history-bedge paid'}>{'Paid'}</span>
          {/* <span> {moment(date).format('MMMM Do YYYY')}</span> */}
        </div>
        <div className="earned-paid-coins">
          <CoinIcon />
          10
        </div>
      </div>
    );
  };

  return (
    <section>
      <h3>Coin History</h3>

      {showStaticHistory()}
      {/* {transactions ? showHistory() : <Loader />} */}
    </section>
  );
}
