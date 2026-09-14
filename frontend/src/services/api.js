import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getEducation = () => axios.get(`${API_URL}/education`);
export const getSkills = () => axios.get(`${API_URL}/skills`);
export const getExperience = () => axios.get(`${API_URL}/experience`);
export const getCertifications = () => axios.get(`${API_URL}/certifications`);
export const submitContact = (data) => axios.post(`${API_URL}/contact`, data);
