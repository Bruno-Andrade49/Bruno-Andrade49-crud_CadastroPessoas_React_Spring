package com.projeto.api.bruno.crud.Crud.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	// Configuracoes de autorizacao
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers(HttpMethod.GET, "/pessoas").permitAll()
		.antMatchers(HttpMethod.POST, "/pessoas").permitAll()
		.antMatchers(HttpMethod.PUT, "/pessoas/{id}").permitAll()
		.antMatchers(HttpMethod.DELETE, "/pessoas/{id}").permitAll()
		.anyRequest().authenticated()
		.and().csrf().disable().cors();
	
	}

}
