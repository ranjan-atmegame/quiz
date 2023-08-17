'use client';
import { quizCard } from './quizCard.module.css';

export default function Card({ children }) {
  return <section className={quizCard}>{children}</section>;
}
