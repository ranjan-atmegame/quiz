import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import QuizImage from '@/components/ui/Image/QuizImage';
import styles from './blogDetails.module.css';

export default function Item({ blog }) {
  return (
    <div className={styles.blogDetails}>
      <div className={styles.imgBox}>
        <QuizImage
          width="370"
          height="250"
          name={blog.title}
          imageName={blog.imageLarge}
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

          <span>{`Author: ${blog.author.name}`}</span>
        </div>
        <div className={styles.social}>
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
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
