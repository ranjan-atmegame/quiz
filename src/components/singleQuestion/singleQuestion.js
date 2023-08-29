import Button from '../ui/Button';
import SimilarQuestions from './similarQuestions';
import styles from './singleQuestion.module.css';
import Image from 'next/image';
const SingleQuestion = () => {
  return (
    <div className={styles.card}>
      <h1>Question Answer</h1>
      <p className={styles.subHeading}>
        Some interactive online quiz questions and answers to test your
        knowledge
      </p>
      <div className={styles.cardHeader}>
        <button className={styles.disabled}>
          <Image
            width={16}
            height={16}
            src="/img/leftArrow.svg"
            alt="Previous Question"
          />
          Previous
        </button>
        <button>
          Next{' '}
          <Image
            width={16}
            height={16}
            src="/img/leftArrow.svg"
            alt="Next Question"
            className={styles.nextArrow}
          />
        </button>
      </div>
      <div className={styles.cardBody}>
        <h2>
          Which of the following trains is India’s first certified ISO-9001
          train?
        </h2>
        <ul>
          <li>
            <button>
              <span>1</span>Mumbai-Delhi Shatabdi Express
            </button>
          </li>
          <li>
            <button>
              <span>2</span>Magadha Express
            </button>
          </li>
          <li>
            <button>
              <span>3</span>Bhopal Express
            </button>
          </li>
          <li>
            <button>
              <span>4</span>AP Express
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <h3>#Answer</h3>
        <p>KBhopal Express</p>
      </div>
      <SimilarQuestions />
    </div>
  );
};

export default SingleQuestion;
