Ext.define('eCredit.controller.partner.PartnerController', {
    extend: 'Ext.app.Controller',
    models: [
        'eCredit.model.partner.PartnerModel'
    ],
    stores: [
        'eCredit.store.partner.PartnerStore'
    ],
    views: [
        'eCredit.view.partner.ViewPanelFindPartner'
    ],

    init: function () {
        this.control({
                'ViewPanelGridPersona button#btnFindPartnerCredit': {
                    click: this._onFindPartnerCredit
                }
            }
        );
    },

    _onFindPartnerCredit: function (btn, e, eOpts) {

    }

});
