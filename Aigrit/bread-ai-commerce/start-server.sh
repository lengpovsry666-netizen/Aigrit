#!/bin/bash
# AiGrit Website Local Server Setup
# Run this script to start a local web server

echo "🚀 Starting AiGrit Website Server..."
echo ""
echo "Available options:"
echo "1. Python 3 (http.server)"
echo "2. Python 2 (SimpleHTTPServer)"
echo "3. Node.js (http-server)"
echo ""

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Try Python 3 first (preferred)
if command -v python3 &> /dev/null; then
    echo "✅ Starting Python 3 server..."
    echo "🌐 Visit: http://localhost:8000"
    echo "📝 Press Ctrl+C to stop"
    echo ""
    python3 -m http.server 8000
    exit 0
fi

# Try Python 2
if command -v python &> /dev/null; then
    echo "✅ Starting Python 2 server..."
    echo "🌐 Visit: http://localhost:8000"
    echo "📝 Press Ctrl+C to stop"
    echo ""
    python -m SimpleHTTPServer 8000
    exit 0
fi

# Try Node.js
if command -v http-server &> /dev/null; then
    echo "✅ Starting Node.js server..."
    echo "🌐 Visit: http://localhost:8080"
    echo "📝 Press Ctrl+C to stop"
    echo ""
    http-server -p 8080
    exit 0
fi

echo "❌ No suitable server found!"
echo "Please install one of the following:"
echo "  - Python 3 (usually pre-installed)"
echo "  - Python 2 (usually pre-installed)"
echo "  - Node.js (https://nodejs.org)"
echo ""
echo "Or manually open index.html in your browser"
