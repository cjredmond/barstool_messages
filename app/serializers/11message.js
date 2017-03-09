import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, requestType){
    payload = { messages: payload};
    return this._super(...arguments);
  }
});
