package com.example.portfolio.model;
import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    private String institution;
    private String degree;
    private String duration;
    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

}
