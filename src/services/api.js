const API_BASE_URL = 'http://localhost:8000/api';
const MEDIA_BASE_URL = 'http://localhost:8000';

// Helper function to build full image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith('http')) return imagePath;
  return `${MEDIA_BASE_URL}${imagePath}`;
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
    throw new Error(error.detail || error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// HERO SECTION
export const getHero = async () => {
  const response = await fetch(`${API_BASE_URL}/hero/`);
  return handleResponse(response);
};

// CATEGORIES
export const getCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories/`);
  return handleResponse(response);
};

export const getCategory = async (id) => {
  const response = await fetch(`${API_BASE_URL}/categories/${id}/`);
  return handleResponse(response);
};

// SUBCATEGORIES
export const getSubcategories = async (categoryId = null) => {
  let url = `${API_BASE_URL}/subcategories/`;
  if (categoryId && categoryId !== 'all') {
    url += `?category=${categoryId}`;
  }
  const response = await fetch(url);
  return handleResponse(response);
};

export const getSubcategory = async (id) => {
  const response = await fetch(`${API_BASE_URL}/subcategories/${id}/`);
  return handleResponse(response);
};

// PRODUCTS
export const getProducts = async (filters = {}) => {
  const params = new URLSearchParams();
  
  if (filters.category && filters.category !== 'all') {
    params.append('category', filters.category);
  }
  if (filters.subcategory && filters.subcategory !== 'all') {
    params.append('subcategory', filters.subcategory);
  }
  
  const url = `${API_BASE_URL}/products/${params.toString() ? `?${params.toString()}` : ''}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}/`);
  return handleResponse(response);
};

export const trackProductView = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}/track_view/`, {
    method: 'POST',
  });
  return handleResponse(response);
};

// MISSION SECTION
export const getMission = async () => {
  const response = await fetch(`${API_BASE_URL}/mission/`);
  return handleResponse(response);
};

// CONTACT FORM
export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return handleResponse(response);
};

export const getContactMessages = async () => {
  const response = await fetch(`${API_BASE_URL}/contact/`);
  return handleResponse(response);
};

export const getContactMessage = async (id) => {
  const response = await fetch(`${API_BASE_URL}/contact/${id}/`);
  return handleResponse(response);
};
