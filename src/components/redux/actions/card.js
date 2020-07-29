import { v4 as uuidv4 } from 'uuid';
import {
  FETCH_CARDS,
  REMOVE_SELECTED_CARDS,
  SAVE_CARD_HANDLER,
  SELECT_CARD_HANDLER,
  EDIT_CARD_HANDLER,
} from './types';

export const fetchCards = (fetchedCards) => ({
  type: FETCH_CARDS,
  cards: fetchedCards.data
    .slice(0, 15)
    .map(({ Number, Name, About }) => ({ id: Number, caption: Name, text: About })),
});

export const removeSelectedCards = () => ({
  type: REMOVE_SELECTED_CARDS,
});

export const saveCardHandler = (caption, text) => ({
  type: SAVE_CARD_HANDLER,
  id: uuidv4(),
  caption,
  text,
});

export const selectCardHandler = (cardId) => ({
  type: SELECT_CARD_HANDLER,
  cardId,
});

export const editCardHandler = (cardId, newCaption, newText) => ({
  type: EDIT_CARD_HANDLER,
  cardId,
  newCaption,
  newText,
});
