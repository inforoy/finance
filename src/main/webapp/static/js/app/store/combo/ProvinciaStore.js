Ext.define('eCredit.store.combo.ProvinciaStore',{
    extend: 'Ext.data.Store',
    model: 'eCredit.model.combo.ProvinciaModel',
    proxy: {
        type: 'ajax'
        ,url: 'getProvincia.htm'
        ,reader: {
            type: 'json'
            ,root: 'data'
            ,totalProperty: 'totalCount'
            ,successProperty: 'success'
        }
    }
    //,autoLoad: true
});