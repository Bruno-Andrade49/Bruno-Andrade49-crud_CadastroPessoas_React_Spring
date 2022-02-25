package com.projeto.pessoal.bruno.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.pessoal.bruno.crud.entities.Pessoa;
import com.projeto.pessoal.bruno.crud.repositorys.PessoaRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000",
methods = {RequestMethod.PUT, RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.OPTIONS}
)
public class PessoaController {
	

		@Autowired
		PessoaRepository pessoaRepository;

		
		//GET
		@GetMapping(path = "/pessoas")
		@ResponseStatus(value = HttpStatus.FOUND)
		public List<Pessoa> getAllPessoas() {
			return pessoaRepository.findAll();
		}

		
		//POST
		@PostMapping(path = "/cadastro")
		@ResponseStatus(value = HttpStatus.CREATED)
		public Pessoa criarPessoa(@RequestBody Pessoa pessoa) {
			return pessoaRepository.save(pessoa);
		}

		
		//DELETE
		@PutMapping(path = "/cadastro/{idPessoa}")
		@ResponseStatus(value = HttpStatus.OK)
		public void deletarPessoa(@PathVariable String idPessoa) {
			Pessoa pessoa = pessoaRepository.findById(idPessoa).get();
			pessoaRepository.delete(pessoa);
		}

		
		//EDIT
		@PutMapping(path = "/cadastro/{idPessoa}/edit")
		@ResponseStatus(value = HttpStatus.OK)
		public void editarPessoa(@PathVariable String idPessoa, @RequestBody Pessoa pessoa) {
			Pessoa pessoa02 = pessoaRepository.findById(idPessoa).get();
			pessoa02.setEmail(pessoa.getEmail());
			pessoa02.setNome(pessoa.getNome());

			pessoaRepository.save(pessoa02);

		}
}
