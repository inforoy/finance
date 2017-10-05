package com.tesla.finance.repository.integrationtest;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;

import com.tesla.finance.common.AbstractRepositoryIntregrationTest;
import com.tesla.finance.model.Persona;
import com.tesla.finance.repository.PersonaRepository;

public class PersonaRepositoryTest extends AbstractRepositoryIntregrationTest {

	@Autowired
	private PersonaRepository personaRepository;
	
	/**
	 * Sets up test environment
	 * 
	 */
	@Before
	public void setUp() {
		
	}
	
	/**
	 * Test for {@link PersonaRepository.findAll()}
	 */
	@Test
	public void findAllTest() {
		List<Persona> personas = personaRepository.findAll();
		Assert.notNull(personas);
	}
	
	
}
