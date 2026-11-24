This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Administrator access

Open `/admin`. Visitors see the login page; an authenticated administrator sees the dashboard at the same URL. Both `/admin/enquiries` and `/admin/inquiries` redirect there. The enquiries API checks the administrator session for every read and update.

For a local account, run `node scripts/setup-admin.mjs`. The generated credentials are saved in `.local/admin-login.txt`, with the password hash and session records in the same private, Git-ignored directory. To rotate the local account and revoke its sessions, run `node scripts/setup-admin.mjs --reset`. Set `ADMIN_SETUP_EMAIL` when running setup to choose a different login email.

For production, supply server-only `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` environment variables; local bootstrap credentials are intentionally ignored in production. The hash uses `scrypt:<salt>:<hex hash>` and can be obtained from the private setup configuration. Use HTTPS and a persistent, writable `ADMIN_DATA_DIR` (defaults to `.local`) on a single Node server. Multiple instances require a shared session/rate-limit store before deployment. A changed email or password hash invalidates existing sessions.

Sessions last eight hours and use HttpOnly, SameSite=Strict cookies (Secure in production). Login attempts are rate limited. Mutation endpoints require a matching Origin header. Logout revokes the server-side session.

After `npm run build`, run `node scripts/verify-admin.mjs` to verify login, redirects, authorization, session expiry, logout, update validation, persistence and rate limits. It starts a separate server on port 3101 with temporary credentials and synthetic enquiry records, and cleans them up afterwards. Set `ADMIN_TEST_PORT` if needed.
