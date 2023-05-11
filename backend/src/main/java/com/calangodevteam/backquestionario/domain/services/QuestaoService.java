package com.calangodevteam.backquestionario.domain.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.calangodevteam.backquestionario.application.dtos.existent.QuestaoExistentDTO;
import com.calangodevteam.backquestionario.domain.models.Opcao;
import com.calangodevteam.backquestionario.domain.models.Questao2;
import com.calangodevteam.backquestionario.domain.repositories.Questao2Repository;

@Service
public class QuestaoService {
	
	@Autowired
	private Questao2Repository repo;
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	private ImageService imageService;

	@Value("${backquestionario.paginacao.size.generico.padrao}")
	private int pageSizeMaximoPermitido;

	public List<QuestaoExistentDTO> findAll(int page, int size, String sort, int temasAreasId) {

		if(size > pageSizeMaximoPermitido)
			throw new RuntimeException("PageSize não pode exceder " + pageSizeMaximoPermitido);

		if((sort.equals("asc") && sort.equals("desc")))
			throw new RuntimeException("Método de ordenação " + sort + " não suportado!");

		List<QuestaoExistentDTO> questoesDto = new ArrayList<>();

		
		//Seria de responsabilidade desse método decidir qual repositório usar com base nos argumentos?
		if(temasAreasId != 0){
			repo.findAllByTemasAreasId(PageRequest.of(page, size, Sort.by(Direction.fromString(sort), "id")), temasAreasId).forEach(
				questao -> questoesDto.add(modelMapper.map(questao, QuestaoExistentDTO.class)
			));
			return questoesDto;
		}

		repo.findAll(PageRequest.of(page, size, Sort.by(Direction.fromString(sort), "id"))).forEach(
			questao -> questoesDto.add(modelMapper.map(questao, QuestaoExistentDTO.class)
		));
		return questoesDto;
	}

	public QuestaoExistentDTO findById (Integer id){
		
		Optional<Questao2> optionalQuestao = repo.findById(id);
		if(optionalQuestao.isEmpty())
			throw new RuntimeException("Questão com id " + id + " não encontrada!");

		return modelMapper.map(optionalQuestao.get(), QuestaoExistentDTO.class);
	}

	
	
	/*

	public List<Questao> findByTema(Integer temaId) {
		
		return repo.findByTema(temaId);
	}
	
	public Questao create(Questao questao, String resp) {
		
		questao.getFiguras().forEach(figura -> {
			String aux = figura.getAtributo();
			figura.setAtributo(image.saveNuvem(aux));
		});
		
		Questao qaux = repo.save(questao);
		Opcao opcaoCorreta = new Opcao();
		qaux.getOpcoes().forEach(opcao -> {
			if(opcao.getTexto().equals(resp)) {
				opcaoCorreta.setId(opcao.getId());
				opcaoCorreta.setTexto(opcao.getTexto());
			}
		});
		qaux.setOpcao_correta(opcaoCorreta);
		repo.save(qaux);
		return qaux;
	}
	
	public String delete(Integer id) {

		Optional<Questao> questao = repo.findById(id);	
		if(questao.isPresent()) {
			repo.deleteById(id);
			return "Deletado com sucesso!";
		}
		else return "Erro ao deletar!";
	}
	 */
}
