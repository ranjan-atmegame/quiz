"use client"
import { useRef, useState, useEffect } from 'react';
import styles from "./lottie.module.css";
export default function Lottie({ src, size="lottie" }) {
  const inputRef = useRef();
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import('lottie-web').then(Lottie => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && inputRef.current) {
      const animation = lottie.loadAnimation({
        container: inputRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: src,
        
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div className={styles[size]} ref={inputRef}></div>;
}