import Image from 'next/image';
import { S3_IMAGE_THUMB } from '@/config';

export default function QuizImage({
  imageName,
  name,
  width = 60,
  height = 60,
}) {
  const imagePath = `${S3_IMAGE_THUMB}/${imageName}`.replace('.png', '.svg');
  console.log(imagePath);
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
