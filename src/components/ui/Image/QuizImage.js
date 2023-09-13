import Image from 'next/image';
import { IMG_PATH } from '@/config';

export default function QuizImage({
  imageName,
  name,
  width = 60,
  height = 60,
}) {
  const imagePath = `/img/${imageName}`.replace('.png', '.svg');
  return (
    <Image
      // src={`${IMG_PATH}/img/${imageName}`}
      src={imagePath}
      alt={`Play ${name} Online Quiz`}
      title={`Play ${name} Online Quiz`}
      width={width}
      height={height}
      priority={true}
    />
  );
}
