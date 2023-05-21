import { Route } from "react-router-dom";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";
function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  cards,
  handleCardClick,
  handleCardLike,
  handleCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-group">
          <button
            className="profile__button profile__button_type_avatar"
            onClick={onEditAvatar}
          ></button>
          <img
            src={currentUser.avatar}
            alt="Фотография профиля"
            className="profile__avatar"
          />
        </div>

        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__button profile__button_type_edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button
          className="profile__button profile__button_type_add"
          type="button"
          aria-label="Довавить фотографию"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="gallery" aria-label="Фотографии">
        <ul className="gallery__list">
          {cards.map(({_id, link, name, likes, owner, }) => {
            return (
              <Card
                key={_id}
                link={link}
                title={name}
                likeLength={likes.length}
                ownerId={owner}
                onCardClick={handleCardClick}
                likes={likes}
                onCardLike={handleCardLike}
                cardId={_id}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
//
export default Main;
