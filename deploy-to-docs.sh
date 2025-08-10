#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if docs branch exists, if not create it
if ! git show-ref --verify --quiet refs/heads/docs; then
    echo "Creating docs branch..."
    git checkout --orphan docs
    git rm -rf .
else
    echo "Switching to docs branch..."
    git checkout docs
    git rm -rf . || true
fi

# Copy built files to root of docs branch
echo "Copying built files..."
cp -r dist/public/* .

# Add .nojekyll file to disable Jekyll processing
echo "Adding .nojekyll file..."
touch .nojekyll

# Add all files and commit
git add .
git commit -m "Deploy to GitHub Pages: $(date)"

echo "Deployment complete! Push to origin with: git push origin docs"
echo "Then set GitHub Pages source to 'docs' branch in repository settings."