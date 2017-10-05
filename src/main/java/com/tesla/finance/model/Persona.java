package com.tesla.finance.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "t002_persona")
public class Persona implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="t002_dni_numero")
	private String numeroDni;
	@Column(name="t002_nombres")
	private String nombres;
	@Column(name="t002_ape_paterno")
	private String apePaterno;
	@Column(name="t002_ape_materno")
	private String apeMaterno;
	@Column(name="t002_ruc_numero")
	private String numeroRuc;
	@Column(name="t002_razon_social")
	private String razonSocial;
	@Column(name="t002_direccion")
	private String direccion;
	@Column(name="t002_sexo")
	private String sexo;
	@Column(name="t002_fecha_nacimiento")
	private Date fechaNacimiento;
	@Column(name="t002_email")
	private String email;
	@Column(name="t002_telefono_movil")
	private String telefonoMovil;
	@Column(name="t002_telefono_fijo")
	private String telefonoFijo;
	@Column(name="t002_estado_civil")
	private String estadoCivil;
	@Column(name="t002_departamento")
	private String departamento;
	@Column(name="t002_provincia")
	private String provincia;
	@Column(name="t002_distrito")
	private String distrito;
	@Column(name="t002_eliminado")
	private String indel;

	public String getNumeroDni() {
		return numeroDni;
	}

	public void setNumeroDni(String numeroDni) {
		this.numeroDni = numeroDni;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApePaterno() {
		return apePaterno;
	}

	public void setApePaterno(String apePaterno) {
		this.apePaterno = apePaterno;
	}

	public String getApeMaterno() {
		return apeMaterno;
	}

	public void setApeMaterno(String apeMaterno) {
		this.apeMaterno = apeMaterno;
	}

	public String getNumeroRuc() {
		return numeroRuc;
	}

	public void setNumeroRuc(String numeroRuc) {
		this.numeroRuc = numeroRuc;
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefonoMovil() {
		return telefonoMovil;
	}

	public void setTelefonoMovil(String telefonoMovil) {
		this.telefonoMovil = telefonoMovil;
	}

	public String getTelefonoFijo() {
		return telefonoFijo;
	}

	public void setTelefonoFijo(String telefonoFijo) {
		this.telefonoFijo = telefonoFijo;
	}

	public String getEstadoCivil() {
		return estadoCivil;
	}

	public void setEstadoCivil(String estadoCivil) {
		this.estadoCivil = estadoCivil;
	}

	public String getDepartamento() {
		return departamento;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getDistrito() {
		return distrito;
	}

	public void setDistrito(String distrito) {
		this.distrito = distrito;
	}

	public String getIndel() {
		return indel;
	}

	public void setIndel(String indel) {
		this.indel = indel;
	}

	@Override
	public String toString() {
		return "Persona{" +
				"numeroDni='" + numeroDni + '\'' +
				", nombres='" + nombres + '\'' +
				", apePaterno='" + apePaterno + '\'' +
				", apeMaterno='" + apeMaterno + '\'' +
				", numeroRuc='" + numeroRuc + '\'' +
				", razonSocial='" + razonSocial + '\'' +
				", direccion='" + direccion + '\'' +
				", sexo='" + sexo + '\'' +
				", fechaNacimiento=" + fechaNacimiento +
				", email='" + email + '\'' +
				", telefonoMovil='" + telefonoMovil + '\'' +
				", telefonoFijo='" + telefonoFijo + '\'' +
				", estadoCivil='" + estadoCivil + '\'' +
				", departamento='" + departamento + '\'' +
				", provincia='" + provincia + '\'' +
				", distrito='" + distrito + '\'' +
				", indel='" + indel + '\'' +
				'}';
	}
}
