Ext.define('eCredit.controller.member.MemberController', {
    extend: 'Ext.app.Controller',
    models: [
        'eCredit.model.member.MemberModel'
    ],
    stores: [
        'eCredit.store.member.MemberStore'
    ],
    views: [
        'eCredit.view.member.ViewPanelGridMember'
    ],

    init: function () {
        this.control({
                'ViewPanelGridMember button#add': {
                    click: this._onAddMember
                },
                'ViewPanelFormPersona button#save': {
                    click: this._onClickSaveMember
                },
                'ViewPanelGridPersona': {
                    itemdblclick: this._onEditMember
                },
                'ViewPanelGridPersona button#delete': {
                    click: this._onDeleteMember
                }
            }
        );
    },

    _onEditMember: function (itemGridEdit, record, item, index, e, eOpts) {
        console.log('Editar Socio');
        var win = Ext.create('eCredit.view.member.ViewPanelFormMember');
        win.setTitle("Editar Socio - " + record.get('nombre') + ' ' + record.get('apePaterno'));
        var form = win.down('form');
        form.loadRecord(record);
    },

    _onClickSaveMember: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        var grid = Ext.ComponentQuery.query('ViewPanelGridMember')[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'saveOrUpdateMember.htm',
            params: {
                jsonData: Ext.JSON.encode(form.getValues())
            },
            success: function (response) {
                response = Ext.JSON.decode(response.responseText);
                if (response.success) {
                    grid.store.load();
                    win.close();
                    Ext.MessageBox.alert('CONFIRMACION', response.message);
                } else {
                    Ext.MessageBox.alert('ERROR', response.message);
                }
            },
            failure: function () {
                console.log("Error*updateMember");
            }
        });
        store.sync();
    },

    _onAddMember: function (btn) {
        var view =  Ext.create('eCredit.view.member.ViewPanelFormMember', {
            title: 'Nueva Socio'
        }).show();
    },

    _onDeleteMember: function (btn, e, eOpts) {
        var grid = btn.up('grid');
        var record = grid.getSelectionModel().getSelection()[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'deleteMember.htm',
            params: {
                //jsonData: JSON.stringify(values)
                numberDni: record.data.numeroDni
            },
            success: function (response) {
                response = Ext.decode(response.responseText);
                if (response.success) {
                    store.remove(record);
                    ///Ext.MessageBox.alert('CONFIRMACION', response.message);
                } else {
                    //Ext.MessageBox.alert('ERROR', response.message);
                }
            },
            failure: function () {
                console.log("Error*deleteMember");
            }
        });
        store.sync();
    }
});
