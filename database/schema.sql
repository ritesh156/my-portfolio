CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS projects (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    technologies VARCHAR(500),
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    image_url VARCHAR(500),
    category VARCHAR(100),
    featured TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_projects_category (category),
    INDEX idx_projects_featured (featured)
);

CREATE TABLE IF NOT EXISTS education (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    institution VARCHAR(300) NOT NULL,
    degree VARCHAR(200) NOT NULL,
    field_of_study VARCHAR(200),
    start_year VARCHAR(10),
    end_year VARCHAR(10),
    cgpa VARCHAR(10),
    city VARCHAR(100),
    description TEXT,
    coursework TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skills (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    proficiency_level INT DEFAULT 0,
    display_order INT DEFAULT 0,
    INDEX idx_skills_category (category),
    INDEX idx_skills_order (display_order)
);

CREATE TABLE IF NOT EXISTS experience (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(200) NOT NULL,
    role VARCHAR(200) NOT NULL,
    start_date VARCHAR(50),
    end_date VARCHAR(50),
    description TEXT,
    technologies VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certifications (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    issuing_organization VARCHAR(200) NOT NULL,
    issue_date VARCHAR(50),
    credential_id VARCHAR(200),
    credential_url VARCHAR(500),
    certificate_image_url VARCHAR(500),
    description TEXT,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data

INSERT INTO projects (id, title, description, technologies, github_url, live_url, category, featured)
VALUES
(1, 'PDFMaster – Document Utility Platform',
 'A web-based document utility platform for merging, splitting, compressing, converting, and managing PDF files through a simple and responsive interface.',
 'ReactJS, Spring Boot, Java, SQL', NULL, NULL, 'Web Application', 1),
(2, 'ProductiView – Browser Productivity Analyzer',
 'A browser extension that analyzes browsing activity, tracks time spent on websites, categorizes usage, and provides productivity insights through an interactive dashboard.',
 'JavaScript, Chrome Extension APIs, ReactJS', NULL, NULL, 'Browser Extension', 1)
ON DUPLICATE KEY UPDATE
title = VALUES(title), description = VALUES(description),
technologies = VALUES(technologies), category = VALUES(category),
featured = VALUES(featured);

INSERT INTO education
(id, institution, degree, field_of_study, start_year, end_year, cgpa, city, description, coursework)
VALUES
(1, 'Chandigarh University, Punjab', 'B.E.', 'Computer Science & Engineering', '2023', '2027', '6.27', 'Punjab', NULL, 'OOPs, DBMS, SQL, Web Technologies'),
(2, 'Holy Mission School, Patna', 'Intermediate (CBSE) | Class XII', NULL, '2020', '2022', NULL, 'Patna', NULL, NULL),
(3, 'St. Michael’s High School, Patna', 'Matriculation (CBSE) | Class X', NULL, '2019', '2020', NULL, 'Patna', NULL, NULL)
ON DUPLICATE KEY UPDATE
institution = VALUES(institution), degree = VALUES(degree),
field_of_study = VALUES(field_of_study), start_year = VALUES(start_year),
end_year = VALUES(end_year), cgpa = VALUES(cgpa), city = VALUES(city),
description = VALUES(description), coursework = VALUES(coursework);

INSERT INTO skills (id, name, category, proficiency_level, display_order)
VALUES
(1, 'Java', 'Languages', 80, 1),
(2, 'JavaScript', 'Languages', 75, 2),
(3, 'HTML', 'Languages', 85, 3),
(4, 'CSS', 'Languages', 80, 4),
(5, 'SQL', 'Languages', 80, 5),
(6, 'ReactJS', 'Frameworks/Libraries', 70, 6),
(7, 'Spring Boot', 'Frameworks/Libraries', 65, 7),
(8, 'OOPs', 'Concepts', 85, 8),
(9, 'DBMS', 'Concepts', 80, 9),
(10, 'Git', 'Tools', 75, 10),
(11, 'GitHub', 'Tools', 80, 11)
ON DUPLICATE KEY UPDATE
name = VALUES(name), category = VALUES(category),
proficiency_level = VALUES(proficiency_level), display_order = VALUES(display_order);

INSERT INTO experience
(id, company, role, start_date, end_date, description, technologies)
VALUES
(1, 'Chandigarh University', 'Java Trainee', 'May 2025', 'June 2025',
 'Completed a six-week In-House Summer Training at Chandigarh University on “Elevating Java: From Concepts to Code.” Gained practical knowledge of Java programming, coding concepts, and problem-solving through hands-on training.',
 'Java, OOPs, Problem Solving')
ON DUPLICATE KEY UPDATE
company = VALUES(company), role = VALUES(role), start_date = VALUES(start_date),
end_date = VALUES(end_date), description = VALUES(description),
technologies = VALUES(technologies);

INSERT INTO certifications
(id, title, issuing_organization, issue_date, credential_id, credential_url, certificate_image_url, description, category)
VALUES
(1, 'AI Tools & AI Workshop', 'be10X', 'November 2025', NULL, NULL, NULL,
 'Successfully completed the AI Tools & ChatGPT Workshop by be10X. Gained practical exposure to using AI tools and ChatGPT for creating presentations, analysing data, coding, and debugging. The workshop focused on applying AI tools to complete tasks more efficiently and improve productivity in professional and technical work.',
 'AI'),
(2, 'Entrepreneurship Drive – IIT Kharagpur', 'Entrepreneurship Cell, IIT Kharagpur', 'September 2023', NULL, NULL, NULL,
 'Actively participated in the Pan-India Initiative of Entrepreneurship Cell, IIT Kharagpur: Entrepreneurship Awareness Drive – Local Startups Meet 2023. Participated as a student from Chandigarh University and gained exposure to entrepreneurship awareness and the startup ecosystem.',
 'Entrepreneurship'),
(3, 'Elevating Java: From Concepts to Code', 'Chandigarh University', 'June 2025', NULL, NULL, NULL,
 'Successfully completed 6-week In-House Summer Training 2025 at Chandigarh University on “Elevating Java: From Concepts to Code,” organized by the Department of Computer Science & Engineering.',
 'Java')
ON DUPLICATE KEY UPDATE
title = VALUES(title), issuing_organization = VALUES(issuing_organization),
issue_date = VALUES(issue_date), description = VALUES(description),
category = VALUES(category);

