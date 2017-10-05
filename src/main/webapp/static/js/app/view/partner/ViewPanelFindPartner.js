Ext.define('eCredit.view.partner.ViewPanelFindPartner',{
    extend: 'Ext.window.Window',
    alias: 'widget.FormRequestCreditView',
    height: '70%',
    width: '50%',
    layout: 'fit',
    title: 'Buscar Socio *',
    autoShow: true,
    requires: [
    ],


    items: [
        {
            xtype: 'form',
            bodyPadding: 5,
            defaults: {
                anchor: '100%'
            },

            items: [
                {
                    xtype: 'container',
                    height: 26,
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            labelWidth: 100,
                            name: 'idDni',
                            placeHolder: '*** Type here ***'
                        },
                        {
                            xtype: 'textfield',
                            labelWidth: 100,
                            name: 'idNombres'
                        },
                        {
                            xtype: 'textfield',
                            labelWidth: 100,
                            name: 'apPaterno'
                        },{
                            xtype: 'textfield',
                            labelWidth: 100,
                            name: 'apMaterno'
                        }

                    ]
                },




                // grilla
                {
                    xtype: 'container',
                    height: 26,
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            labelWidth: 300,
                            text: 'Buscar',
                            itemId: 'search',
                            iconCls: 'icon-search'
                        }
                    ]
                }





            ]
        }

    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Cancelar',
                    itemId: 'cancel',
                    iconCls: 'icon-cancel',
                    handler: function (btn) {
                        btn.up('window').close();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Guardar',
                    itemId: 'save',
                    iconCls: 'icon-save'
                }
            ]
        }
    ]
});