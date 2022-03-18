package com.projeto.api.bruno.crud.Crud.EntitiesDto;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.projeto.api.bruno.crud.Crud.entities.EstadoServico;
import com.projeto.api.bruno.crud.Crud.entities.Pessoa;

public class PessoaDto {

	@NotNull @Id
	private String cpf;

	@NotNull
	private String nome;

	@NotNull
	private String email;

	@NotNull
	private EstadoServico estado;

	public PessoaDto(Pessoa pessoa) {
		this.cpf = pessoa.getCpf();
		this.nome = pessoa.getNome();
		this.email = pessoa.getEmail();
		this.estado = pessoa.getEstado();
	}

	public PessoaDto() {

	}

	public EstadoServico getEstado() {
		return estado;
	}

	public String getCpf() {
		return cpf;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public Pessoa converter() {
		return new Pessoa(cpf, nome, email, estado);
	}

}
