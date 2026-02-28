@echo off
echo ========================================
echo  Client Project Portal - Starting...
echo ========================================
echo.
echo Backend will run on http://localhost:5000
echo Frontend will run on http://localhost:3000
echo.
echo Make sure backend/.env exists with MONGO_URI
echo.
cd /d "%~dp0"

if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)

echo.
echo Starting backend and frontend...
echo.
call npm start

pause

