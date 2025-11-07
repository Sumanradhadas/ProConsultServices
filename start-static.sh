#!/bin/bash
# Simple script to run the static site locally

echo "🚀 Starting ProConsult Services static site..."
echo ""
echo "Building the site..."
npx vite build

echo ""
echo "✅ Build complete!"
echo ""
echo "Starting preview server on http://localhost:5000"
npx vite preview --port 5000 --host 0.0.0.0
