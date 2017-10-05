package com.tesla.finance.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Root configuration.
 */
@Configuration
@Import(value = {
		PropertiesConfiguration.class
        ,ServicesConfiguration.class
        ,ComponentConfiguration.class
        ,RepositoryConfiguration.class
})
public class RootConfiguration {

}
