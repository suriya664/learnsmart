@echo off
echo ========================================
echo LearnSmart Academy - Git Setup
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init
echo.

echo Step 2: Adding all files...
git add .
echo.

echo Step 3: Creating first commit...
git commit -m "Initial commit: LearnSmart Academy - Complete education platform with working filters"
echo.

echo ========================================
echo Git repository initialized successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Create repository on GitHub: https://github.com/new
echo    - Name it: learnsmart-academy
echo    - Make it PUBLIC
echo    - Do NOT add README or .gitignore
echo.
echo 2. Then run: git-push.bat
echo.
pause

