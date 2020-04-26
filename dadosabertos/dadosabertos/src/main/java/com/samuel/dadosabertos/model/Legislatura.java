package com.samuel.dadosabertos.model;

import java.util.Set;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author SamukaAlves000
 *
 */

@Entity
@Table(name = "tbl_legislatura")
@Getter
@Setter
@ToString
public class Legislatura {
	

	/**
	 * ID da Tabela
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID_LEGISLATURA")
	private long idLegislatura;
	
	
	/**
	 * URI  da Legislatura
	 */
	@Column(name="URI_LEGISLATURA",nullable = false,length = 90)
	private String uri;
	
	/**
	 * Data do Início da Legislatura
	 */
	@Column(name="DATA_INICIO_LEGISLATURA",nullable = false,length = 10)
	private String dataInicio;
	
	/**
	 * Data do fim da Legislatura
	 */
	@Column(name="DATA_FIM_LEGISLATURA",nullable = false,length = 10)
	private String dataFim;
	
	/**
	 * Ano de eleição da Legislatura
	 */
	@Column(name="ANO_ELEICAO_LEGISLATURA",nullable = false)
	private long anoEleicao;
	
	/**
	 * Mapeamento 1xN
	 */
	@OneToMany(mappedBy = "legislatura", cascade = CascadeType.ALL)
	private Set<Deputado> deputados;
	
}
