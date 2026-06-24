# Shwe Casino 99 Static Source

This directory is the current static production source for `shwecasino99.com`.
It is intentionally not wired to the existing GitHub repo yet, because the
GitHub repo `lucasinavo-netizen/shwecasino99.com` contains a different Next.js
application and is not the live static site.

- Domain: `shwecasino99.com`
- Market: Myanmar
- Hub keyword: `online casino myanmar` (vol 590, KD 21)
- Spokes: 3
- Pages: 6

## Source Control

Use the local Git history in this directory as the source of truth until the
remote repo decision is made.

Do not add the existing GitHub repo as `origin` and push this source without
explicit approval. That would replace a different application.

## Deploy

```
./apply-domain.sh your-domain.com
vercel deploy --prod --yes
```

Always verify the formal domain after deployment:

```
curl -L -s https://shwecasino99.com/ | rg 'G-PXLF9Y5ZD6|googletagmanager|gtag'
```
