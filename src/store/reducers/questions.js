import { FETCH_QUESTIONS, POST_QUESTION, FETCH_QUESTION } from "../types";

const initialState = {
  questions: [],
  question: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case FETCH_QUESTION:
      return {
        ...state,
        question: action.payload
      };
    case POST_QUESTION:
      return {
        ...state,
        question: action.payload
      };
    default:
      return state;
  }
};
