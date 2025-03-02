/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BM7uNM-c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B5jQMA_-.mjs';
export { renderers } from '../../renderers.mjs';

const $$NewBlog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "new blog", "desc": "desc" })}`;
}, "D:/MYWork/astroStart/regular-resonance/src/pages/case-studies/new_blog.astro", void 0);

const $$file = "D:/MYWork/astroStart/regular-resonance/src/pages/case-studies/new_blog.astro";
const $$url = "/case-studies/new_blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$NewBlog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
