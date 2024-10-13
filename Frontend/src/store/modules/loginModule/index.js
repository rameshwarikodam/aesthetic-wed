import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default ({ namespaced = true } = {}) => ({
  namespaced,
  state,
  getters,
  actions: actions(),
  mutations,
});
