package com.example.calango.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.calango.model.Questao;

public interface QuestaoRepository extends JpaRepository<Questao, Integer>{
	
	List<Questao> findByOrderByTemaNomeAsc();

}
