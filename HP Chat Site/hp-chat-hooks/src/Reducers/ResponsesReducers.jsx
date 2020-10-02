export const RESPONSES_ACTIONS = {
  ADD: "add",
  UPDATE: "update",
};

function responsesReducer(state, action) {
  switch (action.type) {
    case RESPONSES_ACTIONS.ADD:
      return [
        ...state,
        { key: action.payload.key, response: [action.payload.response] },
      ];
    default:
      return state;
  }
}

export default responsesReducer;
