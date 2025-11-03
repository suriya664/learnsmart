@echo off
echo ========================================
echo LearnSmart Academy - Push to GitHub
echo ========================================
echo.

set /p USERNAME="Enter your GitHub username: "
echo.

echo Adding remote repository...
git remote add origin https://github.com/%USERNAME%/learnsmart-academy.git
echo.

echo Setting main branch...
git branch -M main
echo.

echo Pushing to GitHub...
git push -u origin main
echo.

echo ========================================
echo Upload complete!
echo ========================================
echo.
echo Your repository is now on GitHub!
echo.
echo Next: Enable GitHub Pages
echo 1. Go to: https://github.com/%USERNAME%/learnsmart-academy
echo 2. Click Settings - Pages
echo 3. Source: main branch
echo 4. Click Save
echo.
echo Your site will be live at:
echo https://%USERNAME%.github.io/learnsmart-academy/
echo.
pause

