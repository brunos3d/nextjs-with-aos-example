# nextjs-with-aos-example

🔺 NEXT.JS - Example project using Next.js with [Animate On Scroll Library](https://www.npmjs.com/package/aos).

### 🚀 [Demo](https://nextjs-with-aos-example.vercel.app/)

## 💬 Explanations

This project was created from the need to implement `reveal scroll animations` in projects using [Next.js](https://nextjs.org/).
As simple as it sounds, most of the time it becomes a headache when you start running into performance issues from multiple additions of event listeners to your site's DOM.
One solution is to externalize this responsibility using [AOS](https://www.npmjs.com/package/aos).
However this has some points of attention such as for example:
- [Initialize AOS](https://github.com/BrunoS3D/nextjs-with-aos-example/blob/461faf6325f8599ee09f226d15774c8905e2fdab/src/pages/_app.tsx#L10) with your page
- [Infer styles](https://github.com/BrunoS3D/nextjs-with-aos-example/blob/461faf6325f8599ee09f226d15774c8905e2fdab/src/pages/_document.tsx#L18) for AOS to work on browsers whose javascript has been disabled

With this I decided to create a template that helps me in creating projects with next using everything that is best created by my friend [João Pedro Schmitz](https://github.com/jpedroschmitz).

## 🚀 Getting started

The best way to start with this template is using `create-next-app`.

```
npx create-next-app ts-next -e https://github.com/brunos3d/nextjs-with-aos-example
```

If you prefer you can clone this repository and run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `yarn dev`;

To view the project open `http://localhost:3000`.

**After your pull request is merged**, you can safely delete your branch.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

---

Template made by [João Pedro Schmitz](https://github.com/jpedroschmitz)

AOS Implementations made with 💜 by [Bruno Silva](https://github.com/brunos3d)
