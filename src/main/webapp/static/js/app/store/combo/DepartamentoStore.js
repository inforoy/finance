Ext.define('eCredit.store.combo.DepartamentoStore',{
    extend: 'Ext.data.Store',
    model: 'eCredit.model.combo.DepartamentoModel',
    proxy: {
        type: 'ajax'
        ,url: 'getDepartamento.htm'
        ,reader: {
            type: 'json'
            ,root: 'data'
            ,totalProperty: 'totalCount'
            ,successProperty: 'success'
        }
    }
    //,autoLoad: true
});