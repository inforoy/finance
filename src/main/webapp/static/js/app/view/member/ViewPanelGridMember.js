Ext.define('eCredit.view.member.ViewPanelGridMember',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.ViewPanelGridMember',
    store: 'eCredit.store.member.MemberStore',
    title: 'Socio',
    iconCls: 'icon-grid',
    loadMask: true,
    columnLines: true,

    listeners: {
        render: function (grid) {
            grid.down('pagingtoolbar').moveFirst();
        }
    }

    ,bbar:{
        xtype: 'pagingtoolbar',
        pageSize: 10,
        store: 'eCredit.store.member.MemberStore',
        displayInfo: true,
        displayMsg: 'Mostrando {0} - {1} de {2}',
        items:['-',
            {text:'EXPORTAR A PDF',action:'exportPdfMembers',iconCls:'icon-pdf'},'-'
            ,{ text:'EXPORTAR A EXCEL',action:'exportXlsMembers',iconCls:'icon-excel'}],
        emptyMsg: 'No existe informacion a mostrar'
    }

    ,initComponent: function() {

        this.columns = [

            {
                xtype: 'rownumberer',
                sortable: false
            },
            {
                dataIndex: 'numeroDni',
                text: 'DNI',
                flex:1
            },
            {
                dataIndex: 'nombre',
                text: 'NOMBRES',
                flex:1
            },
            {
                dataIndex: 'apePaterno',
                text: 'AP. PATERNO',
                flex:1
            },
            {
                dataIndex: 'apeMaterno',
                text: 'AP. MATERNO',
                flex:1
            },
            {
                dataIndex: 'numeroRuc',
                text: 'RUC',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'razonSocial',
                text: 'RAZON SOCIAL',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'direccion',
                text: 'DIRECCION',
                flex:1
            },
            {
                dataIndex: 'sexo',
                text: 'SEXO',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'fechaNacimiento',
                text: 'F. NACIMIENTO',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'email',
                text: 'EMAIL',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'telefonoFijo',
                text: 'T. FIJO',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'telefonoMovil',
                text: 'T. MOVIL',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'estadoCivil',
                text: 'E. CIVIL',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'departamento',
                text: 'DEPARTAMENTO',
                flex:1
            },
            {
                dataIndex: 'provincia',
                text: 'PROVINCIA',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'distrito',
                text: 'DISTRITO',
                flex:1,
                hidden: true
            },
            {
                dataIndex: 'indel',
                text: 'INDEL',
                flex:1,
                hidden: true
            }

        ];
        this.callParent(arguments);

    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Nuevo',
                    itemId: 'add',
                    iconCls: 'icon-new'
                },
                {
                    xtype: 'button',
                    text: 'Eliminar',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                }
            ]
        }
        /*
         ,{
         xtype: 'pagingtoolbar',
         pageSize: 5,
         store: 'eCredit.store.persona.PersonaStore',
         displayInfo: true,
         dock: 'bottom',
         displayInfo: true,
         emptyMsg: 'No existe informaci&oacute;n a mostrar'
         }
         */
    ]

});