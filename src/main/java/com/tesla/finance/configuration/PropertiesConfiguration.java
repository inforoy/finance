package com.tesla.finance.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

/**
 * Property files configuration
 */
@Configuration
@PropertySource(value = { "classpath:application.properties" })
public class PropertiesConfiguration {
    /**
     * PropertySources bean.
     *
     * @return {@link PropertySourcesPlaceholderConfigurer}
     */
    @Bean
    public PropertySourcesPlaceholderConfigurer propertyConfigInDev(){
        return new PropertySourcesPlaceholderConfigurer();
    }
}
