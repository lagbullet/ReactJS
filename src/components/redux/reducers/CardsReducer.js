import {
  FETCH_CARDS,
  REMOVE_SELECTED_CARDS,
  SAVE_CARD_HANDLER,
  SELECT_CARD_HANDLER,
  EDIT_CARD_HANDLER,
} from '../actions/types';

const cards = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return action.cards;
    case REMOVE_SELECTED_CARDS:
      return state.filter(({ selected }) => !selected);
    case SAVE_CARD_HANDLER:
      return [
        ...state,
        {
          id: action.id,
          caption: action.caption,
          text: action.text,
        },
      ];
    case SELECT_CARD_HANDLER:
      return state.map((card) => ({
        ...card,
        selected: card.id === action.cardId ? !card.selected : card.selected,
      }));
    case EDIT_CARD_HANDLER:
      return state.map((card) => ({
        ...(card.id === action.cardId
          ? { ...card, caption: action.newCaption, text: action.newText }
          : card),
      }));
    default:
      return state;
  }
};

export default cards;
