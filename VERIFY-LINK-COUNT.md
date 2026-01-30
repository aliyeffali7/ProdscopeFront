# Link count – what to do when “nothing changes”

## 1. Restart and hard refresh

- Stop the frontend dev server (Ctrl+C), then start it again: `npm run dev` (or `yarn dev`).
- In the browser: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac) to hard refresh and clear cache.

## 2. Backend must be running

- Backend must be on **http://localhost:8000** (or change `API_BASE_URL` in `src/services/api.js` to match your backend URL).
- Test the endpoint in a terminal:
  ```bash
  curl -X POST http://localhost:8000/api/products/1/track_link_view/ -H "Content-Type: application/json" -d "{}"
  ```
  You should get something like: `{"product_id": 1, "link_view_count": 1}` (or a 404 if product 1 doesn’t exist). If this works, the backend is fine.

## 3. Check the request in the browser

1. Open your app (e.g. http://localhost:5173).
2. Press **F12** → open the **Network** tab.
3. Filter by **Fetch/XHR** (or leave all).
4. Click **“Go to the product”** on any product card (the purple button under the category).
5. In Network you should see:
   - A **POST** request to:  
     `http://localhost:8000/api/products/<id>/track_link_view/`
   - **Status 200** = success (link count incremented).
   - **Status 404** = product not found.
   - **Status (failed)** or **CORS error** = backend not reachable or CORS not allowed from your frontend origin.

## 4. Check the console

- Open **F12** → **Console**.
- Click **“Go to the product”** again.
- If you see: `track_link_view failed: ...` then the POST failed (wrong URL, CORS, or backend error). Fix the backend/URL/CORS and try again.

## 5. CORS (if the request fails in the browser)

- The backend must allow your frontend origin (e.g. `http://localhost:5173`) for **POST** on `/api/products/*/track_link_view/`.
- In Django for example, ensure CORS is configured (e.g. `django-cors-headers`) so that your frontend origin is allowed.

## Summary

- **Frontend:** Only the “Go to the product” button calls `trackLinkView(product.id)`; the card and hero/slider do not.
- **Backend:** Must respond to `POST /api/products/{id}/track_link_view/` with 200 and `{ "product_id": number, "link_view_count": number }`.
- **You:** Restart frontend, hard refresh, open a product detail page, click "Go to the product", then use Network + Console to confirm the POST is sent and succeeds.
