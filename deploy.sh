#!/bin/bash

echo "🚀 Starting Deployment Process for Home Cover..."

# 1. Verification of environment
echo "🔍 Checking environment..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

node -v
npm -v

# 2. Building the project
echo "📦 Building project (Static Export)..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build Successful!"
  echo "📂 Static files are ready in 'out/' directory."
  echo ""
  echo "📝 Instructions for OVH Upload:"
  echo "1. Connect to your OVH FTP (FileZilla or other)"
  echo "2. Navigate to 'www/' directory on the server"
  echo "3. Upload the CONTENTS of the local 'out/' folder to 'www/'"
  echo "   (Make sure .htaccess is included)"
  echo ""
  echo "🎉 Deployment preparation complete!"
else
  echo "❌ Build Failed. Please check the errors above."
  exit 1
fi
