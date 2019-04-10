package com.drhs.wc.config;

import java.util.HashMap;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@PropertySource({"classpath:application.properties"})
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.drhs.wc", entityManagerFactoryRef = "entityManager", transactionManagerRef = "transactionManager")
public class PersistenceConfiguration {

	@Autowired
	private Environment env;
	
	public PersistenceConfiguration() {
		super();
	}
	/**
	 * 
	 * @return
	 */
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManager() {
		final LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan("com.drhs.wc");

		final HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		final HashMap<String, Object> properties = new HashMap<String, Object>();
		properties.put("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
		properties.put("hibernate.dialect", env.getProperty("hibernate.dialect"));
		em.setJpaPropertyMap(properties);

		return em;
	}
	/**
	 * 
	 * @return
	 */
	@Bean(name="dataSource")
	public DataSource dataSource() {
	     HikariDataSource dataSource = new HikariDataSource();
		//final DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(env.getProperty("datasource.driver.class"));
		dataSource.setJdbcUrl(env.getProperty("datasource.url"));
		dataSource.setUsername(env.getProperty("datasource.username"));
		dataSource.setPassword(env.getProperty("datasource.password"));
		dataSource.setMaximumPoolSize(1);
		dataSource.setMinimumIdle(1);
		return dataSource;
	}
	/**
	 * 
	 * @return
	 */
	@Bean(name="transactionManager")
	public PlatformTransactionManager arTransactionManager() {
		final JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManager().getObject());
		return transactionManager;
	}
}
