import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ShowCase } from "../../components/ShowCase";
import { Announcement, AnnouncementContext } from "../../contexts/announcement";
import api from "../../services/api";
import { H6600, B1400 as Description } from "../../styles/typography";
import { Banner, Container } from "./styles";

export const UserProfile = () => {
  const { announcements } = useContext(AnnouncementContext);
  const [userAnnouncements, setUserAnnouncements] = useState<Announcement[]>(
    []
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api
        .get(`/announcements/user/${id}`)
        .then((resp) => setUserAnnouncements(resp.data));
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Banner>
            <Avatar
              username={userAnnouncements[0]?.user.name || ""}
              variant="big"
            />
            <div>
              <H6600>{userAnnouncements[0]?.user.name}</H6600>
              <span>Anunciante</span>
            </div>
            <Description>{userAnnouncements[0]?.user.description}</Description>
          </Banner>
          {announcements.length > 0 && (
            <ShowCase listAnnouncements={userAnnouncements} />
          )}
        </Container>
      </Main>
      <Footer />
    </>
  );
};
