package com.tesla.finance.configuration;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaDialect;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

/**
 * JPA-Spring DATA configuration
 *
 */
@Configuration
public class JpaDataBaseConfiguration {

	@Autowired
    private DataSource dataSource;
	
    @Value("${app.hibernate.dialect:org.hibernate.dialect.DB2Dialect}")
    private String hibernateDialec;
    
    @Value("${app.hibernate.show_sql:false}")
    private String hibernateShowSql;

    @Autowired
    private Environment environment;
    
    /**
     * Configuration of the LocalContainerEntityManagerFactoryBean
     * 
     * @return {@link LocalContainerEntityManagerFactoryBean}
     */
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(){
        
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        em.setPackagesToScan(new String[] { "com.tesla.finance.model" });
        em.setJpaVendorAdapter(jpaVendorAdapter());
        
        Properties jpaProperties = new Properties();
        jpaProperties.put("hibernate.dialect", hibernateDialec);
        jpaProperties.put("hibernate.show_sql", Boolean.parseBoolean(hibernateShowSql));

        em.setJpaProperties(jpaProperties);
        return em;
    }
    
    /**
     * Configures the JpaVendorAdapter specified
     * 
     * @return {@link JpaVendorAdapter}
     */
    private JpaVendorAdapter jpaVendorAdapter(){
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.H2);
        vendorAdapter.setDatabasePlatform("H2");
        vendorAdapter.setShowSql(Boolean.parseBoolean(hibernateShowSql));
        return vendorAdapter;
    }
    
    /**
     * Configures the PlatformTransactionManager
     * 
     * @param emf {@link EntityManagerFactory}
     * @return {@link JpaTransactionManager}
     */
    @Bean(name = "transactionManager")
    public JpaTransactionManager jpaTransactionManager(
        EntityManagerFactory emf){
        
        JpaTransactionManager jpaTransactionManager = new JpaTransactionManager();
        
        HibernateJpaDialect jpaDialect = new HibernateJpaDialect();
        jpaTransactionManager.setJpaDialect(jpaDialect);
        jpaTransactionManager.setEntityManagerFactory(emf);
        
        return jpaTransactionManager;
    }
	
}
