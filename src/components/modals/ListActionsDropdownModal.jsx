import styles from "@/styles/dropdownModal.module.scss";

export default function ListActionsDropdownModal({ title, isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.title}>{title}</div>
            </div>

            <div className={styles.close} onClick={() => toggleModal()}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3.33325 16.6668L16.6666 3.3335" stroke="#070F21" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16.6666 16.6668L3.33325 3.3335" stroke="#070F21" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          <div className={styles.body}>
            <ul>
              <li>Move all cards in this list</li>
              <li>Archive all cards in this list</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
