# sakshi-abhishek-engagement-invitation

This repository is a Vite/TanStack React site designed for deployment on Vercel.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Vercel deployment

1. Create a git repository and push the `main` branch to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. In Vercel settings, use:
   - Build command: `npm run build`
   - Output directory: leave blank (Vercel will use the generated `.vercel/output` folder)
4. Deploy the project.

### If you want to deploy directly from your machine

```bash
npm install
npx vercel login
npx vercel
```

## Notes

- The project already uses Vercel-compatible Nitro output.
- Do not commit `.vercel/output`, `dist`, or generated build artifacts.
- Pushing to the connected Git branch will trigger a new Vercel deployment.
# sakshi-abhishek-engagement-invitation
