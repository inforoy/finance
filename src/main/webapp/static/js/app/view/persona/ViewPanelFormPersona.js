Ext.define('eCredit.view.persona.ViewPanelFormPersona', {
    extend: 'Ext.window.Window',
    alias: 'widget.ViewPanelFormPersona',
    height: '80%',
    width: '30%',
    layout: 'fit',
    title: 'Registrar Persona',
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
                /*{
                    xtype: 'textfield',
                    name: 'id',
                    itemId: 'id',
                    value: 'id',
                    hidden: true
                },*/
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'numeroDni',
                    fieldLabel: 'DNI'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'nombre',
                    fieldLabel: 'NOMBRES'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'apePaterno',
                    fieldLabel: 'APELLIDO PATERNO'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'apeMaterno',
                    fieldLabel: 'APELLIDO MATERNO'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'numeroRuc',
                    fieldLabel: 'RUC'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'razonSocial',
                    fieldLabel: 'RAZON SOCIAL'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'direccion',
                    fieldLabel: 'DIRECCION'
                },
                {
                    xtype: 'combobox',
                    labelWidth: 135,
                    name: 'sexo',
                    fieldLabel: 'SEXO',
                    store: Ext.create('eCredit.store.combo.SexoStore'),
                    value: '',
                    displayField: 'description',
                    valueField: 'id'
                },
                {
                    xtype: 'datefield',
                    labelWidth: 135,
                    name: 'fechaNacimiento',
                    fieldLabel: 'FECHA DE NACIMIENTO'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'email',
                    fieldLabel: 'E-MAIL'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'telefonoFijo',
                    fieldLabel: 'TELEFONO FIJO'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'telefonoMovil',
                    fieldLabel: 'TELEFONO MOVIL'
                },
                {
                    xtype: 'combobox',
                    labelWidth: 135,
                    name: 'estadoCivil',
                    fieldLabel: 'ESTADO CIVIL',
                    store: Ext.create('eCredit.store.combo.EstadoCivilStore'),
                    value: '',
                    displayField: 'description',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    labelWidth: 135,
                    name: 'departamento',
                    fieldLabel: 'DEPARTAMENTO',
                    store: Ext.create('eCredit.store.combo.DepartamentoStore'),
                    value: '',
                    displayField: 'description',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    labelWidth: 135,
                    name: 'provincia',
                    fieldLabel: 'PROVINCIA',
                    store: Ext.create('eCredit.store.combo.ProvinciaStore'),
                    value: '',
                    displayField: 'description',
                    valueField: 'id'
                },
                {
                    xtype: 'combobox',
                    labelWidth: 135,
                    name: 'distrito',
                    fieldLabel: 'DISTRITO',
                    store: Ext.create('eCredit.store.combo.DistritoStore'),
                    value: '',
                    displayField: 'description',
                    valueField: 'id'
                },
                {
                    xtype: 'textfield',
                    labelWidth: 135,
                    name: 'indel',
                    fieldLabel: 'indel',
                    value: '',
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