Ext.define('eCredit.view.main.ViewPanelGeneral',{
    extend:'Ext.tab.Panel',
    alias:'widget.ViewPanelGeneral',
    layout:'fit',
    margin:'1 0 0 0',
    plain: true,
    border:false,
    addPanel:function(item){
        var cmp = this.down("[title="+item.title+"]");
        if(!cmp){
            this.add(item);
            this.setActiveTab(item);
        }else{
            this.setActiveTab(cmp);
        }
    }

});

eCredit.getComponent=function(){

};