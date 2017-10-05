Ext.namespace('eCredit');

Ext.Loader.setConfig({
    enabled	:	true,
    paths	:	{
        eCredit	    : "static/js/app"
        //,"Ext.ux"  	: "static/core/Ext.ux",
        //"source"    : "static/core/lib"
        //      "Validation" : "app/lib"
    }
});

Ext.Loader.setPath('Ext.ux','app/ux');
eCredit.application = null;

Ext.application({
    name: 'eCredit',
    requires: ['Ext.container.Viewport'],
    appFolder: 'static/js/app',
    controllers: [
        'eCredit.controller.main.ControllerTreeMain'
    ],

    launch: function() {
        this.createLayout();
        eCredit.application = this;
    },

    createLayout	:	function(){
        this.menuBar 	 = Ext.create('eCredit.view.main.MenuBar',{cls:'tool-custom'});
        this.footerBar   = Ext.create('eCredit.view.main.FooterBar',{cls:'tool-custom'});
        this.centerPanel = Ext.create('eCredit.view.main.ViewPanelMain',{region:'center'});
        Ext.create('Ext.container.Viewport',{
            layout	:'fit',
            items	:[
                {
                    xtype	:	'panel',
                    border	:	false,
                    layout	:	'border',
                    items	:	[this.centerPanel],
                    tbar	:	this.menuBar,
                    bbar    :   this.footerBar
                }
            ]
        });
    }

});

eCredit.getApplication = function(){
    return eCredit.application;
};