import { Container } from './style';
import logo from '../../assets/Motors_shop2.png';
import arrow from '../../assets/angle-up.png';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div>
        <img id="logotipo" src={logo} alt="" />
        <p>© 2022 - Todos os direitos reservados.</p>
        <button onClick={handleScrollToTop}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </Container>
  );
};

export default Footer;
