import style from './shimmer.module.css';

export default function TabShimmer({ numberOfLine = 2 }) {
  return (
    <div className={style.miniShimeer}>
      <div className={style.miniBox}></div>
    </div>
  );
}
