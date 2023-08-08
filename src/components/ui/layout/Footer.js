// import Link from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { IMG_PATH } from '@/config';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.madeWithLove}>
        <div className={styles.logo}>
          <Link className={styles.atmequizLogo} href="/">
            <Image
              src={`${IMG_PATH}/logo.png`}
              width={133}
              height={34}
              alt="Play Online Quiz Contest win Coin - AtmeQuiz"
              title="Play Online Quiz Contest win Coin - AtmeQuiz"
            />
          </Link>
        </div>
        Made with{' '}
        <Image
          width={12}
          height={11}
          src={`${IMG_PATH}/img/heart-icon.svg`}
          title="Heart"
          alt="Heart"
        />{' '}
        in India{' '}
        <Image
          width={14}
          height={9}
          src={`${IMG_PATH}/img/india-flag-icon.svg`}
          title="India Flag"
          alt="India Flag"
        />
      </div>
    </>
  );
}
