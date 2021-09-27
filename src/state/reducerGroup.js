import otvReducer from './reducers';

/**
 * this method should combine multiple reducers but for this app we are using only one
 */
export default ({ auth, product }, action) => ({
  otv: otvReducer(auth, action),
});
