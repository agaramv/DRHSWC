package com.drhs.wc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;



@SpringBootApplication
public class DrhswcApplication {

	public static void main(String[] args) {

		System.out.print("This: ");
		System.out.println(new BCryptPasswordEncoder().encode("drhswca"));

		SpringApplication.run(DrhswcApplication.class, args);
		
	}

	
	@Bean
	public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {
	    return (tomcat) -> tomcat
	            .addContextCustomizers((context) -> context.setUseHttpOnly(false));
	}
}
