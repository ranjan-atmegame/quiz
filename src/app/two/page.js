import dynamic from 'next/dynamic';
import Ad from '@/components/ad';
import TwoQuestion from './TwoQuestion';
import QuizRules from '@/components/rule';
import LoginOption from '@/components/start/LoginOptions';

export default function Page() {
  return (
    <>
      <Ad />
      <TwoQuestion />
      <LoginOption />
      <QuizRules />
    </>
  );
}
