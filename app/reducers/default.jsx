let initialState = {
  test: []
}
export default (state=initialState, action) => {
  switch(action.type) {
  case 'DEFAULT':
    return action.default;
  }
  return state;
};