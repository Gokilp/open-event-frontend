import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName    : 'footer',
  classNames : ['ui', 'inverted', 'vertical', 'footer', 'segment'],

  didInsertElement() {
    this.$('.ui.dropdown').dropdown({
      forceSelection: false
    });
  }
});
