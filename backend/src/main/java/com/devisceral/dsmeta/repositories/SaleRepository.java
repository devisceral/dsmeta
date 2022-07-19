package com.devisceral.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devisceral.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
