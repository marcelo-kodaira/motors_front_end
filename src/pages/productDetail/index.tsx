import { useNavigate, useParams } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Comments } from '../../components/Comments';
import Footer from '../../components/footer';
import { Header } from '../../components/Header';
import { B1400, H6600, H7500 } from '../../styles/typography';
import {
  AdvertiserInfo,
  Aside,
  Container,
  Gallery,
  Main,
  VehicleDescription,
  VehicleInfo,
} from './styles';

import car from '../../assets/car.png';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Announcement } from '../../contexts/announcement';

export const ProductDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnoucement] = useState<Announcement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/announcements/${id}`).then((resp) => {
        setAnnoucement(resp.data);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Main>
          <div>
            <div className="corverImg">
              <img src={announcement?.images[0].image_url} alt="" />
            </div>
            <VehicleInfo>
              <H6600>{announcement?.title}</H6600>
              <div>
                <div className="spanGroup">
                  <span>{announcement?.year}</span>
                  <span>{announcement?.mileage} KM</span>
                </div>
                <H7500>
                  {Number(announcement?.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </H7500>
              </div>

              <button>comprar</button>
            </VehicleInfo>
            <VehicleDescription>
              <H6600>Descrição</H6600>
              <B1400>{announcement?.description}</B1400>
            </VehicleDescription>
            <Comments />
          </div>
          <Aside>
            <Gallery>
              <H6600>Fotos</H6600>
              <ul>
                {announcement?.images.map((image) => (
                  <li key={image.id}>
                    <img src={image.image_url} alt="" />
                  </li>
                ))}
              </ul>
            </Gallery>
            <AdvertiserInfo>
              <Avatar username={announcement?.user.name || ''} variant="big" />
              <H6600>{announcement?.user.name}</H6600>
              <B1400>{announcement?.user.description}</B1400>
              <button onClick={() => navigate(`/userProfile/${announcement?.user.id}`)}>
                Ver todos anuncios
              </button>
            </AdvertiserInfo>
          </Aside>
        </Main>
        <Comments />
      </Container>
      <Footer />
    </>
  );
};
