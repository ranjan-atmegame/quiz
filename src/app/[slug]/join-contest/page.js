import dynamic from 'next/dynamic';
const ContestDetail = dynamic(() => import('@/components/contest/detail'));

export default function Page() {
  return <ContestDetail />;
}
