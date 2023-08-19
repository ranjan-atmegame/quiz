import { useState } from 'react';
import Link from 'next/link';
// import {
//   getContest,
//   setContest,
//   getUser,
//   // updateUser,
//   updateUserCoins,
//   showRewardAd,
// } from "../utils";
import { getLifeLine } from '../api';
import {
  LIFELINE_OPTIONS,
  LIFELINE_FIFTY_FIFTY,
  LIFELINE_FREEZE_TIMER,
  LIFELINE_AUDIENCE_POLL,
  LIFELINE_FLIP_QUESTION,
  LIFELINE_COINS_VALUE,
  DEBIT,
} from '@/utils/Constant';

export default function Lifeline({ props }) {
  const [state, setState] = useState({});
}

class Lifeline extends Component {
  state = {
    showLifeLine: true,
    buyOption: false,
    selectedLifeline: null,
    lifelineImage: '',
  };

  canUseLifeline = (lifeline) => {
    if (this.props.usedLifeline.indexOf(lifeline) === -1) {
      return true;
    }
    return false;
  };

  findLifelineByName = (name) =>
    LIFELINE_OPTIONS.find(({ lifeline }) => lifeline === name);

  updateState = async (lifeline) => {
    const { questions, questionNumber } = getContest();
    const quizQuestion = questions[questionNumber - 1];
    let { question } = await getLifeLine(quizQuestion._id, lifeline);
    this.setLifelineAnswer(question, lifeline);
    setContest({ usedLifeline: [...this.props.usedLifeline, lifeline] });
  };

  handleLifeLine = async (e, lifeline, isFree = false) => {
    e.preventDefault();

    if (!this.canUseLifeline(lifeline)) {
      console.log('LOG: already used.');
      return false;
    }

    if (isFree) {
      return showRewardAd((result) => {
        console.log(result);
        if (result?.status) {
          return this.updateState(lifeline);
        }
      });
    }

    const { user } = getUser();
    const { contest } = this.props;
    const { name } = this.findLifelineByName(lifeline);

    await updateUserCoins(user._id, {
      name: contest.name,
      desc: `${name} lifeline used`,
      coins: LIFELINE_COINS_VALUE,
      transaction: DEBIT,
      image: contest.quizImage,
    });

    return this.updateState(lifeline);
  };

  setLifelineAnswer = (question, lifeline) => {
    let lifeLineAnswer = null;
    let answer = null;
    switch (lifeline) {
      case LIFELINE_FIFTY_FIFTY:
        answer = question.answerOptions.map((answer) => answer._id);
        this.props.updateLifelineState({ lifeline, lifelineAnswer: answer });
        break;
      case LIFELINE_AUDIENCE_POLL:
        answer = question.answerOptions.map((answer) => {
          return { _id: answer._id, percentage: answer.audiencePoll };
        });
        this.props.updateLifelineState({ lifeline, lifelineAnswer: answer });
        break;
      case LIFELINE_FREEZE_TIMER:
        this.props.updateLifelineState({ lifeline, shouldStopTimer: true });
        break;
      case LIFELINE_FLIP_QUESTION:
        this.props.updateLifelineState({ lifeline, lifelineAnswer: question });
        break;
      default:
        lifeLineAnswer = null;
        break;
    }

    return lifeLineAnswer;
  };

  handleLifelinePopup = (e) => {
    e.preventDefault();
    let showLifeLine = this.state.showLifeLine;
    this.setState({ showLifeLine: !showLifeLine });
  };

  getLifelineOptionClass = (lifeline) => {
    const { usedLifeline } = this.props;
    if (usedLifeline.length && usedLifeline.indexOf(lifeline) !== -1) {
      return 'used';
    }

    return '';
  };

  showBuyOption = (e, lifeline) => {
    e.preventDefault();
    if (!this.canUseLifeline(lifeline)) {
      return false;
    }
    this.setState({ buyOption: true, selectedLifeline: lifeline });
  };

  hideBuyOption = (e) => {
    e.preventDefault();
    this.setState({ buyOption: false });
  };

  lifeLine = () => {
    return LIFELINE_OPTIONS.map(({ lifelineClass, name, lifeline }) => {
      let isUsedLifeline = this.getLifelineOptionClass(lifeline);
      return (
        <li
          key={lifeline}
          className={isUsedLifeline}
          // onClick={() => this.handleLifeLine(lifeline)}
          onClick={(e) => this.showBuyOption(e, lifeline)}
        >
          <span className={lifelineClass}></span>
          <span>{name}</span>
        </li>
      );
    });
  };

  lifeLineOptions = () => {
    const { showLifeLine } = this.state;

    return (
      <div className="popup lifeline-popup">
        <div className="popup-header">
          <div
            className="lifeline"
            onClick={(e) => this.handleLifelinePopup(e)}
          >
            LIFELINES
          </div>
          <ul>{showLifeLine && this.lifeLine()}</ul>
        </div>
      </div>
    );
  };

  byCoinsOrFree = () => {
    let { name, description, lifeline, image } = LIFELINE_OPTIONS.find(
      (option) => option.lifeline === this.state.selectedLifeline
    );

    const { user } = getUser();

    return (
      <div className="popup use-coins-free-lifeline">
        <div className="popup-header">
          <div className="quiz-thumb">
            <img src={`/img/${image}`} alt="Quiz thumbnial" />
          </div>
          <Link
            className="close-btn"
            to=""
            onClick={(e) => this.hideBuyOption(e)}
          ></Link>
          <h2>Use {name} Lifeline</h2>
          <p className="mb-24 mt-8">{description}</p>
        </div>

        <div className="free-coins-btns">
          <Link
            to=""
            onClick={(e) => this.handleLifeLine(e, lifeline, true)}
            className="btn shine"
          >
            Use for Free
          </Link>

          {user.coins >= LIFELINE_COINS_VALUE && (
            <React.Fragment>
              <span>OR</span>
              <Link
                to=""
                className="btn pulse btn-secondary"
                onClick={(e) => this.handleLifeLine(e, lifeline)}
              >
                Use For {`${LIFELINE_COINS_VALUE} `}
                <img
                  src="/img/coin-icon.png"
                  className="ml-8"
                  width="18"
                  alt="coin"
                />
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { buyOption } = this.state;
    return (
      <React.Fragment>
        {this.lifeLineOptions()}
        {buyOption && this.byCoinsOrFree()}
      </React.Fragment>
    );
  }
}
