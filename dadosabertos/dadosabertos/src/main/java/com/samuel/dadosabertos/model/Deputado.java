package com.samuel.dadosabertos.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author SamukaAlves000
 *
 */

@Entity
@Table(name = "tbl_deputado")
@Getter
@Setter
@ToString

public class Deputado {
	
	/**
	 * ID da Tabela
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID_DEPUTADO")
	private long id;
	
	/**
	 * URI do Deputado
	 */
	@Column(name="URI_DEPUTADO",nullable = false,length = 90)
	private String uri;
	
	/**
	 * Nome do Deputado
	 */
	@Column(name="NOME_DEPUTADO",nullable = false,length = 45)
	private String nome;
	
	/**
	 * Sigla do partido do Deputado
	 */
	@Column(name="SIGLA_PARTIDO_DEPUTADO",nullable = false,length = 20)
	private String siglaPartido;
	
	/**
	 * URI do partido do Deputado
	 */
	@Column(name="URI_PARTIDO_DEPUTADO",nullable = false,length = 90)
	private String uriPartido;
	
	/**
	 * Sigla da UF do Deputado
	 */
	@Column(name="SIGLA_UF_DEPUTADO",nullable = false,length = 3)
	private String siglaUf;
	
	/**
	 * URL da foto do Deputado
	 */
	@Column(name="URL_FOTO_DEPUTADO",nullable = false,length = 90)
	private String urlFoto;
	
	/**
	 * Email do Deputado
	 */
	@Column(name="EMAIL_DEPUTADO",nullable = false,length = 90)
	private String email;
	
	/**
	 * Mapeamento
	 */
	@ManyToOne
	@JoinColumn(name = "ID_LEGISLATURA", nullable = false)
	private Legislatura legislatura;

}
