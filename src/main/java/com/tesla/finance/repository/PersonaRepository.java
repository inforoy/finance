package com.tesla.finance.repository;

import java.util.List;

import com.tesla.finance.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface PersonaRepository extends JpaRepository<Persona, Long> {

    @Transactional (readOnly = true)
    List<Persona> findAll();

}
