Ext.define('eCredit.controller.main.PersonController', {
    extend: 'Ext.app.Controller',
    models: [
        'eCredit.model.persona.PersonaModel'
    ],
    stores: [
        'eCredit.store.persona.PersonaStore'
    ],
    views: [
        'eCredit.view.persona.ViewPanelGridPersona'
    ],

    init: function () {
        this.control({
                'ViewPanelGridPersona button#add': {
                    click: this._onAddPersona
                },
                'ViewPanelFormPersona button#save': {
                    click: this._onClickSavePersona
                },
                'ViewPanelGridPersona': {
                    itemdblclick: this._onEditPersona
                },
                'ViewPanelGridPersona button#delete': {
                    click: this._onDeletePersona
                }
            }
        );
    },

    _onEditPersona: function (itemGridEdit, record, item, index, e, eOpts) {
        console.log('Editar persona');
        var win = Ext.create('eCredit.view.persona.ViewPanelFormPersona');
        win.setTitle("Editar Persona - " + record.get('nombre') + ' ' + record.get('apePaterno'));
        var form = win.down('form');
        form.loadRecord(record);

    },

    _onClickSavePersona: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        var grid = Ext.ComponentQuery.query('ViewPanelGridPersona')[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'saveOrUpdatePerson.htm',
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
                console.log("Error*updatePersona");
            }
        });
         store.sync();
    },

    _onAddPersona: function (btn) {
      var view =  Ext.create('eCredit.view.persona.ViewPanelFormPersona', {
            title: 'Nueva Persona'
        }).show();
    },

    _onDeletePersona: function (btn, e, eOpts) {
        var grid = btn.up('grid');
        var record = grid.getSelectionModel().getSelection()[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'deletePersona.htm',
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
                console.log("Error*deletePersona");
            }
        });
        store.sync();
    }
});
