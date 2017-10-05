Ext.define('eCredit.store.combo.EstadoCivilStore',{
    extend: 'Ext.data.Store',
    model: 'eCredit.model.combo.EstadoCivilModel',
    proxy: {
        type: 'ajax'
        ,url: 'getEstadoCivil.htm'
        ,reader: {
            type: 'json'
            ,root: 'data'
            ,totalProperty: 'totalCount'
            ,successProperty: 'success'
        }
    }
    //,autoLoad: true
});