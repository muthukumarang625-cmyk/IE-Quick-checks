# IE Mock Test

A static mock-test web app for Industrial Engineering placements. No build step, no dependencies.

**Subjects:** Production & Operations Management, Supply Chain Management, Lean & Six Sigma, Total Quality Management, Work System Design
**Levels:** Easy, Medium, Hard, with a concept filter per subject. Instant feedback, explanations, review of mistakes, best scores saved in the browser.

## Run locally
Open `index.html` in a browser.

## Deploy on GitHub Pages
1. Create a new repository and upload all files (including the `.github` folder).
2. Go to **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`; the site goes live at `https://<username>.github.io/<repo>/`.

(Alternative: Settings → Pages → Deploy from branch → `main` / root.)

## Add questions
Edit `questions.js` and add a line:
`Q(SUBJECT, "Easy|Medium|Hard", "Concept", "Question?", ["A","B","C","D"], correctIndex, "Explanation"),`
