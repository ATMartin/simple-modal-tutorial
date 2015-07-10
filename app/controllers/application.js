import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal: function(target) {
      // "Ember.View" is deprecated and the views hash no longer exists.
      // var modal = Ember.View.views[target];
      var modal = this.get('comp-' + target); 
      modal.send('toggleModal');
    }
  }
});
