package com.samuel.dadosabertos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.samuel.dadosabertos.model.Legislatura;

/**
 * @author SamukaAlves000
 *
 */

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "legislaturas",path = "legislaturas")
public interface LegislaturaRepository extends JpaRepository<Legislatura, Long>{

}
