Ext.define('eCredit.controller.main.ControllerTreeMain', {
    extend: 'Ext.app.Controller',
    controller:[
        'eCredit.controller.partner.PartnerController'
    ],
    models: [
        //'eCredit.model.persona.PersonaModel'
    ],
    stores: [
        //'eCredit.store.persona.PersonaStore',
        //'eCredit.store.combo.SexoStore',
        //'eCredit.store.combo.DepartamentoStore',
        //'eCredit.store.combo.ProvinciaStore',
        //'eCredit.store.combo.DistritoStore',
        //'eCredit.store.combo.EstadoCivilStore'
    ],
    views: [
        'eCredit.view.main.ViewPanelGeneral'
        //'eCredit.view.persona.ViewPanelGridPersona',
        //'eCredit.view.persona.ViewPanelFormPersona'
    ],

    refs: [
        {
            ref: 'viewTreeMain',
            selector: 'ViewTreeMain'
        }
    ],

    init: function () {
        this.control({

            'ViewTreeMain': {
                itemclick: this._onItemClick
            }

            , '[action=expand]': {
                click: this._onExpand
            }

            , '[action=colapse]': {
                click: this._onColapse
            }
        });
    }

    , _onExpand: function () {
        var myTree = this.getViewTreeMain();
        myTree.expandAll();
        console.log('_onExpand');
    }

    , _onColapse: function () {
        var myTree = this.getViewTreeMain();
        myTree.collapseAll();
        console.log('_onColapse');
    }

    , _onItemClick: function (view, record) {
        eCredit.getApplication().getController(record.raw.nameController);
        var tab = Ext.create(record.raw.nameView);
        eCredit.getApplication().centerPanel.addPanel(tab);
    }

});