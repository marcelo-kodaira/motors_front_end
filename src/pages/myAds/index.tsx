import { useContext, useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ModalCreateAnnouncement } from "../../components/ModalCreateAnnouncement";
import { ModalSuccess } from "../../components/ModalSuccess";
import { ShowCase } from "../../components/ShowCase";
import { AuthContext } from "../../contexts/auth";
import { B1400 as Description, H6600 } from "../../styles/typography";
import { Container, InfoAdvertiser, Standart } from "./styles";

export const MyAds = () => {
  const { user } = useContext(AuthContext);

  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Standart>
          <InfoAdvertiser>
            <Avatar username={user?.name || ""} variant="big" />
            <div>
              <H6600>{user?.name}</H6600>
              <span>Anunciante</span>
            </div>
            <Description>{user?.description}</Description>
            <ModalCreateAnnouncement
              setOpenModalSuccess={setOpenModalSuccess}
            />
          </InfoAdvertiser>
        </Standart>
        {user && <ShowCase listAnnouncements={user.announcements} />}
      </Main>

      <Footer />
      {openModalSuccess && (
        <ModalSuccess
          openModal={openModalSuccess}
          setOpenModal={setOpenModalSuccess}
        />
      )}
    </Container>
  );
};
