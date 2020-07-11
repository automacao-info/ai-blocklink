# \<ai-blocklink>

A simple and super lightweight web component to create block links.

> This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Directory structure 

```text
├── LICENSE
├── README.md
├── ai-blocklink.js
├── custom-elements.json
├── demo
│   ├── card.css
│   └── index.html
├── index.js
├── package.json
└── src
    └── AiBlockLink.js
```

## Installation

```bash
npm i @automacao.info/ai-blocklink
```

## Usage

File `package.json`

```json
"dependencies": {
  "@automacao.info/ai-blocklink": "^1.0.0"
}
```

File `test.html`

```html
<link href="./demo/card.css" rel="stylesheet" />
<script type="module">
  import '@automacao.info/ai-blocklink';
</script>
<!-- Example Two blocks, one inside other -->
<ai-blocklink class="card" main-link="h2 a">
  <section>
    <p class="date">
      <a href="#date">
        <!--relative-time datetime="2020-05-10T16:30:00-08:00"></relative-time -->
        <time-ago datetime="2020-05-10T16:30:00-08:00"></time-ago>
      </a>
    </p>
    <h2><a href="#title">&ltai-blocklink&gt Demo</a></h2>
  </section>
  <ai-blocklink class="author-name">
    <img src="https://via.placeholder.com/36.png/00F/888?text=JP">
    <a href="#author">Author Name here</a>
  </ai-blocklink>
  <footer class="tags">
    <a class="category" href="#category_one">Category One</a>
    <a class="tag" href="#tag_one">Tag One</a>
    <a class="tag" href="#tag_two">Tag Two</a>
  </footer>
</ai-blocklink>
```

![View 01](view01.png)

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`

```bash
npm install
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
