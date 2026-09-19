#!/bin/bash

set -e

echo "Building Docker image for production..."

docker build \
  --build-arg NEXT_PUBLIC_SITE_URL="https://kintera.techcoach360.com" \
  --build-arg NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="YOUR_NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION" \
  --build-arg NEXT_PUBLIC_RESEND_API_KEY="" \
  --build-arg NEXT_PUBLIC_CONTACT_TO_EMAIL="kintcamarapro@gmail.com" \
  --build-arg NEXT_PUBLIC_CONTACT_EMAIL="kintcamarapro@gmail.com" \
  --build-arg NEXT_PUBLIC_WHATSAPP_RAW="212723500308" \
  --build-arg NEXT_PUBLIC_WHATSAPP_DISPLAY="+212 723 500 308" \
  --no-cache \
  -f Dockerfile \
  -t kintera:frontend \
  .

echo "Docker image built successfully."