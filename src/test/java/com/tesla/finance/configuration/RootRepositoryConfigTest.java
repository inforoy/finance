package com.tesla.finance.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.tesla.finance.repository")
@Configuration
@Import(value = {
		PropertiesConfiguration.class,
		DataSourceConfiguration.class,
		JpaDataBaseConfiguration.class,
		JdbcInitialCharge.class
})
public class RootRepositoryConfigTest {

}
