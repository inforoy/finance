Ext.define('eCredit.controller.requestCredit.RequestCreditController', {
    extend: 'Ext.app.Controller',

    models: [
        'eCredit.model.requestCredit.RequestCreditModel'
    ],
    stores: [
        'eCredit.store.requestCredit.RequestCreditStore'
    ],
    views: [
        'eCredit.view.requestCredit.RequestCreditGridView'
    ],

    init: function () {
        this.control({

               'RequestCreditGridView button#add': {
                    click: this._onAddRequestCredit
                },
                'RequestCreditGridView button#save': {
                    click: this._onClickSaveRequestCredit
                },
                'RequestCreditGridView button#delete': {
                    click: this._onDeleteRequestCredit
                },
                'RequestCreditGridView button#btnFindPartnerCredit': {
                    click: this._onFindPartnerCredit
                },
                'RequestCreditGridView button#btnGeneratePaymentPlan': {
                    click: this._onGeneratePaymentPlan
                }
            }
        );
    },

    _onAddRequestCredit: function (btn) {
        var view =  Ext.create('eCredit.view.requestCredit.FormRequestCreditView', {
            title: 'Nueva Solicitud de Crédito'
        }).show();
    },

    _onClickSaveRequestCredit: function (btn, e, eOpts) {
        var win = btn.up('window');
        var form = win.down('form');
        var grid = Ext.ComponentQuery.query('RequestCreditGridView')[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'saveOrUpdateRequestCredit.htm',
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
                console.log("Error*saveOrUpdateRequestCredit");
            }
        });
        store.sync();
    },

    _onDeleteRequestCredit: function (btn, e, eOpts) {
        var grid = btn.up('grid');
        var record = grid.getSelectionModel().getSelection()[0];
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: 'deleteRequestCredit.htm',
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
                console.log("Error*deleteRequestCredit");
            }
        });
        store.sync();
    },

    _onFindPartnerCredit: function (btn) {

        alert("_onFindPartnerCredit");
        var view =  Ext.create('eCredit.view.partner.ViewPanelFindPartner', {
            title: 'Buscar Socio'
        }).show();

    },

    _onGeneratePaymentPlan: function (btn, e, eOpts) {

        alert("_onGeneratePaymentPlan");

    }




});
