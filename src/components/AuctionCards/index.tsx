import { IAnnouncement } from '../../mocks/auto-vehicles';
import {
  AuctionArticle,
  AuctionTime,
  AuctionText,
  AuctionFooter,
  AuctionImage,
  AuctionFooterAdvertiser,
} from './style';
import { BsClock, BsArrowRight } from 'react-icons/bs';
import { Avatar } from '../Avatar';
import { B1400, B2500, H6600, H7500 } from '../../styles/typography';

interface IAuctionCardsProps {
  announcement: IAnnouncement;
}

export const AuctionCards = ({ announcement }: IAuctionCardsProps) => {
  return (
    <AuctionArticle>
      <AuctionImage>
        <img src={announcement.image[0]} alt="car" />
        <AuctionText>
          <AuctionTime>
            <BsClock />
            <H7500>01:58:00</H7500>
          </AuctionTime>
          <H6600>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </H6600>

          <B1400>{announcement.description}</B1400>

          <div className="avatar">
            <Avatar username={announcement.user.name} />
            <B2500>{announcement.user.name}</B2500>
          </div>

          <div className="price">
            <div>
              <p>{announcement.year}</p>
              <p>{announcement.mileage}</p>
            </div>
            <H7500>{announcement.price}</H7500>
          </div>
        </AuctionText>
      </AuctionImage>
      {true ? (
        <AuctionFooter>
          <p>Acessar pagina de leilão</p>
          <BsArrowRight />
        </AuctionFooter>
      ) : (
        <AuctionFooterAdvertiser>
          <button>Editar</button>
          <button>Ver Como</button>
        </AuctionFooterAdvertiser>
      )}
    </AuctionArticle>
  );
};
