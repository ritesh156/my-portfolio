package com.example.portfolio.controller;
import com.example.portfolio.model.Certification;
import com.example.portfolio.repository.CertificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/certifications")
public class CertificationController {
    @Autowired
    private CertificationRepository repository;

    @GetMapping
    public List<Certification> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public Certification create(@RequestBody Certification entity) {
        return repository.save(entity);
    }
}
