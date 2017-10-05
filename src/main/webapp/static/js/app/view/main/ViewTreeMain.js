Ext.define("eCredit.view.main.ViewTreeMain", {
    extend: "Ext.tree.Panel",
    cls: 'custom-grid',
    id: 'idViewTreeMain',
//    cls:'my-header',
    alias: 'widget.ViewTreeMain',
    //store:'eCredit.store.main.StoreTreeMain',
    rootVisible: false,

    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Creditos',
                expanded: true,
                children: [
                    {
                        text: 'Solicitar Crédito',
                        leaf: true,
                        nameController: 'eCredit.controller.requestCredit.RequestCreditController',
                        nameView: 'eCredit.view.requestCredit.RequestCreditGridView',
                        useArrows: true,
                        handler: function () {
                            console.log('RequestCreditController*handler');
                        }
                    },
                    {
                        text: 'Aprobar Solicitud',
                        leaf: true,
                        nameController: 'eCredit.controller.partner.PartnerController',
                        nameView: 'eCredit.view.partner.ViewPanelFindPartner',
                        useArrows: true
                        , handler: function () {
                            alert("2");
                        }
                    },
                    {
                        text: 'Emitir Credito',
                        leaf: true,
                        useArrows: true
                        , handler: function () {
                        alert("3");
                    }
                    }
                ]
            },
            {
                text: 'Pagos',
                expanded: true,
                children: [
                    {
                        text: 'Pagar Letra de Credito',
                        leaf: true,
                        useArrows: true
                    },
                    {
                        text: 'Pagar Mora de Credito',
                        leaf: true,
                        useArrows: true
                    },
                    {
                        text: 'Pagar Aporte',
                        leaf: true,
                        useArrows: true
                    },
                    {
                        text: 'Pagar Mora de Aporte',
                        leaf: true,
                        useArrows: true
                    }
                ]
            },
            {
                text: 'Depositos',
                expanded: false,
                children: [
                    {
                        text: 'Deposito a Cuenta de Ahorro',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Retiros',
                expanded: false,
                children: [
                    {
                        text: 'Retiro Cuenta de Ahorro',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Caja / Boveda',
                expanded: false,
                children: [
                    {
                        text: 'Abrir Boveda',
                        leaf: true
                    },
                    {
                        text: 'Cerrar Boveda',
                        leaf: true
                    },
                    {
                        text: 'Abrir Caja',
                        leaf: true
                    },
                    {
                        text: 'Cerrar Caja',
                        leaf: true
                    },
                    {
                        text: 'Transferencia de Boveda a Caja',
                        leaf: true
                    },
                    {
                        text: 'Transferencia de Caja a Boveda',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Registro',
                expanded: true,
                children: [
                    {
                        text: 'Registrar Persona',
                        leaf: true,
                        nameController: 'eCredit.controller.main.PersonController',
                        nameView: 'eCredit.view.persona.ViewPanelGridPersona'
                    },
                    {
                        text: 'Registrar Socio',
                        leaf: true,
                        nameController: 'eCredit.controller.member.MemberController',
                        nameView: 'eCredit.view.member.ViewPanelGridMember'
                    }
                ]
            },
            {
                text: 'Help me',
                leaf: true
            }

        ]
    }

});