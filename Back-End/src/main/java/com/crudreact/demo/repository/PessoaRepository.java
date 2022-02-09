package com.crudreact.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudreact.demo.entities.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
