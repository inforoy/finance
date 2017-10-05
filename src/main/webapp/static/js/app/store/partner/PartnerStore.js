Ext.define('eCredit.store.partner.PartnerStore', {
    extend: 'Ext.data.Store',
    model: 'eCredit.model.partner.PartnerModel',
    pageSize: 10,
    proxy: {
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        type: 'ajax',
        url: 'getPartner.htm',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'totalCount',
            successProperty: 'success'
        }
    }
});