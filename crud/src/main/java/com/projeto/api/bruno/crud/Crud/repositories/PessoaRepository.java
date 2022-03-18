package com.projeto.api.bruno.crud.Crud.repositories;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.api.bruno.crud.Crud.entities.Pessoa;


public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

	Pessoa findByCpf(@NotNull String cpf);

}
