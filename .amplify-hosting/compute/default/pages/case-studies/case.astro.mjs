/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BFomc8PK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DvZnJnsW.mjs';
import { $ as $$ResponsivePicture } from '../../chunks/_astro_assets_Bkioq9sj.mjs';
import { D as Data } from '../../chunks/case-page_af26CZR3.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Case = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Data.seo_title, "desc": Data.seo_desc, "data-astro-cid-hzlfcy64": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[60px] lg:h-[96px]" data-astro-cid-hzlfcy64></div> <section id="el-hero" class="w-screen h-[calc(100vh-60px)] lg:h-[calc(100vh-96px)] bg-cover bg-blend-multiply bg-no-repeat bg-right-bottom overflow-x-hidden max-w-screen relative isolate" data-astro-cid-hzlfcy64> <div class="left-1/2 bottom-[16%] lg:bottom-[8%] transform w-full container -translate-x-1/2 overflow-visible absolute flex items-end md:items-center py-5 z-30" data-astro-cid-hzlfcy64> <div class="text-white overflow-hidden" data-astro-cid-hzlfcy64> <div class="hidden md:flex gap-x-3 items-center" data-astro-cid-hzlfcy64></div> <div class="my-7 md:my-2" data-astro-cid-hzlfcy64></div> <h1 id="hero-title" class="font-medium text-white max-w-xl" data-astro-cid-hzlfcy64> ${Data.title} </h1> <p class="leading-[1.5rem] text-[1.02rem] md:text-lg max-w-[340px] text-white/90 lg:max-w-2xl mt-2" data-astro-cid-hzlfcy64> ${Data.desc} </p> </div> </div> <div class="absolute w-full z-10 h-full top-0 left-0 gradient-hero" data-astro-cid-hzlfcy64></div> ${renderComponent($$result2, "Picture", $$ResponsivePicture, { "src": Data.bg_hero, "loading": "eager", "alt": "Hero image", "class": "object-cover w-full h-full z-0 object-[65%,50%]", "width": "2174", "height": "1298", "decoding": "async", "formats": ["png", "webp"], "data-astro-cid-hzlfcy64": true })} </section> <section class="section-y-padding bg-zinc-100" data-astro-cid-hzlfcy64> <div class="container" data-astro-cid-hzlfcy64> <a${addAttribute(Data.case_studies[0].case_url, "href")} class="border bg-white grid lg:grid-cols-2 hover:border-primary duration-300" data-astro-cid-hzlfcy64> <div class="w-full h-full relative aspect-[16/10]" data-astro-cid-hzlfcy64> <img${addAttribute(Data.case_studies[0].case_img, "src")} class="object-cover w-full h-[100%]" alt="Drop test of intermodal container preview" data-astro-cid-hzlfcy64> </div> <div class="order-first border flex flex-col items-start justify-center h-full lg:order-last p-6 lg:px-10 pt-14 pb-10 relative" data-astro-cid-hzlfcy64> <div class="uppercase absolute top-2 right-2 text-primary bg-primary/20 px-2 lg:px-4 py-1.5 text-xs lg:text-base" data-astro-cid-hzlfcy64>
Featured case study
</div> <div data-astro-cid-hzlfcy64> <h3 class="max-w-none" data-astro-cid-hzlfcy64> ${Data.case_studies[0].title} </h3> <p class="max-w-md text-muted-foreground mt-3" data-astro-cid-hzlfcy64> ${Data.case_studies[0].desc} </p> <div class="flex items-center gap-x-3 mt-5" data-astro-cid-hzlfcy64> <p class="uppercase font-semibold text-primary" data-astro-cid-hzlfcy64>
Read study
</p> <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hzlfcy64> <rect width="17" height="17" fill="url(#paint0_linear_27_769)" data-astro-cid-hzlfcy64></rect> <path d="M5.72681 11.6314L11.6477 5.71045" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <path d="M11.8872 11.0935V5.59107" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <path d="M5.66673 5.47097H11.8865" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <defs data-astro-cid-hzlfcy64> <linearGradient id="paint0_linear_27_769" x1="8.5" y1="2.59722" x2="25.9722" y2="22.4306" gradientUnits="userSpaceOnUse" data-astro-cid-hzlfcy64> <stop stop-color="#1F9BA4" data-astro-cid-hzlfcy64></stop> <stop offset="1" stop-color="#4744DE" data-astro-cid-hzlfcy64></stop> </linearGradient> </defs> </svg> </div> </div> </div> </a> </div> </section> <section class="section-y-padding border-t" data-astro-cid-hzlfcy64> <div class="container" data-astro-cid-hzlfcy64> <h2 style="
                        background-image: linear-gradient(
                            90deg,
                            #0b9d6c -6.7%,
                            #319ea6 36.1%,
                            #7da9ff 112.45%
                        );
                    " class="text-transparent bg-clip-text" data-astro-cid-hzlfcy64>
Explore all case studies
</h2> </div> <div class="container grid grid-cols-1 lg:grid-cols-3 gap-10 mt-7 lg:mt-12" data-astro-cid-hzlfcy64> ${Data.case_studies.map((item, index) => {
    if (index !== 0) {
      return renderTemplate`<a class="hover:ring-2 hover:ring-primary/50 hover:ring-offset-8 duration-300 hover:ring-offset-white group"${addAttribute(item.case_url, "href")} data-astro-cid-hzlfcy64> <div class="w-full border aspect-[20/10]" data-astro-cid-hzlfcy64> <img class="w-full h-full object-cover"${addAttribute(item.case_img, "src")}${addAttribute(item.title, "alt")} data-astro-cid-hzlfcy64> </div> <h5 class="text-3xl font-medium max-w-md mt-5" data-astro-cid-hzlfcy64> ${item.title} </h5> <div class="flex items-center gap-x-3 mt-5" data-astro-cid-hzlfcy64> <p class="uppercase font-semibold text-primary" data-astro-cid-hzlfcy64>
Read study
</p> <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hzlfcy64> <rect width="17" height="17" fill="url(#paint0_linear_27_769)" data-astro-cid-hzlfcy64></rect> <path d="M5.72681 11.6314L11.6477 5.71045" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <path d="M11.8872 11.0935V5.59107" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <path d="M5.66673 5.47097H11.8865" stroke="#F3EFE5" stroke-width="0.944444" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hzlfcy64></path> <defs data-astro-cid-hzlfcy64> <linearGradient id="paint0_linear_27_769" x1="8.5" y1="2.59722" x2="25.9722" y2="22.4306" gradientUnits="userSpaceOnUse" data-astro-cid-hzlfcy64> <stop stop-color="#1F9BA4" data-astro-cid-hzlfcy64></stop> <stop offset="1" stop-color="#4744DE" data-astro-cid-hzlfcy64></stop> </linearGradient> </defs> </svg> </div> </a>`;
    }
  })} </div> </section> <section style="
                background-image: url('/bgs/color-bg 2.png');
                background-size: cover;
                background-position: center;
            " class="bg-primary py-12 lg:py-20" data-astro-cid-hzlfcy64> <div class="container" data-astro-cid-hzlfcy64> <h2 class="text-white mb-6 lg:mb-7 max-w-xs lg:max-w-xl" data-astro-cid-hzlfcy64>
Level up your products with Simbased
</h2> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-white text-black" data-astro-cid-hzlfcy64> <span data-astro-cid-hzlfcy64>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hzlfcy64> <path d="M1 18.4059L12.9944 6.39343" stroke="black" stroke-opacity="0.9" stroke-width="1.7" data-astro-cid-hzlfcy64></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="black" fill-opacity="0.9" data-astro-cid-hzlfcy64></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="black" fill-opacity="0.9" data-astro-cid-hzlfcy64></path> </svg> </a> </div> </section> ` })} `;
}, "D:/MYWork/astroStart/regular-resonance/src/pages/case-studies/case.astro", undefined);

const $$file = "D:/MYWork/astroStart/regular-resonance/src/pages/case-studies/case.astro";
const $$url = "/case-studies/case";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Case,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
