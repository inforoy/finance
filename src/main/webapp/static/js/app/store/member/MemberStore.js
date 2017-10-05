/**
 * Created by admin on 20/03/2017.
 */
Ext.define('eCredit.store.member.MemberStore', {
    extend: 'Ext.data.Store',
    model: 'eCredit.model.member.MemberModel',
    pageSize: 10,
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