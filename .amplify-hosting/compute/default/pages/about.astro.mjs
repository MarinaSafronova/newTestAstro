/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DWwxT_go.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_FFqXFnZm.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_DqtUlNMW.mjs';
import { $ as $$FeaturedSlider } from '../chunks/FeaturedSlider_Wkpji2w_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const page$1 = "About";
const seo_title = "Simbased | About Us";
const seo_desc = "Learn about Simbased, a leading engineering consulting firm, specializing in product design and advanced simulations.";
const title = "Simbased";
const desc = "Discover Simbased, a premier engineering consulting firm specialising in cutting-edge product design and advanced simulations.";
const bg_hero = "/images/about/about.png";
const trust_title = "Your trusted technical simulations partner";
const trust_desc = "Simbased is an engineering consulting company specializing in product design and advanced computer simulations. We provide a competitive advantage for our clients. With the use of our engineering experience, we design better and more reliable products with lower costs and shorter time to market.";
const trust_img = "/images/about/partner.png";
const stats_title = "Simbased by the stats";
const industry_number = "10";
const industry_title = "Industries we support with our services";
const completed_projects = "130";
const completed_title = "Successfully completed projects";
const satisfied_clients = "45";
const satisfied_title = "Satisfied clients";
const team_title = "Meet the team";
const team_members = [{"name":"Uroš Rožič, MSc","role":"Managing Director","image":"/images/team/uros.png","desc":"Uroš is an accomplished software engineer with over a decade of experience in the software industry. His passion lies in creating intuitive software solutions that simplify users' lives. Advocating for the future of software development, Uroš is a staunch supporter of open source software. Joining the Simbased team fills him with excitement as he looks forward to contributing to the company's growth and success."},{"name":"Tilen Ceglar, PhD","role":"Simulation engineer","image":"/images/team/tilen.png","desc":"Tilen is specialist in numerical multiphysics simulations, holds a Ph.D. in nonlinear structural mechanics and over 10 years' experience. He excels in solving intricate problems across various sectors and has contributed to around 40 patents worldwide. Tilen is keen on collaborating to address engineering challenges and drive innovation."},{"name":"Preston Whitney","role":"Technical Sales","image":"/images/team/preston.png","desc":"Preston is a technologist professional with a rich background in advanced manufacturing, mechanical design, and productization. Boasting over two decades of experience in innovation and prototyping, with simulation playing a pivotal role in each project. Passionate about innovation, he combines insight and creativity to ensure client success."}];
const Data = {
  page: page$1,
  seo_title,
  seo_desc,
  title,
  desc,
  bg_hero,
  trust_title,
  trust_desc,
  trust_img,
  stats_title,
  industry_number,
  industry_title,
  completed_projects,
  completed_title,
  satisfied_clients,
  satisfied_title,
  team_title,
  team_members,
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Data.seo_title, "desc": Data.seo_desc, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[60px] lg:h-[96px]" data-astro-cid-kh7btl4r></div> <section id="el-hero" class="w-screen h-[calc(100vh-60px)] lg:h-[calc(100vh-96px)] bg-cover bg-blend-multiply bg-no-repeat bg-right-bottom overflow-x-hidden max-w-screen relative isolate" data-astro-cid-kh7btl4r> <div class="left-1/2 bottom-[16%] lg:bottom-[8%] transform w-full container -translate-x-1/2 overflow-visible absolute flex items-end md:items-center py-5 z-30" data-astro-cid-kh7btl4r> <div class="text-white overflow-hidden" data-astro-cid-kh7btl4r> <div class="hidden md:flex gap-x-3 items-center" data-astro-cid-kh7btl4r></div> <div class="my-7 md:my-2" data-astro-cid-kh7btl4r></div> <h1 id="hero-title" class="font-medium text-white max-w-xl" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>${Data.page} <span style="
                                    background-image: linear-gradient(
                                        90deg,
                                        #0b9d6c -6.7%,
                                        #319ea6 36.1%,
                                        #7da9ff 112.45%
                                    );
                                " class="text-transparent bg-clip-text" data-astro-cid-kh7btl4r>${Data.title}</span></span> </h1> <p class="leading-[1.5rem] text-[1.02rem] md:text-lg max-w-[340px] text-white/90 lg:max-w-2xl mt-2" data-astro-cid-kh7btl4r> ${Data.desc} </p> </div> </div> <div class="absolute w-full z-10 h-full top-0 left-0 gradient-hero" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Picture", $$Picture, { "src": Data.bg_hero, "loading": "eager", "alt": "Hero image", "class": "object-cover w-full h-full z-0 object-[65%,50%]", "width": "4096", "height": "2332", "decoding": "async", "formats": ["png", "webp"], "data-astro-cid-kh7btl4r": true })} </section> <section class="section-y-padding" data-astro-cid-kh7btl4r> <div class="container grid items-center grid-cols-1 gap-10 lg:grid-cols-2" data-astro-cid-kh7btl4r> <div class="flex flex-col max-w-xl" data-astro-cid-kh7btl4r> <p class="preheader mb-2" data-astro-cid-kh7btl4r>About us</p> <h2 class="mb-5" data-astro-cid-kh7btl4r> ${Data.trust_title} </h2> <p class="text-muted-foreground lg:text-lg mb-7" data-astro-cid-kh7btl4r> ${Data.trust_desc} </p> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-gradient-to-r from-[#1FA48C] via-[#1F9BA4] to-[#1F6CA4] text-white" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-kh7btl4r> <path d="M1 18.4059L12.9944 6.39343" stroke="white" stroke-opacity="0.9" stroke-width="1.7" data-astro-cid-kh7btl4r></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="white" fill-opacity="0.9" data-astro-cid-kh7btl4r></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="white" fill-opacity="0.9" data-astro-cid-kh7btl4r></path> </svg> </a> </div> <div class="w-full aspect-[1.3]" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Picture", $$Picture, { "src": Data.trust_img, "alt": "Numerical simulation render", "class": "object-cover w-full h-full", "loading": "lazy", "width": "897", "height": "897", "formats": ["png", "webp"], "data-astro-cid-kh7btl4r": true })} </div> </div> </section> <section style="
                background-image: url('/bgs/darkbg 2.png');
                background-size: cover;
                background-position: center;
            " class="text-white section-y-padding overflow-x-hidden max-w-[100vw]" data-astro-cid-kh7btl4r> <div class="container grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-20" data-astro-cid-kh7btl4r> <div class="" data-astro-cid-kh7btl4r> <h2 class="text-white max-w-xs" data-astro-cid-kh7btl4r>${Data.stats_title}</h2> </div> <div class="grid grid-cols-2 gap-12 lg:gap-14" data-astro-cid-kh7btl4r> <div class="max-w-[250px]" data-astro-cid-kh7btl4r> <p class="text-6xl lg:text-8xl font-medium" data-astro-cid-kh7btl4r> ${Data.industry_number}+
</p> <p class="text-sm lg:text-base" data-astro-cid-kh7btl4r> ${Data.industry_title} </p> </div> <div class="max-w-[250px]" data-astro-cid-kh7btl4r> <p class="text-6xl lg:text-8xl font-medium" data-astro-cid-kh7btl4r> ${Data.completed_projects}+
</p> <p class="text-sm lg:text-base" data-astro-cid-kh7btl4r> ${Data.completed_title} </p> </div> <div class="max-w-[250px]" data-astro-cid-kh7btl4r> <p class="text-6xl lg:text-8xl font-medium" data-astro-cid-kh7btl4r> ${Data.satisfied_clients}+
</p> <p class="text-sm lg:text-base" data-astro-cid-kh7btl4r>${Data.satisfied_title}</p> </div> </div> </div> </section> <section class="section-y-padding border" data-astro-cid-kh7btl4r> <div class="container mb-8 lg:mb-10" data-astro-cid-kh7btl4r> <p class="preheader" data-astro-cid-kh7btl4r>About us</p> <h2 data-astro-cid-kh7btl4r>${Data.team_title}</h2> </div> <div class="container grid grid-cols-1 gap-y-7 lg:grid-cols-3 lg:gap-24" data-astro-cid-kh7btl4r> ${Data.team_members.map((item) => renderTemplate`<div data-astro-cid-kh7btl4r> <div class="w-full aspect-[9/10] bg-zinc-200" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Picture", $$Picture, { "src": item.image, "alt": "Uro\u0161 Ro\u017Ei\u010D, MSc headshot", "class": "object-cover w-full h-full", "width": "500", "height": "500", "formats": ["png", "webp"], "data-astro-cid-kh7btl4r": true })} </div> <h5 class="text-xl text-foreground mt-6" data-astro-cid-kh7btl4r> ${item.name} </h5> <p class="text-muted-foreground text-lg mb-5" data-astro-cid-kh7btl4r> ${item.role} </p> <p class="text-muted-foreground text-base text-left" data-astro-cid-kh7btl4r> ${item.desc} </p> </div>`)} </div> </section> ${renderComponent($$result2, "FeaturedSlider", $$FeaturedSlider, { "data-astro-cid-kh7btl4r": true })} <section style="
                background-image: url('/bgs/color-bg 2.png');
                background-size: cover;
                background-position: center;
            " class="bg-primary py-12 lg:py-20" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <h2 class="text-white mb-6 lg:mb-7 max-w-xs lg:max-w-xl" data-astro-cid-kh7btl4r>
Level up your products with Simbased
</h2> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-white text-black" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-kh7btl4r> <path d="M1 18.4059L12.9944 6.39343" stroke="black" stroke-opacity="0.9" stroke-width="1.7" data-astro-cid-kh7btl4r></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="black" fill-opacity="0.9" data-astro-cid-kh7btl4r></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="black" fill-opacity="0.9" data-astro-cid-kh7btl4r></path> </svg> </a> </div> </section> ` })} `;
}, "D:/MYWork/astroStart/regular-resonance/src/pages/about.astro", undefined);

const $$file = "D:/MYWork/astroStart/regular-resonance/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
