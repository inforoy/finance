Ext.define('eCredit.model.requestCredit.RequestCreditModel',{
    extend: 'Ext.data.Model',
    fields: [
        'idSolicitudCredito'    // ID Solicitud de Credito
        ,'idProductoCredito'    // ID Producto Credito - Tabla T0016_ProductCredit
        ,'montoSolicitado'  // Monto Solicitado
        ,'fechaSolicitud'
        ,'numeroCuotas'
        ,'primeraFechaPago'
        ,'fechaVencimiento'
        ,'tasaCuota'
        ,'tasaMoratoria'
        ,'moneda'
        ,'codigoAgencia'    // Tabla Agencia
        ,'codigoUsuario'    // Tabla Usuario
        ,'indel'
    ]
});