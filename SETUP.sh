#!/bin/bash

# Hi Beauty SPA - Quick Setup Script
# This script sets up both the Next.js frontend and Laravel backend

set -e

echo "================================"
echo "Hi Beauty SPA - Setup"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}→ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check prerequisites
print_step "Checking prerequisites..."

if ! command -v php &> /dev/null; then
    echo "❌ PHP is not installed. Please install PHP 8.2+"
    exit 1
fi
print_success "PHP found"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi
print_success "Node.js found"

if ! command -v pnpm &> /dev/null; then
    print_warning "pnpm not found, using npm instead"
    PKG_MANAGER="npm"
else
    PKG_MANAGER="pnpm"
    print_success "pnpm found"
fi

if ! command -v composer &> /dev/null; then
    echo "❌ Composer is not installed. Please install Composer"
    exit 1
fi
print_success "Composer found"

echo ""
print_step "Setting up Laravel backend..."

# Navigate to Laravel directory
if [ ! -d "laravel" ]; then
    echo "❌ laravel directory not found"
    exit 1
fi

cd laravel

# Check if .env exists
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        print_success "Created .env from .env.example"
    else
        echo "❌ .env.example not found"
        exit 1
    fi
fi

# Install Composer dependencies
if [ ! -d "vendor" ]; then
    print_step "Installing Composer dependencies..."
    composer install
    print_success "Composer dependencies installed"
else
    print_success "Composer dependencies already installed"
fi

# Generate app key if not set
if ! grep -q "APP_KEY=base64:" .env; then
    print_step "Generating application key..."
    php artisan key:generate
    print_success "Application key generated"
fi

# Run migrations if database exists
if [ -f "database/migrations" ]; then
    print_step "Running database migrations..."
    php artisan migrate --seed
    print_success "Database setup complete"
fi

# Navigate back to root
cd ..

echo ""
print_step "Setting up Next.js frontend..."

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    if [ -f ".env.local.example" ]; then
        cp .env.local.example .env.local
        print_success "Created .env.local from .env.local.example"
    fi
fi

# Install dependencies
if [ ! -d "node_modules" ]; then
    print_step "Installing Node dependencies with ${PKG_MANAGER}..."
    ${PKG_MANAGER} install
    print_success "Node dependencies installed"
else
    print_success "Node dependencies already installed"
fi

echo ""
echo "================================"
print_success "Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo ""
echo "1️⃣  Start the Laravel backend:"
echo "   cd laravel"
echo "   php artisan serve"
echo "   (runs on http://localhost:8000)"
echo ""
echo "2️⃣  In another terminal, start the Next.js frontend:"
echo "   ${PKG_MANAGER} dev"
echo "   (runs on http://localhost:3000)"
echo ""
echo "3️⃣  Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Admin: http://localhost:3000/admin/dashboard"
echo "   API: http://localhost:8000/api"
echo ""
print_warning "Make sure MySQL is running before starting the Laravel backend"
echo ""
