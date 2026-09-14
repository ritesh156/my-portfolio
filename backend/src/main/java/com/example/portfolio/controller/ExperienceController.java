package com.example.portfolio.controller;
import com.example.portfolio.model.Experience;
import com.example.portfolio.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/experience")
public class ExperienceController {
    @Autowired
    private ExperienceRepository repository;

    @GetMapping
    public List<Experience> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Experience create(@RequestBody Experience entity) {
        return repository.save(entity);
    }
}
