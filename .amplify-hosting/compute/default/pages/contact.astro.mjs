/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DWwxT_go.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_FFqXFnZm.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_DqtUlNMW.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const page$1 = "Contact";
const seo_title = "Simbased | Get in touch";
const seo_desc = "Contact Simbased today to discuss your engineering consulting needs and benefit from personalized solutions driving your business forward.";
const title = "Let's solve challenges together";
const email = "info@simbased.com";
const bg_hero = "/images/contact/contact.png";
const map_title = "Where are we based?";
const we_based = [{"city":"Austin, USA","address":"2028 E Ben White Blvd, Austin, TX 78741, USA"},{"city":"Ljubljana, Slovenia","address":"Einspielerjeva ulica 6, 1000 Ljubljana, Slovenija"},{"city":"Vienna, Austria","address":"Sechshauser Str. 58-74"}];
const Data = {
  page: page$1,
  seo_title,
  seo_desc,
  title,
  email,
  bg_hero,
  map_title,
  we_based,
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Data.seo_title, "desc": Data.seo_desc, "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[60px] lg:h-[96px]" data-astro-cid-uw5kdbxl></div> <section id="el-hero" class="w-screen h-[calc(100vh-70px)] bg-cover bg-blend-multiply bg-no-repeat bg-right-bottom overflow-x-hidden max-w-screen relative isolate" data-astro-cid-uw5kdbxl> <div class="left-1/2 lg:top-1/2 transform lg:-translate-y-1/2 w-full container -translate-x-1/2 overflow-visible absolute flex flex-col items-start lg:items-start py-5 z-30 text-foreground lg:text-white pt-10" data-astro-cid-uw5kdbxl> <p class="preheader mb-1" data-astro-cid-uw5kdbxl>Contact</p> <h1 class="lg:text-white mb-2 max-w-lg" data-astro-cid-uw5kdbxl> ${Data.title} </h1> <div class="flex flex-col md:flex-row justify-center gap-4 lg:gap-8 mt-1 lg:mt-12" data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> <p class="mb-1" data-astro-cid-uw5kdbxl>Email</p> <div class="lg:bg-white/20 backdrop-blur-md border border-stone-200 lg:border-white/20 rounded-sm px-8 py-3 lg:py-4 shadow-lg" data-astro-cid-uw5kdbxl> <a${addAttribute(`mailto:${Data.email}`, "href")} class="flex items-center space-x-2 lg:text-white" data-astro-cid-uw5kdbxl> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" data-astro-cid-uw5kdbxl> <path fill-rule="evenodd" d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73Zm3.068-5.852A1.25 1.25 0 0 1 5.273 4.5h9.454a1.25 1.25 0 0 1 1.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 11H2.53l.015-.062 1.523-5.52Z" clip-rule="evenodd" data-astro-cid-uw5kdbxl></path> </svg> <span data-astro-cid-uw5kdbxl>${Data.email}</span> </a> </div> </div> <!-- <div>
        <p class="mb-1">Phone</p>
        <div
          class="lg:bg-white/20 backdrop-blur-md border border-stone-200 lg:border-white/20 rounded-sm px-8 py-3 lg:py-4 shadow-lg"
        >
          <div class="flex items-center space-x-2 lg:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clip-rule="evenodd"></path>
            </svg>

            <span>(123) 456-7890</span>
          </div>
        </div>
      </div> --> </div> <!-- <div class="text-white overflow-hidden">
      <div class="hidden md:flex gap-x-3 items-center"></div>
      <div class="my-7 md:my-2"></div>
      <h1
        id="hero-title"
        class={\`text-[2rem] leading-[2rem] md:text-5xl font-medium text-white max-w-xl\`}
      >
        {title}
      </h1>
      <p
        id="hero-body"
        class={\`leading-[1.5rem] text-[1.02rem] md:text-xl max-w-[340px] text-white/80 md:max-w-xl mt-3\`}
      >
        {subtitle}
      </p>
      <div class="py-2 md:py-4"></div>
      <div class="flex items-center w-full md:w-fit gap-x-4">
        <Button href="/contact">
          Get in touch
          <svg
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 18.4059L12.9944 6.39343"
              stroke="white"
              stroke-opacity="0.9"
              stroke-width="1.7"></path>
            <path
              d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z"
              fill="white"
              fill-opacity="0.9"></path>
            <path
              d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z"
              fill="white"
              fill-opacity="0.9"></path>
          </svg>
        </Button>
      </div>
    </div> --> </div> <div class="absolute w-full z-10 h-full top-0 left-0 gradient-hero-3" style="" data-astro-cid-uw5kdbxl></div> <!-- <img
    src={src}
    alt="Hero image"
    loading="eager"
    class="object-cover w-full h-full z-0"
  /> --> <div class="absolute z-0 w-full h-full top-0 left-0" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Picture", $$Picture, { "src": Data.bg_hero, "loading": "eager", "alt": Data.title, "class": "object-cover absolute bottom-0 w-full h-[42vh] lg:h-full z-0 -scale-x-100", "width": "2794", "height": "1538", "decoding": "async", "formats": ["png", "webp"], "data-astro-cid-uw5kdbxl": true })} </div> </section> <section style="background-image: url('/bgs/06 3.png');" class="section-y-padding bg-zinc-100" data-astro-cid-uw5kdbxl> <div class="container mb-10" data-astro-cid-uw5kdbxl> <h2 class="text-foreground" data-astro-cid-uw5kdbxl>${Data.map_title}</h2> </div> <div class="container grid grid-cols-1 md:grid-cols-3 gap-10" data-astro-cid-uw5kdbxl> <div class="p-1.5 border shadow-sm bg-zinc-50" data-astro-cid-uw5kdbxl> <div class="w-full aspect-[14/10]" data-astro-cid-uw5kdbxl> <iframe class="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71278.62215388607!2d-97.78448893475114!3d30.233238173886836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b487c0cfd451%3A0xa7e1766dfe6411d!2s2028%20E%20Ben%20White%20Blvd%2C%20Austin%2C%20TX%2078741%2C%20USA!5e0!3m2!1sen!2sfr!4v1710681121245!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-uw5kdbxl>
                    </iframe> </div> <div class="p-7" data-astro-cid-uw5kdbxl> <h5 style="background-image: linear-gradient(90deg, #0B9D6C -6.7%, #319EA6 36.1%, #7DA9FF 112.45%);" class="mb-2 text-transparent bg-clip-text text-xl lg:text-2xl" data-astro-cid-uw5kdbxl> ${Data.we_based[0].city} </h5> <p class="text-sm lg:text-base text-muted-foreground" data-astro-cid-uw5kdbxl> ${Data.we_based[0].address} </p> </div> </div> <div class="p-1.5 border shadow-sm bg-zinc-50" data-astro-cid-uw5kdbxl> <div class="w-full aspect-[14/10]" data-astro-cid-uw5kdbxl> <iframe class="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50356.719894977934!2d14.4821597116767!3d46.06075744125234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765329653266a43%3A0x2bf53ea5cc9976bb!2sEinspielerjeva%20ulica%206%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2sfr!4v1710681157877!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-uw5kdbxl></iframe> </div> <div class="p-7" data-astro-cid-uw5kdbxl> <h5 style="background-image: linear-gradient(90deg, #0B9D6C -6.7%, #319EA6 36.1%, #7DA9FF 112.45%);" class="mb-2 text-transparent bg-clip-text text-xl lg:text-2xl" data-astro-cid-uw5kdbxl> ${Data.we_based[1].city} </h5> <p class="text-sm lg:text-base text-muted-foreground" data-astro-cid-uw5kdbxl> ${Data.we_based[1].address} </p> </div> </div> <div class="p-1.5 border shadow-sm bg-zinc-50" data-astro-cid-uw5kdbxl> <div class="w-full aspect-[14/10]" data-astro-cid-uw5kdbxl> <iframe class="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51904.81091444897!2d16.308427659561147!3d48.197888517349206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da81a264f622d%3A0x875954408055673b!2sSechshauser%20Str.%2058%2C%201150%20Wien%2C%20Austria!5e0!3m2!1sen!2sfr!4v1710681182814!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-uw5kdbxl></iframe> </div> <div class="p-7" data-astro-cid-uw5kdbxl> <h5 style="background-image: linear-gradient(90deg, #0B9D6C -6.7%, #319EA6 36.1%, #7DA9FF 112.45%);" class="mb-2 text-transparent bg-clip-text text-xl lg:text-2xl" data-astro-cid-uw5kdbxl> ${Data.we_based[2].city} </h5> <p class="text-sm lg:text-base text-muted-foreground" data-astro-cid-uw5kdbxl> ${Data.we_based[2].address} </p> </div> </div> </div> </section> ` })} `;
}, "D:/MYWork/astroStart/regular-resonance/src/pages/contact.astro", undefined);

const $$file = "D:/MYWork/astroStart/regular-resonance/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
