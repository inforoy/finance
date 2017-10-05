package com.tesla.finance.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 * Datasource configuration.
 */
@Configuration
public class DataSourceConfiguration {

    @Value("${app.db.inmemory:false}")
    private boolean useInMemoryDb;
    
    /**
     * DataSource bean.
     * 
     * @return {@link DataSourceConfiguration}
     */
    @Bean
    public DataSource  dataSource(){

    	if (useInMemoryDb) {
			return dataSourceH2();// H2
		}else{
			return dataSourcePG();// POSTGRES
		}
    }

	/**
	 * postgres
	 */
	private DriverManagerDataSource dataSourcePG(){
    	DriverManagerDataSource dmd = new DriverManagerDataSource();
    	dmd.setDriverClassName("org.postgresql.Driver");
    	dmd.setUrl("jdbc:postgresql://localhost:5432/banquito");
    	dmd.setUsername("postgres");
    	dmd.setPassword("123456789");
    	
    	return dmd;
	}
	/**
	 * H2
	 */
	private DriverManagerDataSource dataSourceH2(){
    	DriverManagerDataSource dmd = new DriverManagerDataSource();
    	dmd.setDriverClassName("org.h2.Driver");
    	dmd.setUrl("jdbc:h2:mem:bank;DB_CLOSE_DELAY=-1");
    	dmd.setUsername("sa");
    	dmd.setPassword("");
    	
    	return dmd;
	}
}
