package com.example.portfolio.controller;
import com.example.portfolio.model.Education;
import com.example.portfolio.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/education")
public class EducationController {
    @Autowired
    private EducationRepository repository;

    @GetMapping
    public List<Education> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Education create(@RequestBody Education entity) {
        return repository.save(entity);
    }
}
