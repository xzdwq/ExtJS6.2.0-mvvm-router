Ext.define('xzdwq.view.Viewport', {
  extend:'Ext.container.Viewport',
  id: 'vp',
  layout: 'border',
  padding: 5,
  requires: [
    'xzdwq.router.Router',
    'xzdwq.view.home.Home'
  ],
  controller: 'router',
  items: [
    { }
  ]
});