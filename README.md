# Sparkles From Dust - Cleaning Company Website

A modern cleaning company website with purple theme and gradient design.

## Local Development

### Quick Start (Using Batch Files)

**Option 1: Double-click `start-dev.bat`**
- This will install dependencies and start the dev server automatically.

**Option 2: Command Prompt Manual**
1. Open `cmd.exe` (not PowerShell - PowerShell has Windows path issues)
2. Run these commands:
   ```cmd
   cd /d C:\Dev\Projects\Cleaners
   npm install && npm run dev
   ```

### Accessing the Site

Once running, open your browser to: http://localhost:3000

## Deploy to GitHub Pages

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Name: `sparkles-from-dust` (or your preferred name)
3. Description: "Modern cleaning company website"
4. Visibility: Public
5. **Do not** initialize with README
6. Click "Create repository"

### Step 2: Push Code to GitHub

Open `cmd.exe` and run:

```cmd
cd /d C:\Dev\Projects\Cleaners

REM Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sparkles-from-dust.git
git branch -M main
git push -u origin main --force-with-lease
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings tab → Pages
3. Source: Deploy from branch → `main` → Save
4. Custom domain (optional): Enter if you have one

Your site will be live at: `https://YOUR_USERNAME.github.io/sparkles-from-dust`

## Project Structure

- `src/` - React component source files
- `src/app/page.tsx` - Main homepage with all sections
- `src/components/` - Reusable components (Navbar, Hero, Services, etc.)
- `src/styles/` - CSS and Tailwind configuration
- `tailwind.config.ts` - Theme colors and custom utilities

## Contact Info (for testing)

- Email: person@email.com
- Phone: 555-555-5555

---

**Note:** This site is inspired by dust2glitter.com but with a modern redesign featuring a purple/lavender gradient theme.
