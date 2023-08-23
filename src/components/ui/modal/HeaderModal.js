// What kind of problem have you encountered?
import Link from 'next/link';
import ReactDOM from 'react-dom';

const HeaderModal = ({
  onDismiss,
  modalClass,
  children,
  isBody = false,
  bodyClass = '',
}) => {
  const onClose = (e) => {
    e.preventDefault();
    // onDismiss(e, false);
    onDismiss(false);
  };

  const withBody = () => {
    return (
      <>
        <div className="popup-header">
          <Link href="" onClick={onClose} className="close-btn"></Link>
          <h2>Prizes Rank List</h2>
        </div>
        <div className={bodyClass}>{children}</div>
      </>
    );
  };

  const withoutBody = () => (
    <div className="popup-header">
      <Link href="" onClick={onClose} className="close-btn"></Link>

      {children}
    </div>
  );

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div
        className={`popup ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!isBody && withoutBody()}
        {isBody && withBody()}
      </div>
    </>,
    document.querySelector('main')
  );
};

export default HeaderModal;
