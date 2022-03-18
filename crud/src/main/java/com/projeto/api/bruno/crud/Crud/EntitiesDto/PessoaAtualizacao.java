package com.projeto.api.bruno.crud.Crud.EntitiesDto;

import javax.validation.constraints.NotNull;

import com.projeto.api.bruno.crud.Crud.entities.EstadoServico;
import com.projeto.api.bruno.crud.Crud.entities.Pessoa;

public class PessoaAtualizacao {
	
	@NotNull
	private String email;

	@NotNull
	private EstadoServico estado = EstadoServico.ALUNO;
	
	public PessoaAtualizacao(Pessoa pessoa) {
		this.email = pessoa.getEmail();
		this.estado = pessoa.getEstado();
	}

	public PessoaAtualizacao() {
		
	}

	public String getEmail() {
		return email;
	}

	public EstadoServico getEstado() {
		return estado;
	}
	
	public Pessoa converter() {
		return new Pessoa(email, estado);
	}
}
