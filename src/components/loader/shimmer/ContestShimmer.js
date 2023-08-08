import style from './shimmer.module.css';

export default function ContestLoader() {
  return (
    <div className={style.miniShimeer}>
      <div className={style.miniList}></div>
      <div className={style.miniList}></div>
      <div className={style.miniBox}></div>
    </div>
  );
}
