Ext.define('xzdwq.router.Router', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.router',
  views: 'xzdwq.view.Viewport',
  routes: {
    'home': {
      action: 'onHome'
    }
  },
  onHome: function() {
    this.addContentToCenterRegion(
      { xtype: 'home' }
    );
  },
  addContentToCenterRegion: function( config ) {
    var vp = Ext.getCmp('vp');
    var view = vp.layout.centerRegion;
        cmp = vp.down( '[xtype=' + config.xtype + ']' )
    if( !cmp ) {
        vp.removeAll();
        cmp = vp.add( config );
    }
    return cmp;
  }
});