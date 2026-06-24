# Shwe Casino 99 Static Source

This directory is the current static production source for `shwecasino99.com`.
It is mirrored to `lucasinavo-netizen/shwecasino99.com` on the
`production-static-source` branch.

The repository `main` branch is a different Next.js application and must not be
used as the production source for the live static site.

- Domain: `shwecasino99.com`
- Market: Myanmar
- Hub keyword: `online casino myanmar` (vol 590, KD 21)
- Spokes: 3
- Pages: 6

## Source Control

Use `production-static-source` as the source branch for this static site.

Do not push this static source to `main`. That would replace a different
application. Vercel production is not rebound to this branch yet.

## Deploy

```
./apply-domain.sh your-domain.com
vercel deploy --prod --yes
```

Always verify the formal domain after deployment:

```
curl -L -s https://shwecasino99.com/ | rg 'G-PXLF9Y5ZD6|googletagmanager|gtag'
```
