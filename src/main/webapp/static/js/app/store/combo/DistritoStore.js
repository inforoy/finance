Ext.define('eCredit.store.combo.DistritoStore',{
    extend: 'Ext.data.Store',
    model: 'eCredit.model.combo.DistritoModel',
    proxy: {
        type: 'ajax'
        ,url: 'getDistrito.htm'
        ,reader: {
            type: 'json'
            ,root: 'data'
            ,totalProperty: 'totalCount'
            ,successProperty: 'success'
        }
    }
    //,autoLoad: true
});