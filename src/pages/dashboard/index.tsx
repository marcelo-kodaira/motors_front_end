import { useContext, useEffect } from "react";
import Footer from "../../components/footer";

import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ShowCase } from "../../components/ShowCase";
import { Standard } from "../../components/Standard";
import { AnnouncementContext } from "../../contexts/announcement";

const Dashboard = () => {
  const { announcements } = useContext(AnnouncementContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Standard />
        <ShowCase listAnnouncements={announcements} />
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
