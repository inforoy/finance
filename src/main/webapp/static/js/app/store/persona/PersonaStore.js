Ext.define('eCredit.store.persona.PersonaStore', {
    extend: 'Ext.data.Store',
    model: 'eCredit.model.persona.PersonaModel',
    pageSize: 5,
    proxy: {
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        type: 'ajax',
        url: 'getPersons.htm',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'totalCount',
            successProperty: 'success'
        }
    }
});

