# Vasilis Vasileiou — Portfolio

A calm, mountain-themed portfolio: misty ridges, pine forests, wild horses on the meadow, and a campfire at basecamp — with a touch of code (terminal prompts, a `tree` of skills, a `git log` trail and elevation profiles on the projects).

Everything lives in **one file: `index.html`** — plain HTML, CSS and JavaScript. No build step, no npm.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5173
```

and visit http://localhost:5173.

## Publish on GitHub Pages

1. **Make the repository public** (Settings → General → Danger Zone). Pages on private repositories needs a paid plan.
2. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch **main**, folder **/ (root)** → Save.
3. After a minute the site is live at `https://vasilisvas1.github.io/vassilisvassileiou-portfolio/`.

Every push to `main` (for example with `./commit.sh "message"`) republishes the site.

### Custom domain

1. **Settings → Pages → Custom domain**: enter your domain and save. GitHub commits a `CNAME` file to `main`, so run `git pull` before your next push.
2. At your domain registrar, point DNS to GitHub Pages:
   - apex domain (`example.com`): `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` subdomain: `CNAME` to `vasilisvas1.github.io`
3. Once the certificate is issued, tick **Enforce HTTPS**.

## Editing content

Everything is in `index.html`, marked with section comments:

| What | Where |
| --- | --- |
| Hero text | `HERO` section |
| Skills (`tree ~/backpack`), education, work | `ABOUT` section |
| Projects | `PROJECTS` section — copy an `<article class="card">` block to add one |
| Contact form | `CONTACT` section; EmailJS keys are in the `EMAILJS` object in the script |
| Colours & fonts | `:root` variables at the top of the `<style>` block |
| Mountains | `RANGES` in the script (heights, peaks, trees, snow, horses) |

The contact form sends email through [EmailJS](https://www.emailjs.com/). Its keys are public by design (every visitor's browser receives them), so restrict them to your domain in the EmailJS dashboard.
