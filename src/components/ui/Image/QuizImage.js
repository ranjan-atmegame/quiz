import Image from 'next/image';
import { IMG_PATH } from '@/config';

export default function QuizImage({
  imageName,
  name,
  width = 54,
  height = 58,
}) {
  return (
    <Image
      src={`${IMG_PATH}/img/${imageName}`}
      alt={name}
      title={name}
      width={width}
      height={height}
      priority={true}
    />
  );
}
