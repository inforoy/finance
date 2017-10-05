package com.tesla.finance.common;

import com.tesla.finance.configuration.RootRepositoryConfigTest;
import org.junit.runner.RunWith;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.transaction.annotation.Transactional;

/**
 * Abstract Integration Repository tests with common features.
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional(transactionManager = "transactionManager")
@DirtiesContext(classMode = ClassMode.AFTER_CLASS)
@ContextConfiguration(classes = { RootRepositoryConfigTest.class }, loader = AnnotationConfigContextLoader.class)
public abstract class AbstractRepositoryIntregrationTest  extends AbstractTransactionalJUnit4SpringContextTests {
	
	

}
