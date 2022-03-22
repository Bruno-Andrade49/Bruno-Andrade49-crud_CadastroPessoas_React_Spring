package com.projeto.api.bruno.crud.Crud.controller;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.api.bruno.crud.Crud.EntitiesDto.PessoaAtualizacao;
import com.projeto.api.bruno.crud.Crud.EntitiesDto.PessoaDto;
import com.projeto.api.bruno.crud.Crud.entities.Pessoa;
import com.projeto.api.bruno.crud.Crud.repositories.PessoaRepository;

@RestController
@RequestMapping(path = "/pessoas")
public class PessoaController {

	@Autowired
	PessoaRepository pessoaRepository;

	@CrossOrigin
	@GetMapping
	public List<Pessoa> listarPessoas(
			@Valid @PageableDefault(sort = "cpf", direction = Direction.DESC, size = 10) ) {
		List<Pessoa> pessoas = pessoaRepository.findAll();
		return pessoas;
	}

	@CrossOrigin
	@PostMapping
	public ResponseEntity<Pessoa> addPessoa(@Valid @RequestBody(required = true) PessoaDto pessoa) {

		Pessoa pessoaEnt = pessoa.converter();

		pessoaRepository.save(pessoaEnt);

		return ResponseEntity.ok().build();
	}

	@CrossOrigin
	@PutMapping("/{cpf}")
	@Transactional
	public ResponseEntity<Pessoa> editarPessoa(@Valid @PathVariable String cpf,
			@RequestBody(required = true) PessoaAtualizacao pessoaAtualizacao) {

		Pessoa pessoa = pessoaRepository.findByCpf(cpf);
		pessoa.setEmail(pessoaAtualizacao.converter().getEmail());
		pessoa.setEstado(pessoaAtualizacao.converter().getEstado());

		return ResponseEntity.ok().build();

	}

	@CrossOrigin
	@DeleteMapping("/{cpf}")
	@Transactional
	public ResponseEntity<Pessoa> deletarPessoa(@PathVariable String cpf) {
		Pessoa pessoa = pessoaRepository.findByCpf(cpf);
		pessoaRepository.delete(pessoa);

		return ResponseEntity.ok().build();
	}

}
