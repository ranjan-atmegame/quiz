import './globals.css';
export const metadata = {
  title: 'AtmeQuiz',
  description: 'Play online Quiz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
