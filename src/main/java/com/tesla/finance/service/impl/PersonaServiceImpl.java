package com.tesla.finance.service.impl;

import com.tesla.finance.model.Persona;
import com.tesla.finance.repository.PersonaRepository;
import com.tesla.finance.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service("personaService")
public class PersonaServiceImpl implements PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    private static final String INDICATOR_SAVE = "";
    private static final String INDICATOR_DELETE_ACTIVE = "0";
    // private static final String INDICATOR_DELETE_INACTIVE = "1";

    public List<Persona> findAll(){
        List<Persona> list = personaRepository.findAll();

        return list;
    }

    public void saveOrUpdate(Persona personaBean){
        if(personaBean.getIndel().equals(INDICATOR_SAVE)){
            personaBean.setIndel(INDICATOR_DELETE_ACTIVE);
            this.updatePersona(personaBean);
        } else {
            this.savePersona(personaBean);
        }
    }

    public void savePersona(Persona personaBean){
        personaRepository.save(personaBean);
    }

    public void updatePersona(Persona personaBean){

        personaRepository.save(personaBean);
    }

    public void deletePersona(String numberDni){
        // personaRepository.deletePerson(numeroDni);
        //personaRepository.deletePersonN(numberDni);
    }

}
