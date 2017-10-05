Ext.define('eCredit.view.main.FooterBar',{
    alias:'widget.FooterBar',
    extend:'Ext.toolbar.Toolbar',
//    layout: {
//        pack: 'center',
//        type: 'hbox'
//    },
    initComponent:function(){
        this.items = [
            '-',{
                xtype:'tbtext',
                cls:'text-toolbar'

            },'-',
            '->','-',
            {
                xtype: 'tbtext',
                cls:'text-toolbar',
                listeners: {
                    afterrender: function (field) {
                        Ext.Ajax.request({
                            method:'GET',
                            url:'getAttributesToSession.htm',
                            success:function(response){
                                response = Ext.decode(response.responseText);
                                if(response.success){
                                    field.setText('AGENCIA: '+response.descriptionAgency);
                                    Ext.ComponentQuery.query('FooterBar tbtext')[0].setText('USUARIO: '+response.username+' | '+'ROL: '+response.descriptionRole);
                                }
                                else {
                                    this.messageAlert("ERROR", response.mensaje,Ext.Msg.ERROR);
                                }
                            },
                            failure:function(){
                                console.log("Error Inesperado en Ajax");
                            }
                        });
                    }
                }
            },'-'
        ];
        this.callParent();
    }

});