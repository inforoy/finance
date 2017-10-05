Ext.define('eCredit.store.combo.SexoStore',{
    extend: 'Ext.data.Store',
    model: 'eCredit.model.combo.SexoModel',
    proxy: {
        type: 'ajax'
        ,url: 'getSexo.htm'
        ,reader: {
            type: 'json'
            ,root: 'data'
            ,totalProperty: 'totalCount'
            ,successProperty: 'success'
        }
    }
    //,autoLoad: true
});