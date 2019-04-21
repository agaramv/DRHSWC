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

//	@Override
//	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
//		builder.inMemoryAuthentication().withUser("user").password("{noop}user").roles("USER").and().withUser("admin")
//				.password("{noop}admin").roles("ADMIN");
//	}

	  @Autowired
	  private DataSource dataSource;

	  @Override
	  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

	    auth.jdbcAuthentication().dataSource(dataSource)
	        .usersByUsernameQuery("select email, password, 'true' as enabled"
	            + " from r_consultants where email=?")
	        .authoritiesByUsernameQuery("select email as username, 'CONSULTANT'" + 
	        		" from r_consultants where email=?")
//	        .authoritiesByUsernameQuery("select username, authority "
//	            + "from authorities where username=?");
	        .passwordEncoder(new BCryptPasswordEncoder());
	  }

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.cors();
		http.authorizeRequests().antMatchers("/appointment/**").authenticated();
		http.authorizeRequests().antMatchers("/consultant/**").permitAll();
		http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
		http.formLogin().successHandler(authenticationSuccessHandler);
		http.formLogin().failureHandler(authenticationFailureHandler);
//		http.logout().logoutUrl("//logout").logoutSuccessUrl("/");
//		http.logout().logoutUrl("/logout").logoutSuccessUrl("/login")
//		.deleteCookies("auth_code", "JSESSIONID").invalidateHttpSession(true));
//		http.logout() // This is missing and is important
//        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//        .logoutSuccessUrl("/login");
		http.logout().permitAll();
		http.logout().logoutSuccessHandler((LogoutSuccessHandler) (new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK)));

	}
}
