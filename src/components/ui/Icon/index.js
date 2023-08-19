import Image from 'next/image';

export default function Icon({
  src,
  title,
  alt,
  width,
  height,
  iconClass = '',
}) {
  width = width ? width : 24;
  height = height ? height : 14;
  alt = alt ? alt : title;

  return (
    <Image
      className={iconClass}
      width={width}
      height={height}
      src={src}
      title={title}
      alt={alt}
    />
  );
}
