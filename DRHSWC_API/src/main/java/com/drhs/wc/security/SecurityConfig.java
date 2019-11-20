package com.drhs.wc.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private RESTAuthenticationEntryPoint authenticationEntryPoint;
	@Autowired
	private RESTAuthenticationFailureHandler authenticationFailureHandler;
	@Autowired
	private RESTAuthenticationSuccessHandler authenticationSuccessHandler;



	  @Autowired
	  private DataSource dataSource;

	  @Override
	  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

	    auth.jdbcAuthentication().dataSource(dataSource)
	        .usersByUsernameQuery("select email, password, 'true' as enabled"
	            + " from r_user_info where email=?")
	        .authoritiesByUsernameQuery("select email as username, 'CONSULTANT'" + 
	        		" from r_user_info where email=?")
	        .passwordEncoder(new BCryptPasswordEncoder());
	  }

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.cors();
		//http.authorizeRequests().antMatchers("/appointment/**").permitAll();
		//http.authorizeRequests().antMatchers("/consultant/**").();
		
		  http.authorizeRequests().antMatchers("/appointment/add").permitAll();
		  http.authorizeRequests().antMatchers("/appointment/schedule/**").permitAll();
		  http.authorizeRequests().antMatchers("/appointment/past").authenticated();
		  http.authorizeRequests().antMatchers("/appointment/upcoming").authenticated();
		  http.authorizeRequests().antMatchers("/appointment/block").authenticated();
		  http.authorizeRequests().antMatchers("/appointment/blocked/**").authenticated();
		  http.authorizeRequests().antMatchers("/appointment/all").permitAll();
		  http.authorizeRequests().antMatchers("/appointment/review/**").authenticated();
		  http.authorizeRequests().antMatchers("/consultant/**").authenticated();
		  http.authorizeRequests().antMatchers("/user/**").authenticated();
		  http.authorizeRequests().antMatchers("/sendemail").authenticated();
		 
		http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
		http.formLogin().successHandler(authenticationSuccessHandler);
		http.formLogin().failureHandler(authenticationFailureHandler);
		http.logout().permitAll();
		http.logout().logoutSuccessHandler((LogoutSuccessHandler) (new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK)));

	}
}
