
CREATE TABLE IF NOT EXISTS persona
(
  numero_dni character varying(8) NOT NULL,
  nombres character varying(30),
  ape_paterno character varying(30),
  ape_materno character varying(30),
  numero_ruc character varying(11),
  razon_social character varying(35),
  direccion character varying(35),
  sexo character varying(9),
  fecha_nacimiento date,
  email character varying(30),
  telefono_fijo character varying(15),
  telefono_movil character varying(15),
  estado_civil character varying(20),
  departamento character varying(15),
  provincia character varying(15),
  distrito character varying(15),
  indel character varying(2),
  CONSTRAINT persona_pkey PRIMARY KEY (numero_dni)
)