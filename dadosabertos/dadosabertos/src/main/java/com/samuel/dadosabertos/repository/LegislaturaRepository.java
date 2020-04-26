package com.samuel.dadosabertos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.samuel.dadosabertos.model.Legislatura;

/**
 * @author SamukaAlves000
 *
 */

@RepositoryRestResource(collectionResourceRel = "legislaturas",path = "legislaturas")
public interface LegislaturaRepository extends JpaRepository<Legislatura, Long>{

}
