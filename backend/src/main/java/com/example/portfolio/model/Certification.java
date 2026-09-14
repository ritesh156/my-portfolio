package com.example.portfolio.model;
import jakarta.persistence.*;

@Entity
@Table(name = "certifications")
public class Certification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    private String title;
    private String provider;
    private String issuedDate;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String certificateUrl;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }
    public String getIssuedDate() { return issuedDate; }
    public void setIssuedDate(String issuedDate) { this.issuedDate = issuedDate; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCertificateUrl() { return certificateUrl; }
    public void setCertificateUrl(String certificateUrl) { this.certificateUrl = certificateUrl; }

}
