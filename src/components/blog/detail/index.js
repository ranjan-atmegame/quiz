'use client';
import QuizImage from '@/components/ui/Image/QuizImage';
import Ad from '@/components/ad';
import Image from 'next/image';
import { BLOG_LIST } from '../data/blog';
import styles from './blogDetails.module.css';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import SingleQuestion from '@/components/singleQuestion/singleQuestion';
import EmptySingleQuestion from '@/components/singleQuestion/emptySingleQuestion';
import Toast from '@/components/toast/toast';

export default function Detail() {
  const blog = BLOG_LIST[0];
  return (
    <>
      <Ad />
      {/* <SingleQuestion /> */}
      <EmptySingleQuestion />
      <Toast />
      <div className={styles.blogDetails}>
        <div className={styles.imgBox}>
          <QuizImage
            width="370"
            height="250"
            name={blog.name}
            imageName={blog.image}
          />
        </div>
        <h1>{blog.title}</h1>
        <div className={styles.views}>
          <div className={styles.smTest}>
            <Image
              src="/img/view.svg"
              width="16"
              height="16"
              alt="Search"
              title="Search"
              className={styles.spacer}
            />
            <span>125,908 views</span>
          </div>
          <div className={styles.social}>
            Share With:
            <ul>
              <li>
                <Link
                  href="https://www.facebook.com/Atmegame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={styles.socialIcon}>
                    {' '}
                    <Icon
                      width={12}
                      height={18}
                      src="https://www.atmequiz.com/img/facebook-white-icon.svg"
                      title="Facebook"
                    />{' '}
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/ATMEGAME"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={styles.socialIcon}>
                    {' '}
                    <Icon
                      width={18}
                      height={16}
                      src="https://www.atmequiz.com/img/tw-white-icon.svg"
                      title="Twitter"
                    />{' '}
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/atmegame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={styles.socialIcon}>
                    {' '}
                    <Icon
                      width={18}
                      height={18}
                      src="https://www.atmequiz.com/img/instagram-white-icon.svg"
                      title="Instagram"
                    />{' '}
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://in.pinterest.com/atmegame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={styles.socialIcon}>
                    {' '}
                    <Icon
                      width={16}
                      height={20}
                      src="https://www.atmequiz.com/img/pin-white-icon.svg"
                      title="Pinterst"
                    />{' '}
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Winner annoSummary: Free online games have captured a huge fan base
          from all across the world. Gamers from different age groups love
          playing free games from their home or any other convenient place. When
          you have enough time to spend and don’t want to go outside to beat the
          boring hours, it’s wise to choose online games to have fun without
          leaving your place at home. Irrespective of the fact that game
          addiction is not good for the health, there are many exciting benefits
          available for those who play them in limited time period. Yes, you
          would be able to enjoy the real excitement and fun by just sitting at
          the comfort of your home.uncement @ 1:30 PM
        </p>
        <h3>Earlier People Found Difficulty in Spotting Free Games</h3>
        <p>
          Several years ago, it was not possible to play free games on your PC
          or any other device. However, the introduction of the greatest flash
          games online has made it relatively simpler for the gamers to get this
          fun without paying single money from their pocket. Well, most of these
          great games are available at free of cost.
        </p>
      </div>
    </>
  );
}
