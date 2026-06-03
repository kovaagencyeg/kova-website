# Contact Form Setup for Vercel

The website contact form posts to `/api/contact`. That file is a Vercel Serverless Function using Nodemailer SMTP.

## 1) Add Vercel environment variables

In Vercel, open:

Project → Settings → Environment Variables

Add these variables to **Production**. Add them to **Preview** too if you are testing with preview deployment URLs.

```txt
CONTACT_TO=info@kovagency.com
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@kovagency.com
SMTP_PASS=your-email-password-or-app-password
```

After adding or changing variables, redeploy the project. Existing deployments do not automatically receive changed environment variables.

## 2) Provider examples

### Google Workspace / Gmail

Use an app password, not your normal Gmail password.

```txt
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=Google App Password
```

### Zoho Mail

```txt
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=Zoho app password or SMTP password
```

### Microsoft 365 / Outlook

```txt
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=mailbox password or app password
```

## 3) Test the API route

Open this URL in your browser after deployment:

```txt
https://YOUR-DOMAIN.vercel.app/api/contact
```

Expected response:

```json
{
  "ok": true,
  "endpoint": "/api/contact",
  "smtpConfigured": true,
  "contactToConfigured": true
}
```

If `smtpConfigured` is `false`, the form cannot send emails. Check `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` in Vercel.

## 4) Important Vercel note

If you test a preview deployment URL and Vercel Deployment Protection is enabled, unauthenticated visitors may receive `401 Unauthorized`. In that case, either test while authenticated, disable protection for the preview, or use the production domain.
