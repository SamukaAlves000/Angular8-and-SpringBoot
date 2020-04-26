package com.samuel.dadosabertos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.samuel.dadosabertos.model.Deputado;

/**
 * @author SamukaAlves000
 *
 */

@RepositoryRestResource(collectionResourceRel = "deputados",path = "deputados")
public interface DeputadoRepository extends JpaRepository<Deputado, Long>{

}
