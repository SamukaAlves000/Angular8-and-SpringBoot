package com.samuel.dadosabertos.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

/**
 * @author SamukaAlves000
 *
 */

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{

	@Autowired
	private EntityManager entityManage;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		
		/* expor os IDs das entidades no response
		config.exposeIdsFor(Deputado.class);
		config.exposeIdsFor(Legislatura.class);
		Logo abaixo código que mapeia todas as entidades através do JAVA 8*/
		
		config.exposeIdsFor(entityManage.getMetamodel().getEntities().stream()
				.map(Type:: getJavaType)
				.toArray(Class[] :: new));	
	}
}
