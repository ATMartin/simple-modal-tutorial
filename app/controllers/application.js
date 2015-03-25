import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal: function(target) {
      var modal = Ember.View.views[target];
      modal.send('toggleModal');
    }
  }
});
