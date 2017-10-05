Ext.define('eCredit.store.requestCredit.RequestCreditStore', {
    extend: 'Ext.data.Store',
    model: 'eCredit.model.requestCredit.RequestCreditModel',
    pageSize: 5,
    proxy: {
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        type: 'ajax',
        url: 'listRequestCredits.htm',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'totalCount',
            successProperty: 'success'
        }
    }
});