#!/bin/bash
# apply-domain.sh - replace mm-08-online-casino-myanmar.example.com with real domain
set -euo pipefail
if [ -z "${1:-}" ]; then
  echo "Usage: ./apply-domain.sh your-domain.com"
  exit 1
fi
NEW="$1"
echo "Replacing mm-08-online-casino-myanmar.example.com -> $NEW ..."
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" -o -name "*.md" \) \
  -not -path "./.git/*" \
  -exec sed -i.bak "s|mm-08-online-casino-myanmar.example.com|$NEW|g" {} \;
find . -name "*.bak" -delete
echo "Done."
