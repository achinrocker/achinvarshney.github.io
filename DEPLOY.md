# Deploying to GitHub Pages

## What’s already set up

- **Vite `base`**: Default is `"/"` for a repo named `achinvarshney.github.io`. For a project-page repo (e.g. `portfolio_website`), set the env when building:  
  `GITHUB_PAGES_BASE=/portfolio_website/ npm run build`
- **404.html**: The build copies `index.html` to `404.html` so direct links and refreshes work with React Router on GitHub Pages.

## Option A: Deploy from the same repo (e.g. `achinvarshney.github.io`)

1. **Create the repo** (if needed):  
   On GitHub, create a repo named **`achinvarshney.github.io`** (no other name for a user site).

2. **Build the site** (from this folder, `achinvarshney.github.io`):
   ```bash
   npm run build
   ```

3. **Push the build output**  
   Push the contents of the **`dist`** folder to the **`main`** branch (or the branch you use for GitHub Pages).  
   Common ways:
   - **gh-pages package**:  
     `npx gh-pages -d dist`
   - **Or** use the **GitHub Actions** workflow below so every push to `main` deploys.

4. **Turn on GitHub Pages**  
   Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** (or **gh-pages** if you used `gh-pages`) → **/ (root)** → Save.  
   The site will be at **https://achinvarshney.github.io**.

---

## Option B: Deploy with GitHub Actions (recommended)

This builds and deploys on every push to `main`.

1. **Create the workflow file**  
   In your repo, create:

   **`.github/workflows/deploy-pages.yml`**

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
             cache: "npm"
             cache-dependency-path: achinvarshney.github.io/package-lock.json

         - name: Install and build
           run: |
             cd achinvarshney.github.io
             npm ci
             npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: achinvarshney.github.io/dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deploy.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deploy
           uses: actions/deploy-pages@v4
   ```

2. **If your repo is not `achinvarshney.github.io`** (e.g. repo name is `portfolio_website`):
   - In the **Install and build** step, set the base path before building:
     ```yaml
     - name: Install and build
       run: |
         cd achinvarshney.github.io
         npm ci
         export GITHUB_PAGES_BASE="/portfolio_website/"
         npm run build
     ```
   - In **Vite**, the config already uses `process.env.GITHUB_PAGES_BASE ?? "/"`, so this will make assets load correctly under `https://achinvarshney.github.io/portfolio_website/`.

3. **Enable GitHub Pages**  
   Repo → **Settings** → **Pages** → Build and deployment: **GitHub Actions** → Save.

4. **Push to `main`**  
   After the workflow runs, the site will be at the URL shown in the **Environments** → **github-pages** (or **Settings** → **Pages**).

---

## If your site lives in a different folder

If you move the app out of `achinvarshney.github.io/` (e.g. everything is at the repo root):

- In the workflow, remove the `cd achinvarshney.github.io` and use `./package-lock.json` and `./dist`.
- Adjust the **path** in **Upload artifact** to `dist` (or your actual output directory).

---

## Summary of code changes made for GitHub Pages

1. **`vite.config.ts`**
   - `base` set from `process.env.GITHUB_PAGES_BASE ?? "/"` so project-page repos can use a subpath.
   - A small plugin copies `index.html` to `404.html` during build so client-side routes work on GitHub Pages.

No changes were required in your React Router setup; `BrowserRouter` will work as long as `404.html` is deployed as above.
