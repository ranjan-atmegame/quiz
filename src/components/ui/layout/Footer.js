'use client';
// import Link from 'next/link';
import Image from 'next/image';
import { IMG_PATH, S3_IMAGE_PATH } from '@/config';
import { getCookies } from '@/utils/Cookies';
import styles from './footer.module.css';
import { USER_LOCATION } from '@/utils/Constant';
import { useEffect, useState } from 'react';
import { getLocation } from '@/utils/Location';

export default function Footer({ displayLogo = false }) {
  const [countryCode, setCountryCode] = useState();

  useEffect(() => {
    getLocation().then(({ countryCode }) => setCountryCode(countryCode));
  }, []);

  return (
    <>
      <div className={styles.madeWithLove}>
        {displayLogo && (
          <div className={styles.logo}>
            {/* <Link className={styles.atmequizLogo} href="/" prefetch={false}> */}
            <Image
              src={`${S3_IMAGE_PATH}/logo.png`}
              width={133}
              height={34}
              alt="Play Online Quiz Contest win Coin - AtmeQuiz"
              title="Play Online Quiz Contest win Coin - AtmeQuiz"
              // priority={true}
            />
            {/* </Link> */}
          </div>
        )}

        {countryCode === 'IN' && (
          <>
            Made with{' '}
            <Image
              width={12}
              height={11}
              src={`${S3_IMAGE_PATH}/heart-icon.svg`}
              title="Heart"
              alt="Heart"
              // priority={true}
            />{' '}
            in India{' '}
            <Image
              width={14}
              height={9}
              src={`${S3_IMAGE_PATH}/india-flag-icon.svg`}
              title="India Flag"
              alt="India Flag"
              // priority={true}
            />
          </>
        )}
      </div>
    </>
  );
}
