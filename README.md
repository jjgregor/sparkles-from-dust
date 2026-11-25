# Sparkles From Dust - Cleaning Company Website

A modern cleaning company website with purple theme.

## Local Development

Since npm isn't working directly in PowerShell (Windows path issues), use one of these methods:

### Method 1: Command Prompt (Recommended)
1. Open `cmd.exe` (not PowerShell)
2. Navigate to the folder: `cd /d C:\Dev\Projects\Cleaners`
3. Run: `npm install && npm run dev`

### Method 2: Batch File
Double-click `start-cmd.bat` to install dependencies and start the dev server.

### Method 3: GitHub Pages Deployment (Recommended for production)
1. Create a GitHub repository called `sparkles-from-dust` or similar
2. Push this code there (requires git/npm working first)
3. Enable GitHub Pages in repo settings

## Build & Deploy

Once dependencies are installed, you can build for production:
```bash
npm run build
```

The production build serves statically from the `dist/` folder.

---

**Note:** The next conversation session will be able to run `npm install && npm run dev` normally without PowerShell path issues.
