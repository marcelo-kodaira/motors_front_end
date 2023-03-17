import { useLocation } from "react-router-dom";
import { Announcement } from "../../contexts/announcement";
import { AuctionCards } from "../AuctionCards";
import Card from "../cards";

import { ShowCaseStyled } from "./styles";

interface ShowCaseProps {
  listAnnouncements: Announcement[];
}

export const ShowCase = ({ listAnnouncements }: ShowCaseProps) => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/userProfile") && (
        <ShowCaseStyled>
          <div>
            <h2 id="auctions">Leilão</h2>
          </div>
          <div>
            {listAnnouncements.length > 0 &&
              listAnnouncements.map((announcement, index) => {
                return <AuctionCards key={index} announcement={announcement} />;
              })}
            {listAnnouncements.length == 0 && (
              <div>
                <p>Você ainda não criou nenhum anuncio nesta seção...</p>
              </div>
            )}
          </div>
        </ShowCaseStyled>
      )}
      <ShowCaseStyled>
        <div>
          <h2 id="cars">Carros</h2>
        </div>
        <div>
          {listAnnouncements.length > 0 &&
            listAnnouncements.map((announcement, index) => {
              if (announcement.is_car) {
                return <Card key={index} announcement={announcement} />;
              }
            })}
          {listAnnouncements.length == 0 && (
            <div>
              <p>Você ainda não criou nenhum anuncio nesta seção...</p>
            </div>
          )}
        </div>
      </ShowCaseStyled>
      <ShowCaseStyled>
        <div>
          <h2 id="motorbikes">Motos</h2>
        </div>
        <div>
          {listAnnouncements.length > 0 &&
            listAnnouncements.map((announcement, index) => {
              if (!announcement.is_car) {
                return <Card key={index} announcement={announcement} />;
              }
            })}
          {listAnnouncements.length == 0 && (
            <div>
              <p>Você ainda não criou nenhum anuncio nesta seção...</p>
            </div>
          )}
        </div>
      </ShowCaseStyled>
    </>
  );
};
