Ext.define('eCredit.view.requestCredit.FormRequestCreditView', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormRequestCreditView',
    height: '80%',
    width: '30%',
    layout: 'fit',
    title: 'Registrar Solicitud de Crédito',
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
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'idSolicitudCredito',
                    fieldLabel: 'Solicitud de Crédito'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'idProductoCredito',
                    fieldLabel: 'Producto Crédito'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'montoSolicitado',
                    fieldLabel: 'Monto Solicitado'
                },
                {
                    xtype: 'datefield',
                    labelWidth: 135,
                    name: 'fechaSolicitud',
                    fieldLabel: 'Fecha de Solicitud'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'numeroCuotas',
                    fieldLabel: 'Nro. Cuotas'
                },
                {
                    xtype: 'datefield',
                    labelWidth: 135,
                    name: 'primeraFechaPago',
                    fieldLabel: 'Primera Fecha de Pago'
                },
                {
                    xtype: 'datefield',
                    labelWidth: 135,
                    name: 'fechaVencimiento',
                    fieldLabel: 'Fecha de Vencimiento'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'tasaCuota',
                    fieldLabel: 'Tasa de Cuota'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'tasaMoratoria',
                    fieldLabel: 'Tasa Moratoria'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'moneda',
                    fieldLabel: 'Moneda'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'codigoAgencia',
                    fieldLabel: 'Codigo de Agencia'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'codigoUsuario',
                    fieldLabel: 'Codigo de Usuario'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'indel',
                    fieldLabel: 'indel',
                    hidden: true
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