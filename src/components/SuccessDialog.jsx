import React from 'react';
import styles from './SuccessDialog.module.css';

const SuccessDialog = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.icon}>
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className={styles.title}>Success!</h3>
        <p className={styles.message}>Thank you for your message! I will get back to you soon.</p>
        <button className={styles.closeBtn} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog;