import Image from 'next/image';
import { IMG_PATH } from '@/config';

export default function QuizImage({
  imageName,
  name,
  width = 70,
  height = 70,
}) {
  return (
    <Image
      src={`${IMG_PATH}/img/${imageName}`}
      alt={`Play ${name} Online Quiz`}
      title={`Play ${name} Online Quiz`}
      width={width}
      height={height}
      priority={true}
    />
  );
}
