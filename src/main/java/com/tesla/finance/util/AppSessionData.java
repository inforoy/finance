package com.tesla.finance.util;

public class AppSessionData {

    private String razonSocial;
    private int numeroMensajes;
    private String usuario;
    private String empresa;

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public int getNumeroMensajes() {
        return numeroMensajes;
    }

    public void setNumeroMensajes(int numeroMensajes) {
        this.numeroMensajes = numeroMensajes;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }
}
