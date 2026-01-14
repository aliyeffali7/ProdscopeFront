# ProdScope - Affiliate Marketing Website

A modern React-based affiliate marketing website similar to ThisIsWhyImBroke.com.

## Features

- **Category Navigation**: Filter products by category
- **Product Grid**: Beautiful product cards with images, descriptions, and prices
- **External Links**: Click on any product card to open the affiliate link in a new tab
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx          # Navigation bar with categories
  │   ├── ProductCard.jsx     # Individual product card component
  │   └── ProductList.jsx     # Product grid container
  ├── data/
  │   └── products.js         # Sample product data
  ├── App.jsx                 # Main app component
  ├── main.jsx                # React entry point
  └── index.css               # Global styles
```

## Customization

### Adding Products

Edit `src/data/products.js` to add or modify products. Each product should have:
- `id`: Unique identifier
- `title`: Product name
- `description`: Product description
- `price`: Product price (string format)
- `image`: Image URL
- `link`: Affiliate link URL
- `category`: Product category (must match one of the categories)

### Adding Categories

Add new categories to the `categories` array in `src/data/products.js`.

## Technologies Used

- React 18
- Vite
- CSS3

