# Portfolio de Jonathan Simo Kuate

Site personnel bilingue (FR / EN) construit avec [Astro](https://astro.build), publié sur GitHub Pages.

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Modifier le contenu

Tout le contenu est dans `src/data/` :

- `profile.ts` : présentation, expériences, formations, compétences, certifications, langues.
- `projects.ts` : projets et études de cas (captures dans `src/assets/projects/`).

Le CV téléchargeable est `public/cv/Jonathan_Simo_Kuate_CV.pdf`.

## Mise en ligne

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages
(Settings → Pages → Source : GitHub Actions).
