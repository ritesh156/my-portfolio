package com.example.portfolio.controller;
import com.example.portfolio.model.Skill;
import com.example.portfolio.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/skills")
public class SkillController {
    @Autowired
    private SkillRepository repository;

    @GetMapping
    public List<Skill> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Skill create(@RequestBody Skill entity) {
        return repository.save(entity);
    }
}
