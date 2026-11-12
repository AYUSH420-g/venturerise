#!/bin/bash

# ==============================================================================
# VENTURERISE — Full-Stack Launcher (React + Node.js)
# ==============================================================================

set -e

# Terminal Colors
CYAN='\033[0;36m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo -e "${BLUE}${BOLD}"
echo "=========================================================="
echo "           🚀 VENTURERISE — FULL-STACK LAUNCHER           "
echo "=========================================================="
echo -e "${NC}"

# Check Node.js and npm
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Error: Node.js is not installed. Please install Node.js (v18+) to proceed.${NC}"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}Error: npm is not installed.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${CYAN}• Node.js version:${NC} ${NODE_VERSION}"
echo -e "${CYAN}• Workspace:${NC} $(pwd)"

# Install dependencies if node_modules missing
if [ ! -d "node_modules" ]; then
    echo -e "\n${YELLOW}⚡ node_modules not found. Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencies installed successfully.${NC}"
fi

MODE="${1:-prod}"

if [ "$MODE" = "--dev" ] || [ "$MODE" = "dev" ]; then
    echo -e "\n${BOLD}${CYAN}▶ Starting in DEVELOPMENT mode (Vite + Node API)...${NC}"
    echo -e "${GREEN}• Backend API running at:${NC} http://localhost:5050"
    echo -e "${GREEN}• Frontend Dev running at:${NC} http://localhost:5173"
    echo -e "${YELLOW}Press [Ctrl+C] anytime to stop all servers.${NC}\n"

    # Trap to kill both processes on exit
    cleanup() {
        echo -e "\n${BLUE}Stopping development servers...${NC}"
        kill $(jobs -p) 2>/dev/null || true
        exit 0
    }
    trap cleanup SIGINT SIGTERM EXIT

    # Start Backend API in background
    node server/index.js &
    BACKEND_PID=$!

    # Start Vite Dev Server
    npx vite --host 0.0.0.0 --port 5173 &
    FRONTEND_PID=$!

    wait
else
    echo -e "\n${BOLD}${CYAN}▶ Building fresh production assets with Vite...${NC}"
    npm run build
    echo -e "${GREEN}✓ Frontend built successfully into ./dist${NC}"

    echo -e "\n${BOLD}${GREEN}==========================================================${NC}"
    echo -e "${BOLD}${GREEN}  VentureRise is LIVE at:  ${CYAN}http://localhost:5050        ${NC}"
    echo -e "${BOLD}${GREEN}  REST API endpoints at:   ${CYAN}http://localhost:5050/api    ${NC}"
    echo -e "${BOLD}${GREEN}==========================================================${NC}"
    echo -e "${YELLOW}Press [Ctrl+C] to stop the server.${NC}\n"

    # Execute Node.js Express server
    exec node server/index.js
fi
