package com.example.portfolio.controller;
import com.example.portfolio.model.ContactMessage;
import com.example.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact_messages")
public class ContactMessageController {
    @Autowired
    private ContactMessageRepository repository;

    @GetMapping
    public List<ContactMessage> getAll() {
        return repository.findAll();
    }
    
    @PostMapping
    public ContactMessage create(@RequestBody ContactMessage entity) {
        return repository.save(entity);
    }
}
