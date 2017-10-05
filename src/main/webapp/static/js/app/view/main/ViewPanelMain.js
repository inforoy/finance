Ext.define('eCredit.view.main.ViewPanelMain',{
	extend:'Ext.panel.Panel',
	alias:'widget.ViewPanelMain',
	layout:'border',
	padding:3,
	border:false,
	initComponent:function(){

		this.navigationMain = Ext.create('eCredit.view.main.ViewTreeMain',{
			title:'Menu Principal',
			region:'west',
			collapsible:true,
			margin:'0 2 0 0',
			width:280

			// MENU LATERAL IZQUIERDO

		});


		this.editorTabPanelMain = Ext.create('Ext.tab.Panel',{
			tabPosition: 'bottom',
			itemId:'editorTabPanelMain',
			action:'principalTab',
			bodyStyle:'background:#EFEFEF',
			region:'center',
			//  layout:'border'
			layout:'fit'

			// CONTENIDO DE LA APLICACION

		});

		this.items=[this.navigationMain, this.editorTabPanelMain];
		this.callParent();

	}

	,addPanel:function(item){
		var cmp = this.editorTabPanelMain.down("[title="+item.title+"]");
		if(!cmp){
			this.editorTabPanelMain.add(item);
			this.editorTabPanelMain.setActiveTab(item);
		}else{
			this.editorTabPanelMain.setActiveTab(cmp);
		}
	}

});

eCredit.getComponent=function(){

};
