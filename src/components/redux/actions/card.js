import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
  FETCH_CARDS,
  REMOVE_SELECTED_CARDS,
  SAVE_CARD_HANDLER,
  SELECT_CARD_HANDLER,
  EDIT_CARD_HANDLER,
  TOGGLE_READ_ONLY,
} from './types';

export const fetchCards = () => (dispatch) => {
  axios
    .get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then((response) =>
      dispatch({
        type: FETCH_CARDS,
        cards: response.data
          .slice(0, 15)
          .map(({ Number, Name, About }) => ({ id: Number, caption: Name, text: About })),
      })
    );
};

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

export const toggleReadOnly = () => ({
  type: TOGGLE_READ_ONLY,
});
