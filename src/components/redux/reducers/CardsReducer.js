import {
  FETCH_CARDS,
  REMOVE_SELECTED_CARDS,
  SAVE_CARD_HANDLER,
  SELECT_CARD_HANDLER,
  EDIT_CARD_HANDLER,
  TOGGLE_READ_ONLY,
} from '../actions/types';

const cardsReducer = (state = { cards: [], readOnly: false }, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.cards };
    case REMOVE_SELECTED_CARDS:
      return {
        ...state,
        cards: state.cards.filter(({ selected }) => !selected),
      };
    case SAVE_CARD_HANDLER:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: action.id,
            caption: action.caption,
            text: action.text,
          },
        ],
      };
    case SELECT_CARD_HANDLER:
      return {
        ...state,
        cards: state.cards.map((card) => ({
          ...card,
          selected: card.id === action.cardId ? !card.selected : card.selected,
        })),
      };
    case EDIT_CARD_HANDLER:
      return {
        ...state,
        cards: state.cards.map((card) => ({
          ...(card.id === action.cardId
            ? { ...card, caption: action.newCaption, text: action.newText }
            : card),
        })),
      };
    case TOGGLE_READ_ONLY:
      return {
        ...state,
        readOnly: !state.readOnly,
      };
    default:
      return state;
  }
};

export default cardsReducer;
