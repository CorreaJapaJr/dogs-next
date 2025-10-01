import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src={'/dogs-footer.svg'}
        alt='footer'
        width={28}
        height={22}
      />
      <p>Apaji, alguns dos direitos reservados</p>
    </footer>
  );
};

export default Footer;
