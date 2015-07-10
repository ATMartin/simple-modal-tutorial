import Ember from 'ember';
import layout from '../templates/components/simple-modal';

export default Ember.Component.extend({
  expose: function() {
    var my_controller = this.get('targetObject');
    var exposedName = "comp-" + this.get('id');
    my_controller.set(exposedName, this);
  }.on('init'), 
  actions: {
    toggleModal: function() {
      this.toggleProperty('enabled');
    }
  },
  layout: layout
});
