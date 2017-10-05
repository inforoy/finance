Ext.define('eCredit.view.requestCredit.RequestCreditGridView',{
    extend:'Ext.panel.Panel',
    alias:'widget.RequestCreditGridView',
    border:false,
    layout:'border',

    initComponent:function(){

        this.items =
            [

                {
                    xtype: 'form',
                    padding:'2 2 2 0',
                    /*region:'east',*/
                    flex:1,
                    bodyPadding: 10,
                    /*collapseDirection: 'left',
                    collapsed: true,*/
                    collapsible: true,
                    title: 'Datos de la Solicitud',
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
                                    labelWidth: 135,
                                    fieldLabel: 'Dni',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    labelWidth: 135,
                                    fieldLabel: 'Nombres',
                                    readOnly: true
                                },
                                {
                                    xtype: 'button',
                                    width: 100,
                                    text: 'Buscar Socio',
                                    iconCls: 'icon-search',
                                    itemId:'btnFindPartnerCredit'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 26,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'combobox',
                                    labelWidth: 135,
                                    fieldLabel: 'Tipo de Solicitud'
                                },
                                {
                                    xtype: 'combobox',
                                    labelWidth: 135,
                                    fieldLabel: 'Moneda'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 26,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Tasa: 1.20% Anual * Monto Minimo: S/. 100.00 * Monto Maximo: S/. 1 000.00'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 26,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    labelWidth: 135,
                                    fieldLabel: 'Monto Solicitado'
                                },
                                {
                                    xtype: 'textfield',
                                    labelWidth: 135,
                                    fieldLabel: 'Tasa Moratoria'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 26,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    labelWidth: 135,
                                    fieldLabel: 'Numero Cuotas'
                                },
                                {
                                    xtype: 'datefield',
                                    labelWidth: 135,
                                    fieldLabel: 'Primera fecha de pagos'
                                }

                            ]
                        },
                        {
                            xtype: 'container',
                            height: 26,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    labelWidth: 135,
                                    fieldLabel: 'Tasa de Cuota'
                                }
                                ,
                                {
                                    xtype: 'datefield',
                                    labelWidth: 135,
                                    fieldLabel: 'Fecha de Vencimiento'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    width: 135,
                                    text: 'Generar Plan de Pagos',
                                    itemId:'btnGeneratePaymentPlan'
                                }
                            ]
                        }
                    ]
                }

        ];
        this.callParent();
    }
});