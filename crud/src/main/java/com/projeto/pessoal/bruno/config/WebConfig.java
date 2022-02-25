package com.projeto.pessoal.bruno.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

public class WebConfig extends WebMvcConfigurerAdapter{
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/robotpart/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");


    }

}
