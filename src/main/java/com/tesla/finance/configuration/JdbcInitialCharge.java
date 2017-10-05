package com.tesla.finance.configuration;

import java.sql.Connection;
import java.sql.SQLException;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

/**
 * JDBC initialization.
 */
@Configuration
public class JdbcInitialCharge {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(JdbcInitialCharge.class);
    
    @Value("${app.db.inmemory:true}")
    private boolean useInMemoryDb;
    
    @Autowired
    private DataSource dataSource;
    
    /**
     * Initializes H2 in memory database and creates the schema.
     * 
     */
    @PostConstruct
    public void initialize(){
    	if (useInMemoryDb) {
			setPopulate();
		}
    }
    
    /**
     * JDBC template bean configuration
     * 
     * @param dataSource dataSource
     * @return new JDBCTemplate
     */
    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }
    
    private void setPopulate(){

        ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
        populator.setContinueOnError(false);
        populator.setIgnoreFailedDrops(false);
        
        populator.addScript(new ClassPathResource("static/sql/drop-tables.sql"));
        populator.addScript(new ClassPathResource("static/sql/create-tables.sql"));
        populator.addScript(new ClassPathResource("static/sql/insert-data.sql"));
        
        Connection connection = null;
        
        try {
            connection = this.dataSource.getConnection();
            populator.populate(connection);
        } catch (SQLException e) {
            LOGGER.error("Error initialize database", e);
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    LOGGER.warn("Error closing connection", e);
                }
            }
        }
        
    }
}
