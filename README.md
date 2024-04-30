# Astro Tailwind Flowbite 

Site use Astro Tailwind and Flowbite. A CMS will be added at a later date.

This uses all the great features of Astro like View Transitions API support, automatic asset optimization, better build output, and more.


## Getting Started

- Clone or fork this repo.
- Run `npm install` to install all the dependencies.
- Run `npm run dev` to start the dev server.
- You can then view the site at [http://localhost:4321/](http://localhost:4321/).

## Changing Site Contents

Most of the site data lives in `src/data/site.json`. You can change the site title, description, social media links, and more there. Make sure to use a JSON linter in case you make any mistakes!

## Adding Pages

Add pages in the `src/pages` directory. Create a new file named `pagename.astro` and import the Layout component and some variables into your new page like so:

```html
---
import Layout from "../layouts/Layout.astro";
import HeaderSmall from "../components/HeaderSmall.astro";

const title = "Contact";
const subtitle = "Contact me";
---

<Layout title="Contact">
  <div>
    <HeaderSmall title="{title}" subtitle="{subtitle}" />
  </div>
  <main>
    <div class="container">CONTENT HERE</div>
  </main>
</Layout>
```

**Also note:** you'll need to add the page to `src/data/site.json` in the `pages` array for the page to show up in the navigation, but you don't have to if you don't want it in the nav.

## Component Library

I'm using the Flowbite UI component library, which uses Tailwind CSS. You can find components [here](https://flowbite.com/docs/components/accordion/). If you'd like to add components, simply add them to the `src/components` directory and import them into your pages.

## Site Logo

Replace the image in `src/assets/logo.png` with your own logo. If it's not square, you'll need to adjust the `width` and `height` in the `src/components/Nav.astro` file on line 55.

## Site Favicon

Replace the image in `public/favicon.svg` with your own favicon.

## Site Colors

Colors for primary, secondary, and accent are set in the `tailwind.config.cjs` file. You can change them there to whatever you'd like. A Tailwind palette or even a hex or RGB value will work.

## Deployment

The easiest way to deploy a site like this is by using a service like Vercel, Cloudflare, or Netlify. Simply set up a free account on one of them, authorize your GitHub account, and grant access to all or selected repositories. From there, it should be as simple as setting up a new project in the dashboard; these services should handle the rest.



## Guidelines


- Please use [Tailwind](https://tailwindcss.com/) classes for styling.
- Please use [Astro](https://astro.build/) components for HTML.
- Please use [Flowbite UI](https://flowbite.com/) components for HTML.
- If you're submitting a custom component (not in the current Flowbite UI library), please prepend `Custom` to the component name, e.g., `src/components/CustomImageScroll.astro`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
