// Cricket sub-domain
export const CRICKET_SUBDOMAIN = 'cricketguru.atmequiz.com';

export const DEFAULT_SCORE = 0;
export const DEFAULT_COIN = 200;
export const DEFAULT_EXPIRES = 30;

export const JWT = 'jwt';

export const IS_SUBMITTED = 'tq-submitted';
// export const IS_SUBMITTED_EXP = 60 * 24 * 30;
export const IS_SUBMITTED_EXP = 1;
export const COIN_HISTORY = 'coin-history';
export const USER_CONTEST = 'u-contest';
export const CONTEST_FETCH_AT = 'c-fetch';
export const CRICKET_FETCH_AT = 'i-fetch';
export const GENERAL_CONTEST_LIST = 'c-list';
export const CRICKET_CONTEST_LIST = 'i-list';
export const GENERAL_CONTEST = 'C';
export const CRICKET_CONTEST = 'I';
// export const CONTEST_TYPES = [
//   { id: GENERAL_CONTEST, name: 'Contests', slug: '/' },
//   { id: CRICKET_CONTEST, name: 'IPL & Cricket', slug: '/cricket' },
// ];

export const CONTEST_TYPES = [
  { id: GENERAL_CONTEST, image: 'tech.png', name: 'Contests', slug: '/' },
];

export const DEBIT = 0;
export const CREDIT = 1;

export const USER_LOCATION = 'user-location';
export const LOCATION_EXPIRY = 24 * 60 * 60;
// export const QUIZ_TIME = 60;
export const QUIZ_TIME = 300;

// Quiz
export const CORRECT_SCORE = 25;
export const INCORRECT_SCORE = -10;
export const TOTAL_QUESTION = 5;

//Lifeline===
export const LIFELINE_FIFTY_FIFTY = 'fiftyfifty';
export const LIFELINE_FREEZE_TIMER = 'freezetimer';
export const LIFELINE_AUDIENCE_POLL = 'audiencepoll';
export const LIFELINE_FLIP_QUESTION = 'flipquestion';

export const LIFELINE_COINS_VALUE = 20;
export const LIFELINE_OPTIONS = [
  {
    lifelineClass: 'fiftyFifty',
    image: 'fifty-50.svg',
    name: '50:50',
    lifeline: LIFELINE_FIFTY_FIFTY,
    description: `The 50-50 will be paused for 30 seconds to allow more time to answer
  the question.`,
  },
  {
    lifelineClass: 'audiencePoll',
    image: 'audience-poll.svg',
    name: 'Audience Poll',
    lifeline: LIFELINE_AUDIENCE_POLL,
    description: `The audience poll be paused for 30 seconds to allow more time to answer
  the question.`,
  },
  {
    lifelineClass: 'freezeTimer',
    image: 'freeze-timer.svg',
    name: 'Freeze Timer',
    lifeline: LIFELINE_FREEZE_TIMER,
    description: `The freeze timer be paused for 30 seconds to allow more time to answer
  the question.`,
  },
  {
    lifelineClass: 'flipQuestion',
    image: 'flip-question.svg',
    name: 'Flip Question',
    lifeline: LIFELINE_FLIP_QUESTION,
    description: `The flip the question be paused for 30 seconds to allow more time to answer
  the question.`,
  },
];

export const FUN_FACT = [
  `Despite of being banned for 2 years, Chennai Super Kings (CSK) has played most (8) IPL finals.`,
  `After winning 4 titles, Mumbai Indians has become a team with Most IPL Title Wins.`,
  `The team who has tasted the most number of losses in IPL is Chennai Super Kings.`,
  `Leg-spinner Piyush Chawla did not bowl a single no-ball for 386 overs playing for Delhi Daredevils. `,
  `Harbhajan Singh has bowled 1,249 dot balls during the history of IPL tournament.`,
  `Praveen Kumar bowled the first delivery in the IPL played by Sourav Ganguly. `,
  `The first match was played between Royal Challengers Bangalore (RCB) and KKR in 2008.`,
  `Brendon McCullum, New Zealand batsman, hit the first boundary against Zaheer Khan in IPL.`,
  `Both Parthiv Patel & Harbhajan Singh have been sent back to pavilion on zero 13 times.`,
  `Chris Gayle, who has hit most sixes (326) in just 125 matches he played in IPL.`,
  `Amit Mishra, a popular Indian bowler, has taken the most hat-tricks (3) in IPL.`,
  `Virat Kholi has scored a total of 5,412 runs, which makes him the highest run scorer of IPL.`,
  `973 runs of Virat Kohli and 848 runs of David Warner in 2016 contributed to make the most run in a Single Season of IPL. `,
  `Virat Kohli is known to be a player of most double century partnerships In IPL.`,
  `AB de Villiers & Kieron Pollard are the two foreign cricketers who played over 100 Matches for the same franchise.`,
  `K L Rahul is a batsman who smashed the fastest half century in 15 balls in IPL 2014.`,
  `AB de Villiers made a record of taking most catches in One IPL season with 19 catches in IPL 2016.`,
  `The master blaster Sachin Tendulkar is a first Indian who won an orange cap in IPL.`,
  `David Warner holds a record of winning the Orange Cap thrice (most orange caps), in 2015, 2017 and 2019.`,
  `Shaun Marsh, an Australian Cricketer, fetched up the first Orange Cap in IPL tournament.`,
  `Pakistani left-arm medium pacer Sohail Tanvir got the first ever Purple Cap award.`,
  `With 32 wickets, Dwayne Bravo holds the record of taking most wickets in a single IPL season.`,
  `With 170 wickets, Lasith Malinga has become the most wicket taker bowler in the History of IPL.`,
  `Australian Cricketer Brad Hogg still holds the record of being the oldest IPL player. `,
  `Mahendara Singh Dhoni clenches a title of being the most successful captain in the IPL history.`,
];
