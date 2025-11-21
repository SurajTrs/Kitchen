# Deployment Guide - Highlight Kitchen

## Backend Deployment (Render)

1. Go to [render.com](https://render.com)
2. Click **New +** → **Web Service**
3. Connect GitHub: `https://github.com/SurajTrs/Kitchen.git`
4. Settings:
   - Name: `highlight-kitchen-api`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node index.js`
5. Environment Variables:
   ```
   db_string=mongodb+srv://Kitchen:PFX04PpZsendstXs@cluster0.jhipyw9.mongodb.net/foodiii?retryWrites=true&w=majority
   ```
6. Deploy → Copy URL (e.g., `https://highlight-kitchen-api.onrender.com`)

## Frontend Deployment (Vercel)

1. Go to [vercel.com](https://vercel.com)
2. Import project from GitHub
3. Settings:
   - Framework: `Create React App`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Environment Variables:
   ```
   REACT_APP_API_URL=https://highlight-kitchen-api.onrender.com
   ```
5. Deploy

## Alternative: Netlify

1. Go to [netlify.com](https://netlify.com)
2. New site from Git
3. Settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
4. Environment Variables:
   ```
   REACT_APP_API_URL=https://highlight-kitchen-api.onrender.com
   ```
5. Deploy

## Post-Deployment

1. Update CORS in `backend/index.js`:
   ```javascript
   origin: [
     "http://localhost:3000",
     "https://your-vercel-app.vercel.app",
     "https://your-netlify-app.netlify.app"
   ]
   ```
2. Push changes to GitHub
3. Auto-deploy will trigger

## Live URLs
- Frontend: Will be provided after Vercel deployment
- Backend: Will be provided after Render deployment
- Database: MongoDB Atlas (Already configured)
