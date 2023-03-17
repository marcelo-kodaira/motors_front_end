import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Announcement } from "../../contexts/announcement";
import { AuthContext } from "../../contexts/auth";
import { Avatar } from "../Avatar";
import { ModalDeleteAnnouncement } from "../ModalDeleteAnnouncement";
import { ModalEditAnnouncement } from "../ModalEditAnnouncement";
import { Container, Details, Image, Infos } from "./style";

interface CardProps {
  announcement: Announcement;
}

const Card = ({ announcement }: CardProps) => {
  const { user } = useContext(AuthContext);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const hasPermitionEdit =
    location.pathname === "/myAds" && user && announcement.user.id === user.id;

  return (
    <Container>
      <Image
        onClick={() => navigate(`/product/${announcement.id}`)}
        is_published={announcement.is_published}
      >
        <img src={announcement.images[0].image_url} />
        {(location.pathname.includes("/userProfile") || hasPermitionEdit) && (
          <span>{announcement.is_published ? "Ativo" : "Inativo"}</span>
        )}
      </Image>
      <Infos onClick={() => navigate(`/product/${announcement.id}`)}>
        <h2>{announcement.title}</h2>
        <p>
          {announcement.description.length > 81
            ? announcement.description.slice(0, 80) + "..."
            : announcement.description}
        </p>
        <div>
          <Avatar username={announcement.user.name} />
          <p id="advertiser">{announcement.user.name}</p>
        </div>
      </Infos>
      <Details onClick={() => navigate(`/product/${announcement.id}`)}>
        <div>
          <span id="mileage">{announcement.mileage} KM</span>
          <span id="year">{announcement.year}</span>
        </div>
        <span id="price">
          {Number(announcement.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Details>
      {hasPermitionEdit && (
        <div className="groupButton">
          <ModalEditAnnouncement
            announcement={announcement}
            setOpenModalDelete={setOpenModalDelete}
          />
          <button onClick={() => navigate(`/product/${announcement.id}`)}>
            Ver como
          </button>
        </div>
      )}
      {openModalDelete && (
        <ModalDeleteAnnouncement
          openModal={openModalDelete}
          setOpenModal={setOpenModalDelete}
          id={announcement.id}
        />
      )}
    </Container>
  );
};

export default Card;
