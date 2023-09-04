import Link from 'next/link';
import Image from 'next/image';
import CoinIcon from '@/components/coin';
import { LIFELINE_OPTIONS, LIFELINE_COINS_VALUE } from '@/utils/Constant';
import { IMG_PATH } from '@/config';
import styles from './popup.module.css';

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
    <div className={styles.report}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.lifelineIcon}>
            <Image
              src={`/img/${image}`}
              title={`${name} quiz thumbnail`}
              alt={`${name} quiz thumbnail`}
              width={36}
              height={36}
            />
          </div>
          <Link className={styles.close} href="" onClick={hideBuyOption}></Link>
          <h2>Use {name} Lifeline</h2>
          <p>{description}</p>
          <div className={styles.lifeLineBtns}>
            <Link
              href=""
              className={`${styles.btn}`}
              onClick={(e) => handleLifeLine(e, lifeline, true)}
            >
              Use for Free
            </Link>

            {user.coins >= LIFELINE_COINS_VALUE && (
              <>
                <span className={styles.or}>OR</span>
                <Link
                  href=""
                  //   className="btn pulse btn-secondary"
                  className={`${styles.btn} ${styles.blue}`}
                  onClick={(e) => handleLifeLine(e, lifeline)}
                >
                  Use For {`${LIFELINE_COINS_VALUE} `}
                  <CoinIcon />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
