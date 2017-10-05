package com.tesla.finance.configuration;

//import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Spring repositories configuration.
 */
@Configuration
//@ComponentScan(basePackages = "com.tesla.finance")
@EnableJpaRepositories(basePackages = "com.tesla.finance.repository")
@Import(value = {
		DataSourceConfiguration.class,
		JpaDataBaseConfiguration.class,
		JdbcInitialCharge.class
})
public class RepositoryConfiguration {

}
