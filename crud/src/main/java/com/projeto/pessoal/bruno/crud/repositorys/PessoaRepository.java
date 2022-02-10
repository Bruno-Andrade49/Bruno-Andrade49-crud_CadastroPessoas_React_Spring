package com.projeto.pessoal.bruno.crud.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.projeto.pessoal.bruno.crud.entities.Pessoa;

@RepositoryRestResource(collectionResourceRel = "pessoa", path = "pessoa")
public interface PessoaRepository extends JpaRepository<Pessoa, String> {

}
