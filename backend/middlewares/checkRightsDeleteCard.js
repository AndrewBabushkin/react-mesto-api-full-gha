const Card = require('../models/card');
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');
const NoRightsError = require('../errors/NoRightsError');

const checkRightsDeleteCard = (req, res, next) => {
  const userId = req.user._id;

  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        next(new DocumentNotFoundError('Такой карточки не существует.'));
      }
      const ownerId = card.owner.toString();
      // console.log(userId);
      // console.log(ownerId);
      if (ownerId !== userId) {
        next(new NoRightsError('У вас нет прав удалить данную карточку.'));
      }
      next();
    })
    .catch(next);
};

module.exports = checkRightsDeleteCard;
