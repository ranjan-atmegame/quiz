import Image from 'next/image';
import { IMG_PATH } from '@/config';

export default function Coin({ className = 'small' }) {
  const config = {
    small: {
      width: 16,
      height: 16,
    },
    medium: {
      width: 19,
      height: 19,
    },
  };

  const { width, height } = config[className];
  return (
    <Image
      src={`${IMG_PATH}/img/coin-icon.png`}
      width={width}
      height={height}
      alt="coin"
      title="coin"
    />
  );
}
