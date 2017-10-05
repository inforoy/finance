package com.tesla.finance.service;

import com.tesla.finance.model.Persona;

import java.util.List;

public interface PersonaService {

    List<Persona> findAll();

    void saveOrUpdate(Persona personaBean);

    void savePersona(Persona personaBean);

    void updatePersona(Persona personaBean);

    void deletePersona(String numeroDni);

}
