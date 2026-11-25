@echo off
setlocal enabledelayedexpansion

cd /d "C:\Dev\Projects\Cleaners"

echo ========================================
echo Pushing Sparkles From Dust to GitHub
echo ========================================
echo.

REM Check if we're authenticated with gh CLI first
where gh >nul 2>&1
if %errorlevel%==0 (
    echo Found gh CLI - checking authentication...
    for /f "tokens=*" %%a in ('gh api /user 2^>nul ^| findstr /i "login"') do set "GITHUB_USER=%%a"
)

REM Try npm install first
echo Step 1: Installing dependencies...
call "C:\Program Files\nodejs\npm.cmd" install
if %errorlevel% neq 0 (
    echo npm install failed. Please run manually in cmd.exe:
    echo   cd /d C:\Dev\Projects\Cleaners
    echo   npm install
)

echo.
echo Step 2: Setting up GitHub remote...
echo ========================================
echo Before pushing, you need to add the remote origin.
echo.
echo Options:
echo A) Create new repo on github.com and copy the URL here
echo B) Paste existing repo URL from GitHub
echo C) I'll create a script with instructions
echo.
echo Please type your GitHub remote URL (e.g., https://github.com/YOUR_USERNAME/sparkles-from-dust.git):
set /p GITHUB_URL=Enter remote URL:

if not "!GITHUB_URL!"=="" (
    echo Adding remote origin...
    git remote add origin "!GITHUB_URL!" 2>nul || (
        REM If add failed, try setting it directly
        git remote set-url origin "!GITHUB_URL!"
    )

    echo Pushing to GitHub...
    git branch -M main
    git push -u origin main --force-with-lease
) else (
    echo.
    echo You can complete this in cmd.exe with these commands:
    echo ========================================
    echo cd /d C:\Dev\Projects\Cleaners
    echo git remote add origin https://github.com/YOUR_USERNAME/sparkles-from-dust.git
    echo git branch -M main
    echo git push -u origin main --force-with-lease
    echo ========================================
    echo.
    echo Or use gh CLI if installed:
    echo   gh repo create sparkles-from-dust --public --source=. --remote=origin --push
)

echo.
echo Done! Check https://github.com/YOUR_USERNAME/sparkles-from-dust to verify.
