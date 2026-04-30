# resume-brightai

A fork of [ralph-node](https://github.com/Laptopmini/ralph-node) that was prompted to build a website based on my resume using Bright.ai's styling, hosted on GitHub Pages.

### [Learn more about the orchestration of this project](https://github.com/Laptopmini/ralph-node#readme)

## Prompt

```
npm run maestro -- \
'Build a personal resume website for Paul-Valentin Mini using the content in `resume.md` and profile picture `profile.png` at the root of the repo. The site must be a React single-page application which has a workflow that builds and deploys to GitHub Pages on push to main, using "/resume-brightai" as a base path. I want the website to be themed to look exactly like https://bright.ai/. Try to include some of their gradient accents, which they use on buttons for example. I want you to include a section at the bottom describing how this website was AI generated using ralph-node, an orchestrated AI pipeline I designed and wrote myself, include a link to the GitHub repo and describe the workflow used to build the site from scratch.'
```

## License

Apache 2.0
