# ============================================
# Étape 1 : Build
# ============================================
FROM node:24 AS build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install --force

COPY --chown=node:node . .

# ============================================
# Arguments de build Next.js
# ============================================

ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ARG NEXT_PUBLIC_RESEND_API_KEY
ARG NEXT_PUBLIC_CONTACT_TO_EMAIL
ARG NEXT_PUBLIC_CONTACT_EMAIL
ARG NEXT_PUBLIC_WHATSAPP_RAW
ARG NEXT_PUBLIC_WHATSAPP_DISPLAY

# ============================================
# Variables d'environnement de build
# ============================================

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ENV NEXT_PUBLIC_RESEND_API_KEY=$NEXT_PUBLIC_RESEND_API_KEY
ENV NEXT_PUBLIC_CONTACT_TO_EMAIL=$NEXT_PUBLIC_CONTACT_TO_EMAIL
ENV NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL
ENV NEXT_PUBLIC_WHATSAPP_RAW=$NEXT_PUBLIC_WHATSAPP_RAW
ENV NEXT_PUBLIC_WHATSAPP_DISPLAY=$NEXT_PUBLIC_WHATSAPP_DISPLAY

ENV NEXT_TELEMETRY_DISABLED=1

# ============================================
# Build Next.js
# ============================================

RUN npm run build


# ============================================
# Étape 2 : Production
# ============================================
FROM node:24-alpine AS production

WORKDIR /app

# ============================================
# Application compilée
# ============================================

COPY --from=build --chown=node:node /app/.next ./.next

COPY --from=build --chown=node:node /app/public ./public

COPY --from=build --chown=node:node /app/package.json ./package.json

COPY --from=build --chown=node:node /app/node_modules ./node_modules

COPY --from=build --chown=node:node /app/next.config.ts ./next.config.ts

# ============================================
# Production
# ============================================

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# ============================================
# Variables Kintera disponibles en production
# ============================================

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ENV NEXT_PUBLIC_RESEND_API_KEY=$NEXT_PUBLIC_RESEND_API_KEY
ENV NEXT_PUBLIC_CONTACT_TO_EMAIL=$NEXT_PUBLIC_CONTACT_TO_EMAIL
ENV NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL

EXPOSE 3000

CMD ["npm", "run", "start"]