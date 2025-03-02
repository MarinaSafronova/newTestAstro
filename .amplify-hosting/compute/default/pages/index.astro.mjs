/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, b as renderScript, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_BM7uNM-c.mjs';
import 'kleur/colors';
import { $ as $$Layout, D as Data, S as Services } from '../chunks/Layout_B5jQMA_-.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture, a as $$Image } from '../chunks/_astro_assets_D1r1AIjF.mjs';
/* empty css                                 */
import { $ as $$FeaturedSlider } from '../chunks/FeaturedSlider_f39tZzTC.mjs';
export { renderers } from '../renderers.mjs';

const seo_title = "Simbased | Engineering design & simulation solutions";
const seo_desc = "Simbased specializes in product design and advanced simulations, offering a competitive edge with better, reliable products at lower costs and faster time to market.";
const title = "Advancing industries through simulation";
const desc = "We are an engineering consulting company leveraging on advanced computer simulations to solve complex optimization challenges in engineering and product design.";
const bg_hero = ["/images/home/rocket.png","/images/home/pipe2.png","/images/home/about.png"];
const slider_logo = [{"alt":"","logo":"/images/logo/bcr_logo_color_horizontal_tagline.png"},{"alt":"","logo":"/images/logo/citygreen-about.png"},{"alt":"","logo":"/images/logo/Cosylab-logo-2023.png"},{"alt":"","logo":"/images/logo/fluencelogo.png"},{"alt":"","logo":"/images/logo/soninhybridlogo.png"},{"alt":"","logo":"/images/logo/technogrouplogo.png"}];
const industry_title = "Industries we serve";
const industry_desc = "Explore the diverse range of industries supported by Simbased.";
const solutions_title = "Our solutions";
const solutions_desc = "Simbased offers numerical simulations and product design services to enhance your ability to develop better, more reliable products for your business.";
const faq = [{"question":"Experienced team","answer":"With a deep reservoir of knowledge and a passion for innovation, our experienced team at Simbased comprises industry experts with decades of collective expertise. We stand ready to leverage this insight and skill to deliver exceptional results for your projects."},{"question":"Advanced software","answer":"Harnessing the power of cutting-edge software tools, Simbased empowers clients with the latest advancements in engineering technology. Our precise and efficient simulations, enabled by state-of-the-art software solutions, facilitate faster iterations and more accurate predictions, driving your project towards success."},{"question":"High client satisfaction","answer":"At Simbased, our unwavering commitment to client satisfaction drives every aspect of our work. With a track record of consistently delivering on promises and surpassing expectations, our dedication to high client satisfaction is the cornerstone of our success."}];
const faq_img = "/images/home/digger.png";
const Home = {
  seo_title,
  seo_desc,
  title,
  desc,
  bg_hero,
  slider_logo,
  industry_title,
  industry_desc,
  solutions_title,
  solutions_desc,
  faq,
  faq_img,
};

const $$HeroSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="el-hero" class="w-screen relative h-[calc(95vh-60px)] lg:h-[calc(100vh-200px)] bg-cover bg-blend-multiply bg-no-repeat bg-right-bottom overflow-x-hidden max-w-screen isolate"> <div class="left-1/2 lg:top-1/2 transform lg:-translate-y-1/2 w-full container -translate-x-1/2 overflow-visible absolute flex items-end lg:items-center py-3 lg:py-5 z-30"> <div class="text-white overflow-hidden"> <div class="hidden lg:flex gap-x-3 items-center"></div> <div class="my-7 lg:my-2"></div> <h1 id="hero-title" class="text-[2rem] leading-[2rem] lg:text-6xl font-medium text-foreground lg:text-white max-w-xl"> ${Home.title} </h1> <p id="hero-body" class="leading-[1.5rem] font-normal text-[1.02rem] lg:text-xl max-w-[360px] text-muted-foreground lg:text-white/80 lg:max-w-xl mt-3"> ${Home.desc} </p> <div class="py-2 lg:py-4"></div> <div class="flex items-center w-full lg:w-fit gap-x-4"> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-gradient-to-r from-[#1FA48C] via-[#1F9BA4] to-[#1F6CA4] text-white"> <span>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 18.4059L12.9944 6.39343" stroke="white" stroke-opacity="0.9" stroke-width="1.7"></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="white" fill-opacity="0.9"></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="white" fill-opacity="0.9"></path> </svg> </a> </div> </div> </div> <div class="absolute hidden lg:block w-full z-10 h-full top-0 left-0" style="
                    background: linear-gradient(
                        81.65deg,
                        #0b1729 17.47%,
                        rgba(0, 0, 0, 0) 99.64%
                    );
                "></div> <div class="swiper overflow-hidden cursor-ew-resize w-full h-full hero-slider"> <div class="swiper-wrapper"> ${Home.bg_hero.map((img) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result, "Picture", $$Picture, { "src": img, "loading": "eager", "class": "object-cover absolute left-0 w-full bottom-0 h-[47vh] lg:h-full z-0 object-[100%,0%] lg:object-[50%,50%]", "alt": Home.title, "decoding": "async", "inferSize": true, "width": "4096", "height": "2332", "formats": ["png", "webp"] })} </div>`)} </div> </div> </section> ${renderScript($$result, "D:/MYWork/astroStart/regular-resonance/src/components/Home/HeroSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/MYWork/astroStart/regular-resonance/src/components/Home/HeroSlider.astro", void 0);

const $$PartnerLogoSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="marquee-container relative bg-background text-white overflow-hidden py-7 lg:py-9" data-astro-cid-j3txos5y> <div class="absolute w-[100px] lg:w-[200px] h-full left-0 bg-gradient-to-r from-background via-background/90 to-transparent z-20 top-1/2 -translate-y-1/2" data-astro-cid-j3txos5y></div> <div class="absolute w-[100px] lg:w-[200px] h-full right-0 bg-gradient-to-l from-background via-background/90 to-transparent z-20 top-1/2 -translate-y-1/2" data-astro-cid-j3txos5y></div> <div class="marquee-wrapper" data-astro-cid-j3txos5y> <div class="marquee-content" data-astro-cid-j3txos5y> ${Home.slider_logo.map((logo) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": logo.logo, "class": "min-w-[80px] lg:min-w-[140px] lg:max-w-[140px] h-full object-contain", "alt": logo.alt, "width": "226", "height": "126", "loading": "lazy", "decoding": "async", "data-astro-cid-j3txos5y": true })}`)} </div> <div class="marquee-content hidden lg:block" data-astro-cid-j3txos5y> ${Home.slider_logo.map((logo) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": logo.logo, "class": "min-w-[80px] lg:min-w-[140px] lg:max-w-[140px] h-full object-contain", "alt": logo.alt, "width": "226", "height": "126", "loading": "lazy", "decoding": "async", "data-astro-cid-j3txos5y": true })}`)} </div> </div> </div> `;
}, "D:/MYWork/astroStart/regular-resonance/src/components/Home/PartnerLogoSlider.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-y-padding bg-zinc-50" data-astro-cid-nrgracrp> <div class="container mb-10" data-astro-cid-nrgracrp> <p class="preheader mb-1" data-astro-cid-nrgracrp>Your trusted partner</p> <h2 class="tracking-[-3%]" data-astro-cid-nrgracrp>
Why choose
<span style="
                    background-image: linear-gradient(
                        90deg,
                        #0b9d6c -6.7%,
                        #319ea6 36.1%,
                        #7da9ff 112.45%
                    );
                " class="bg-clip-text text-transparent" data-astro-cid-nrgracrp>Simbased?</span> </h2> </div> <div class="container grid grid-cols-1 gap-10 lg:grid-cols-2" data-astro-cid-nrgracrp> <!-- selector --> <div data-astro-cid-nrgracrp> <div data-astro-cid-nrgracrp> <button class="text-left w-full p-6 lg:p-10 bg-white border border-l-8 duration-300 ease-in-out border-l-primary accordion-faq active" data-astro-cid-nrgracrp> <div class="flex gap-x-2 justify-between items-center" data-astro-cid-nrgracrp> <p class="text-base lg:text-2xl font-medium text-balance text-accent" data-astro-cid-nrgracrp> ${Home.faq[0].question} </p> <p class="text-4xl lg:text-5xl text-foreground/30 font-thin" data-astro-cid-nrgracrp> <svg class="minus hidden" width="20" height="18" viewBox="0 0 18 17" class="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp> <path d="M2.87223 9.20329V7.17329H14.5972V9.20329H2.87223Z" fill="currentColor" data-astro-cid-nrgracrp></path> </svg> <svg class="plus block" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp><path d="M9.27602 17.4983V9.76329H1.57602V7.66329H9.27602V-0.00170898H11.376V7.66329H19.076V9.76329H11.376V17.4983H9.27602Z" fill="#373651" fill-opacity="0.5" data-astro-cid-nrgracrp></path> </svg> </p> </div> <div class="overflow-hidden" style="width: 100%; height: 0px" data-astro-cid-nrgracrp> <div class="accordion-content" data-astro-cid-nrgracrp> <p class="text-muted-foreground text-sm lg:text-base text-left pt-2" data-astro-cid-nrgracrp> ${Home.faq[0].answer}<br data-astro-cid-nrgracrp> </p> </div> </div></button> <button class="text-left w-full p-6 lg:p-10 bg-white border border-l-8 duration-300 ease-in-out border-l-zinc-100 accordion-faq" data-astro-cid-nrgracrp> <div class="flex gap-x-2 justify-between items-center" data-astro-cid-nrgracrp> <p class="text-base lg:text-2xl font-medium text-balance text-foreground" data-astro-cid-nrgracrp> ${Home.faq[1].question} </p> <p class="text-4xl lg:text-5xl text-foreground/30 font-thin" data-astro-cid-nrgracrp> <svg class="minus hidden" width="20" height="18" viewBox="0 0 18 17" class="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp> <path d="M2.87223 9.20329V7.17329H14.5972V9.20329H2.87223Z" fill="currentColor" data-astro-cid-nrgracrp></path> </svg> <svg class="plus block" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp><path d="M9.27602 17.4983V9.76329H1.57602V7.66329H9.27602V-0.00170898H11.376V7.66329H19.076V9.76329H11.376V17.4983H9.27602Z" fill="#373651" fill-opacity="0.5" data-astro-cid-nrgracrp></path> </svg> </p> </div> <div class="overflow-hidden" style="width: 100%; height: 0px" data-astro-cid-nrgracrp> <div class="accordion-content" data-astro-cid-nrgracrp> <p class="text-muted-foreground text-sm lg:text-base text-left pt-2" data-astro-cid-nrgracrp> ${Home.faq[1].answer}<br data-astro-cid-nrgracrp> </p> </div> </div></button> <button class="text-left w-full p-6 lg:p-10 bg-white border border-l-8 duration-300 ease-in-out border-l-zinc-100 accordion-faq" data-astro-cid-nrgracrp> <div class="flex gap-x-2 justify-between items-center" data-astro-cid-nrgracrp> <p class="text-base lg:text-2xl font-medium text-balance text-foreground" data-astro-cid-nrgracrp> ${Home.faq[2].question} </p> <p class="text-4xl lg:text-5xl text-foreground/30 font-thin" data-astro-cid-nrgracrp> <svg class="minus hidden" width="20" height="18" viewBox="0 0 18 17" class="text-primary" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp> <path d="M2.87223 9.20329V7.17329H14.5972V9.20329H2.87223Z" fill="currentColor" data-astro-cid-nrgracrp></path> </svg> <svg class="plus block" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nrgracrp><path d="M9.27602 17.4983V9.76329H1.57602V7.66329H9.27602V-0.00170898H11.376V7.66329H19.076V9.76329H11.376V17.4983H9.27602Z" fill="#373651" fill-opacity="0.5" data-astro-cid-nrgracrp></path> </svg> </p> </div> <div class="overflow-hidden" style="width: 100%; height: 0px" data-astro-cid-nrgracrp> <div class="accordion-content" data-astro-cid-nrgracrp> <p class="text-muted-foreground text-sm lg:text-base text-left pt-2" data-astro-cid-nrgracrp> ${Home.faq[2].answer}<br data-astro-cid-nrgracrp> </p> </div> </div> </button> </div> </div> <!-- image --> <div class="w-full aspect-[1.3]" data-astro-cid-nrgracrp> ${renderComponent($$result, "Picture", $$Picture, { "src": Home.faq_img, "alt": "Excavator with numerical simulation", "class": "object-cover w-full h-full", "loading": "lazy", "width": "897", "height": "537", "formats": ["png", "webp"], "data-astro-cid-nrgracrp": true })} </div> </div> </section> ${renderScript($$result, "D:/MYWork/astroStart/regular-resonance/src/components/Home/Faq.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/MYWork/astroStart/regular-resonance/src/components/Home/Faq.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Home.seo_title, "desc": Home.seo_desc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-x-hidden max-w-screen"> <div class="h-[60px] lg:h-[96px]"></div> ${renderComponent($$result2, "HeroSlider", $$HeroSlider, {})} ${renderComponent($$result2, "PartnerLogoSlider", $$PartnerLogoSlider, {})} <!-- Add more images as needed --> <!-- <div class="relative bg-background text-white overflow-hidden py-7 lg:py-9">
<div
class="absolute w-[100px] lg:w-[200px] h-full left-0 bg-gradient-to-r from-background via-background/90 to-transparent z-20 top-1/2 -translate-y-1/2"
>
</div>
<div
class="absolute w-[100px] lg:w-[200px] h-full right-0 bg-gradient-to-l from-background via-background/90 to-transparent z-20 top-1/2 -translate-y-1/2"
>
</div>
<div class="marquee">
<div class="marquee-content">
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img1}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img2}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img3}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img4}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img5}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img6}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img7}
      alt="Partner logo"
    />
  </div>
</div>
<div class="marquee-content">
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img1}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img2}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img3}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img4}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img5}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img6}
      alt="Partner logo"
    />
  </div>
  <div class="marquee-item">
    <Picture
      class="w-full h-full object-contain"
      src={img7}
      alt="Partner logo"
    />
  </div>
</div>
</div>
</div>

<style>
.marquee {
display: flex;
overflow: hidden;
width: 100%;

}

.marquee-content {
display: flex;
animation: marquee 60s linear infinite;
width: 100%;
/* margin-right: 100px; */
}

.marquee-item {
flex: 0 0 auto;
width: 150px;
border: 1px solid #fff;
height: 60px;
/* margin-right: 100px; */

@media (max-width: 768px) {
  width: 120px;
  height: 60px;
  /* margin-right: 50px; */
}
}

@keyframes marquee {
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
}
</style> --> <section class="section-t-padding lg:pb-32"> <div class="container"> <h2 style="
                        background-image: linear-gradient(
                            90deg,
                            #0b9d6c -6.7%,
                            #319ea6 36.1%,
                            #7da9ff 112.45%
                        );
                    " class="text-transparent bg-clip-text"> ${Home.industry_title} </h2> <p class="text-muted-foreground lg:text-lg mt-1"> ${Home.industry_desc} </p> </div> <div class="sm:max-w-[640px] md:max-w-3xl lg:max-w-[1100px] xl:max-w-[1400px] 2xl:max-w-[1400px] mx-auto grid grid-cols-2 lg:flex lg:flex-wrap   mt-7 lg:mt-12 lg:px-5 2xl:px-0"> ${Data.industrys.map((item) => renderTemplate`<a${addAttribute(`/industries?industry=${item.industry_url}#selector`, "href")} class="h-[200px] overflow-hidden relative lg:h-[280px] w-full lg:w-[calc(100%/3)] shrink basis-[calc(100%/3)] box-border group"> <div class="w-full flex p-3 lg:p-7 items-end absolute z-20 h-full bg-background/80 left-0 top-0 group-hover:bg-primary/80 duration-300 ease-in-out"> <p class="text-white leading-[1.25rem] text-lg lg:text-2xl"> ${item.industry} </p> </div> ${renderComponent($$result2, "Picture", $$Picture, { "src": item.index_background_picture, "class": "absolute top-0 z-0 left-0 object-cover w-full h-full group-hover:scale-105 duration-500", "alt": item.industry, "width": "897", "height": "537", "loading": "lazy", "decoding": "async", "formats": ["png", "webp"] })} ${renderComponent($$result2, "Picture", $$Picture, { "src": item.index_foreground_picture, "class": "object-contain absolute h-full w-[40%] right-0 z-50", "alt": item.industry, "width": "746", "height": "511", "loading": "lazy", "decoding": "async", "formats": ["png", "webp"] })} </a>`)} <div style="
                        background: linear-gradient(
                            113.5deg,
                            #374963 8.8%,
                            #131f31 80.2%
                        );
                    " class="p-6 lg:p-8 lg:px-12 text-lg font-medium text-white flex justify-center w-auto flex-col gap-y-4 lg:basis-auto lg:flex-auto"> <span class="leading-[1.25rem] lg:text-2xl">Can’t find your<br>
industry here?</span> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-white text-black">
Get in touch
</a> </div> </div> </section> <section class="section-y-padding border-t bg-zinc-50"> <div class="container"> <h2 style="
                        background-image: linear-gradient(
                            90deg,
                            #0b9d6c -6.7%,
                            #319ea6 36.1%,
                            #7da9ff 112.45%
                        );
                    " class="text-transparent bg-clip-text"> ${Home.solutions_title} </h2> <p class="text-muted-foreground lg:text-lg mt-1 max-w-2xl"> ${Home.solutions_desc} </p> </div> <div class="container mt-7 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-x-hidden"> ${Services.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="group"> <div class="w-full aspect-[1.74] overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": item.image_index, "class": "w-full object-cover group-hover:scale-105 duration-500 ease-in-out h-full", "alt": "Numerical simulations preview image", "width": "100", "height": "100" })} </div> <div style="background-image: url('/bgs/darkbg 4.png')" class="bg-foreground p-5 lg:p-10"> <div class="flex items-center lg:mb-1 justify-between w-full"> <h2 class="text-2xl font-normal lg:text-4xl text-white text-nowrap"> ${item.name} </h2> <svg class="shrink-0 w-7 lg:w-10 aspect-square" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="40.3376" height="40.3376" fill="url(#paint0_linear_2_939)"></rect> <path d="M13.5872 27.5989L27.6363 13.5497" stroke="#F3EFE5" stroke-width="1.58488" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M28.2046 26.3219V13.2658" stroke="#F3EFE5" stroke-width="1.58488" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.4441 12.9814H28.2024" stroke="#F3EFE5" stroke-width="1.58488" stroke-linecap="round" stroke-linejoin="round"></path> <defs> <linearGradient id="paint0_linear_2_939" x1="20.1688" y1="6.16268" x2="61.6268" y2="53.2232" gradientUnits="userSpaceOnUse"> <stop stop-color="#1F9BA4"></stop> <stop offset="1" stop-color="#4744DE"></stop> </linearGradient> </defs> </svg> </div> <p class="text-white/80 text-sm lg:text-lg font-normal"></p> </div> </a>`)} </div> </section> ${renderComponent($$result2, "FeaturedSlider", $$FeaturedSlider, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} <section style="
                background-image: url('/bgs/color-bg 2.png');
                background-size: cover;
                background-position: center;
            " class="bg-primary py-12 lg:py-20"> <div class="container"> <h2 class="text-white mb-6 lg:mb-7 max-w-xs lg:max-w-xl">
Level up your products with Simbased
</h2> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 flex gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 bg-white text-black"> <span>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 18.4059L12.9944 6.39343" stroke="black" stroke-opacity="0.9" stroke-width="1.7"></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="black" fill-opacity="0.9"></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="black" fill-opacity="0.9"></path> </svg> </a> </div> </section> </main> ` })}`;
}, "D:/MYWork/astroStart/regular-resonance/src/pages/index.astro", void 0);

const $$file = "D:/MYWork/astroStart/regular-resonance/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
