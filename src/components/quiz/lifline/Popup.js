import Link from 'next/link';
import Image from 'next/image';
import CoinIcon from '@/components/coin';
import { LIFELINE_OPTIONS, LIFELINE_COINS_VALUE } from '@/utils/Constant';
import { IMG_PATH } from '@/config';
import styles from '@/components/submit/playNow.module.css';

export default function Popup({
  lifelineOption,
  hideBuyOption,
  handleLifeLine,
  user,
}) {
  let { name, description, lifeline, image } = LIFELINE_OPTIONS.find(
    (option) => option.lifeline === lifelineOption.selectedLifeline
  );

  return (
    <div className="popup use-coins-free-lifeline">
      <div className="popup-header">
        <div className="quiz-thumb">
          <Image
            src={`${IMG_PATH}/img/${image}`}
            title={`${name} quiz thumbnail`}
            alt={`${name} quiz thumbnail`}
            width={20}
            height={21}
          />
        </div>
        <Link className="close-btn" href="" onClick={hideBuyOption}></Link>
        <h2>Use {name} Lifeline</h2>
        <p className="mb-24 mt-8">{description}</p>
      </div>

      <div className="free-coins-btns">
        <Link
          href=""
          className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
          onClick={(e) => handleLifeLine(e, lifeline, true)}
        >
          Use for Free
        </Link>

        {/* <Link
              href=""
              onClick={(e) => handleLifeLine(e, lifeline, true)}
              className="btn shine"
            >
              Use for Free
            </Link> */}

        {user.coins >= LIFELINE_COINS_VALUE && (
          <>
            <span>OR</span>
            <Link
              href=""
              //   className="btn pulse btn-secondary"
              className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
              onClick={(e) => handleLifeLine(e, lifeline)}
            >
              Use For {`${LIFELINE_COINS_VALUE} `}
              <CoinIcon />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
