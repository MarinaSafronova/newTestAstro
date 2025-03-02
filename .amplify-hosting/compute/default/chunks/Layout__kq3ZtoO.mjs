import { e as createAstro, c as createComponent, r as renderTemplate, l as renderHead, d as addAttribute, m as maybeRenderHead, b as renderScript, a as renderComponent, n as renderSlot } from './astro/server_DhxXPFBG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.simbased.com");
const $$MainHeadLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHeadLayout;
  const {
    title,
    desc = "Simbased specializes in product design and advanced simulations, offering a competitive edge with better, reliable products at lower costs and faster time to market."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/ico+xml" href="/favicon.ico"><meta name="generator"', '><link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><title>', '</title><link rel="sitemap" href="/sitemap-index.xml"><meta name="description"', '><link rel="preload" href="/fonts/Conigen-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Conigen-Medium.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Conigen-SemiBold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Conigen-Bold.woff2" as="font" type="font/woff2" crossorigin><!-- Google tag (gtag.js) --><script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"><\/script><script type="text/partytown">\n        window.dataLayer = window.dataLayer || [];\n        function gtag() {\n            dataLayer.push(arguments);\n        }\n        gtag("js", new Date());\n\n        gtag("config", "G-XXXXXXXXXX");\n    <\/script>', "</head>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(desc, "content"), renderHead());
}, "D:/MYWork/astroStart/regular-resonance/src/layouts/MainHeadLayout.astro", undefined);

const page = "Industries";
const seo_title = "Simbased | Industries we serve";
const seo_desc = "Simbased specializes in product design and advanced simulations, offering a competitive edge with better, reliable products at lower costs and faster time to market.";
const title = "we serve";
const desc = "Explore the diverse range of industries supported by Simbased.";
const bg_hero = "/images/home/pipe2.png";
const industrys = /* #__PURE__ */ JSON.parse("[{\"industry\":\"Automotive\",\"industry_url\":\"automotive\",\"logo_indusri_logo\":\"/icons/spanner.svg\",\"index_background_picture\":\"/images/home/auto-bg.png\",\"index_foreground_picture\":\"/images/home/auto-float.png\",\"industry_content_bg\":\"/IndBg/automotive.png\",\"industry_blocks\":[{\"industry_block\":\"We leverage years of experience collaborating with leading OEMs to deliver cutting-edge solutions driven by Computer Aided Engineering. We understand the unique challenges you face, and we're here to help you optimize your development process through the power of simulations.\",\"industry_block_details\":[]},{\"industry_block\":\"Our comprehensive suite of services empowers you to:\",\"industry_block_details\":[\"Boost design flexibility: Explore a wider range of design options virtually, saving time and resources.\",\"Reduce physical prototypes: Gain valuable insights without the need for expensive physical testing.\",\"Accelerate time to market: Get your innovative designs to market faster, staying ahead of the competition.\"]},{\"industry_block\":\"We specialize in a range of critical automotive engineering services, including:\",\"industry_block_details\":[\"Structural analysis: Optimize the strength and integrity of chassis and panels.\",\"Crash testing: Virtually simulate crash scenarios to ensure passenger safety.\",\"NVH analysis: Minimize noise, vibration, and harshness for a superior driving experience.\",\"Thermal management systems: Design efficient cooling systems for optimal performance.\",\"Electric propulsion systems: Optimize your electric powertrain to increase efficiency and durability of the system.\"]}],\"analyses_list\":[\"Non-linear structural analysis\",\"Dynamic simulations\",\"Crash analysis\",\"Fatigue\",\"Thermal analysis\",\"Electromagnetic simulations\",\"Manufacturing processes\",\"Computational fluid dynamics\"]},{\"industry\":\"Aerospace\",\"industry_url\":\"aerospace\",\"logo_indusri_logo\":\"/icons/plane.svg\",\"index_background_picture\":\"/images/home/ae-bg.png\",\"index_foreground_picture\":\"/images/home/ae-float.png\",\"industry_content_bg\":\"/IndBg/aerospace.png\",\"industry_blocks\":[{\"industry_block\":\"We bring together expertise in lightweight design, composite materials and computational fluid dynamics (CFD) to support your project. We understand the critical need for optimized structures that ensure both reliability and safety while achieving exceptional aerodynamic efficiency.\",\"industry_block_details\":[]},{\"industry_block\":\"Our combined expertise empowers you to:\",\"industry_block_details\":[\"Optimize structural integrity: Utilize advanced simulations to design lightweight yet robust composite structures, minimizing weight and maximizing performance.\",\"Streamline design iterations: Explore diverse configurations virtually, saving time and resources compared to traditional physical testing methods.\",\"Peak aerodynamic efficiency: Leverage CFD simulations to minimize drag and fuel consumption, significantly reducing operational costs.\"]},{\"industry_block\":\"Our approach focuses on:\",\"industry_block_details\":[\"Lightweight design: Utilizing topology and sizing optimization under various operating conditions to find the best solution under any load.\",\"Optimizing ply thickness, fiber orientation, and stack layup: Utilizing advanced tools to create lightweight and structurally sound composite structures.\",\"Aerodynamic performance: Accurately predicting airflow behavior around your design for superior performance and fuel efficiency.\"]}],\"analyses_list\":[\"Non-linear structural analysis\",\"Computational fluid dynamics\",\"Composite material analysis\",\"Lightweight optimization\",\"Fatigue\",\"Manufacturing processes\"]},{\"industry\":\"Energy and Transport\",\"industry_url\":\"energy-and-transport\",\"logo_indusri_logo\":\"/icons/earth.svg\",\"index_background_picture\":\"/images/home/en-bg.png\",\"index_foreground_picture\":\"/images/home/en-float.png\",\"industry_content_bg\":\"/IndBg/energy.png\",\"industry_blocks\":[{\"industry_block\":\"Energy consumption and environmental impact, are two of the key challenges of modern engineering. At SIMBASED, we work closely with energy industry in fields of water and wind turbines. With the use of FEA and CFD, we make sure these energy systems operate in a safe, reliable and efficient way. Besides the design of the turbines, we can also help you when designing and analyzing efficient electric propulsion systems. In the field of environmental engineering, we have great experiences in analysis of water and waste treatment. Using our design and CFD capabilities, we are able to work on research and development of pumps, compressors and heat exchangers. We understand the critical challenges of energy consumption and environmental impact. We are dedicated to working closely with the energy industry, specifically in the fields of water and wind energy, to develop sustainable and efficient solutions.\",\"industry_block_details\":[]},{\"industry_block\":\"Leveraging the power of FEA and CFD, we help you achieve:\",\"industry_block_details\":[\"Optimized performance: Ensure your energy systems operate safely, reliably, and efficiently, maximizing energy output and minimizing environmental impact.\",\"Streamlined design: Utilize advanced simulations to optimize turbine design and reduce physical prototypes, saving time and resources.\",\"Advanced electric propulsion systems: Benefit from our expertise in designing and analyzing efficient electric propulsion systems for next-generation solutions.\"]},{\"industry_block\":\"Beyond wind and water, our expertise extends to:\",\"industry_block_details\":[\"Pump, compressor, and heat exchanger development: Our design and CFD capabilities empower us to research and develop efficient components for various applications.\",\"Environmental engineering: We offer extensive experience in water and waste treatment analysis, contributing to cleaner water resources and waste management solutions.\"]}],\"analyses_list\":[\"Conjugate heat transfer\",\"Non-linear structural analysis\",\"Electromagnetic simulations\",\"Manufacturing processes\",\"Bulk material analysis\",\"Computational fluid dynamics\"]},{\"industry\":\"Consumer Products\",\"industry_url\":\"consumer-products\",\"logo_indusri_logo\":\"/icons/bag.svg\",\"index_background_picture\":\"/images/home/cp-bg.png\",\"index_foreground_picture\":\"/images/home/cp-float.png\",\"industry_desc\":\"\",\"industry_content_bg\":\"/IndBg/consumerproducts.png\",\"industry_blocks\":[{\"industry_block\":\"At Simbased, we leverage the latest in 3D CAD modeling, featuring parametric design and advanced surfacing, to transform your product ideas into reality. This empowers you to:\",\"industry_block_details\":[\"Design and virtually test your products in a digital environment, saving time and resources compared to traditional physical prototyping.\",\"Integrate analysis and simulation early in the design process, identifying potential issues and optimizing performance for a competitive edge.\"]},{\"industry_block\":\"Our commitment extends beyond creating a 3D model, recognizing that successful product realization requires more. We seamlessly integrate design for manufacturability (DFM) principles throughout the process, ensuring your product is:\",\"industry_block_details\":[\"Easy and cost-effective to manufacture\",\"Engineered for reliable operation\"]},{\"industry_block\":\"Furthermore, our extensive knowledge of injection molding, stamping, CNC machining and other manufacturing processes allows us to achieve this by:\",\"industry_block_details\":[\"Selecting the optimal manufacturing process based on your product's specific needs.\",\"Designing components with manufacturability in mind, minimizing production complexities and costs.\",\"Utilizing advanced simulation tools to predict and address potential manufacturing challenges, ensuring a smooth transition from design to production.\"]}],\"analyses_list\":[\"Electromagnetic simulations\",\"Manufacturing processes\",\"Non-linear structural analysis\",\"Conjugate heat transfer\",\"Computational fluid dynamics\"]},{\"industry\":\"Structural Engineering\",\"industry_url\":\"structural-engineering\",\"logo_indusri_logo\":\"/icons/spanner.svg\",\"index_background_picture\":\"/images/home/se-bg.png\",\"index_foreground_picture\":\"/images/home/se-float.png\",\"industry_desc\":\"\",\"industry_content_bg\":\"/IndBg/structuralengineering.png\",\"industry_blocks\":[{\"industry_block\":\"Structural engineering is the core of our expertise, having more than two decades of experience in optimization of structures using nonlinear structural simulations. Our deep understanding of continuum mechanics enables us to provide our customers with solutions tailored to their specifications.\",\"industry_block_details\":[]},{\"industry_block\":\"Our comprehensive services enable you to:\",\"industry_block_details\":[\"Unlock the full potential of your designs: Through advanced simulations, we go beyond linear analysis, allowing you to explore the nonlinear behavior of structures under real-world conditions pre and post its critical loads.\",\"Optimize stiffness and functionality: Gain valuable insights to refine your designs, ensuring optimal performance and achieving the desired balance between strength and functionality.\",\"Reduce material usage and costs: By accurately predicting structural behavior, we help you optimize material properties, leading to cost savings and a more sustainable footprint.\"]},{\"industry_block\":\"Our expertise extends to a wide range of applications, including:\",\"industry_block_details\":[\"Engineering design and mechanics: The key to any good product is understanding its behavior under real-world loads and optimizing it for specific functions\",\"Civil engineering: We provide insights into the behavior of construction structures and other critical infrastructure, contributing to their safety, durability and compliance with local design codes.\"]},{\"industry_block\":\"Unlock the full potential of your project with our team of experienced engineers!\",\"industry_block_details\":[]}],\"analyses_list\":[\"Non-linear structural analysis\",\"Dynamic simulations\",\"Fatigue\",\"Thermal analysis\",\"Manufacturing processes\"]},{\"industry\":\"Electronics\",\"industry_url\":\"electronics\",\"logo_indusri_logo\":\"/icons/chip.svg\",\"index_background_picture\":\"/images/home/elec-bg.png\",\"index_foreground_picture\":\"/images/home/elec-float.png\",\"industry_desc\":\"\",\"industry_content_bg\":\"/IndBg/Electronics.png\",\"industry_blocks\":[{\"industry_block\":\"We are passionate about driving innovation in the ever-evolving field of electrification. We understand the growing demand for sustainable solutions across various industries and are dedicated to providing comprehensive design and analysis services for propulsion systems.\",\"industry_block_details\":[]},{\"industry_block\":\"Our electrification expertise encompasses:\",\"industry_block_details\":[\"Electric machine design and analysis: We delve into electromagnetic, structural, NVH (Noise, Vibration, Harshness), and thermal analysis, ensuring optimal performance and efficiency.\",\"Addressing automotive NVH challenges: We possess the expertise to tackle complex NVH issues in the automotive sector, creating quieter and more comfortable driving experiences.\",\"Pushing boundaries with advanced cooling concepts: We stay at the forefront of innovative cooling solutions like oil-spray cooling, maximizing the power density of electric machines.\"]},{\"industry_block\":\"Beyond electric powertrains, we offer:\",\"industry_block_details\":[\"Power electronics analysis: We provide detailed structural and thermal analysis of power electronics systems, ensuring their longevity and reliability.\",\"Battery analysis: We offer in-depth analysis of battery systems, considering factors like thermal management and structural integrity.\"]}],\"analyses_list\":[\"Electromagnetic simulations\",\"Thermal analysis\",\"Manufacturing processes\",\"Non-linear structural analysis\",\"Computational fluid dynamics\"]},{\"industry\":\"Process engineering\",\"industry_url\":\"process-engineering\",\"logo_indusri_logo\":\"/icons/earth.svg\",\"index_background_picture\":\"/images/home/mine-bg.png\",\"index_foreground_picture\":\"/images/home/mine-float.png\",\"industry_content_bg\":\"/IndBg/oilandgas.png\",\"industry_blocks\":[{\"industry_block\":\"We empower process industries like food, chemical, oil & gas, and mining to achieve peak performance with our comprehensive suite of engineering and simulation services.\",\"industry_block_details\":[]},{\"industry_block\":\"We delve into the heart of your processes, analyzing and optimizing critical factors such as:\",\"industry_block_details\":[\"Heat management: With conjugate heat transfer analysis we predict and control heat losses and harmful heat distribution.\",\"Structural integrity: We analyze equipment and vessels to ensure they can withstand operational loads and pressures, guaranteeing safe and reliable operation.\",\"Fluid flow behavior: We optimize fluid flow patterns to enhance mixing, reaction times, and overall process efficiency.\",\"Material transport: We analyze material movement within your process, identifying bottlenecks and optimizing transport systems for increased throughput.\"]},{\"industry_block\":\"Benefits you can expect:\",\"industry_block_details\":[\"Enhanced process efficiency: Achieve optimal performance through data-driven insights and optimized process parameters.\",\"Improved product quality: Ensure consistent and high-quality products by maintaining precise control over heat distribution and mixing processes.\",\"Reduced operating costs: Minimize energy consumption and equipment wear through optimized performance and efficient resource utilization.\",\"Enhanced safety: Mitigate risks by identifying potential structural weaknesses and optimizing for safe operation.\"]}],\"analyses_list\":[\"Thermal analysis\",\"Non-linear structural analysis\",\"Bulk material analysis\",\"Computational fluid dynamics\"]}]");
const Data = {
  page,
  seo_title,
  seo_desc,
  title,
  desc,
  bg_hero,
  industrys,
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t pt-20 pb-20"> <div class="grid grid-cols-4 gap-5 lg:grid-cols-12 container mx-auto"> <div class="col-span-3 flex flex-col gap-y-4"> <img loading="lazy" width="140px" src="/logo.png" alt="Simbased logo" class="logo aspect-[236/31]"> <span class="text-muted-foreground text-sm mt-4">
© 2024 Simbased
</span> <!-- socials --> <div class="flex gap-x-3"></div> </div> <div class="col-span-2 lg:col-span-3"> <p class="mb-3 lg:mb-9 text-muted-foreground">Why Simbased?</p> <ul class="flex flex-col gap-y-2 lg:gap-y-3"> <li> <a href="/about" class="text-foreground hover:text-primary duration-300 ease-in-out">
About us
</a> </li> <li> <a href="/case-studies/case" class="text-foreground hover:text-primary duration-300 ease-in-out">
Case studies
</a> </li> <li> <a href="/contact" class="text-foreground hover:text-primary duration-300 ease-in-out">
Contact us
</a> </li> </ul> </div> <div class="col-span-2 lg:col-span-3"> <p class="mb-3 lg:mb-9 text-muted-foreground">Industries</p> <ul class="flex flex-col gap-y-2 lg:gap-y-3"> ${Data.industrys.map((item) => renderTemplate`<li> <a${addAttribute(`/industries?industry=${item.industry_url}#selector`, "href")} class="text-foreground hover:text-primary duration-300 ease-in-out"> ${item.industry} </a> </li>`)} </ul> </div> <div class="col-span-2 lg:col-span-3"> <p class="mb-3 lg:mb-9 text-muted-foreground">Policies</p> <ul class="flex flex-col gap-y-2 lg:gap-y-3"> <li> <a href="/cookies.pdf" class="text-foreground hover:text-primary duration-300 ease-in-out">
Cookies policy
</a> </li> <li> <a href="/terms.pdf" class="text-foreground hover:text-primary duration-300 ease-in-out">
Terms of use
</a> </li> </ul> </div> </div> </footer>`;
}, "D:/MYWork/astroStart/regular-resonance/src/components/Footer/Footer.astro", undefined);

const Services = /* #__PURE__ */ JSON.parse("[{\"name\":\"Numerical simulations\",\"seo_title\":\"Simbased | Numerical simulations\",\"seo_desc\":\"Numerical simulation can give us an incredible insight in the behaviour of our product. With the use of Finite Element Analysis, Computational Fluid Dynamics and other simulation methods we can study the real-world environment and adapt our design faster. This results in a more reliable and cheaper product with a faster time to market.\",\"hero_bg\":\"/images/home/digger.png\",\"image_index\":\"/images/numerical-solution.png\",\"url\":\"/solutions/numerical-simulation\",\"desc\":\"Numerical simulation can give us an incredible insight in the behaviour of our product. With the use of Finite Element Analysis, Computational Fluid Dynamics and other simulation methods we can study the real-world environment and adapt our design faster. This results in a more reliable and cheaper product with a faster time to market.\",\"info\":[{\"title\":\"Structural analysis\",\"list\":[\"Nonlinear analysis (Complex nonlinear problems including nonlinear contact, material properties and large deformations, buckling, creep, etc...)\",\"Structural analysis (Code compliant analysis of civil and industrial structures.)\",\"Pressure vessel analysis (ASME Section VIII Division 2)\",\"Pipeline stress analysis (Welding stresses with safety assessments, ASME B31.3)\",\"Thermo-mechanical simulations (Thermo-mechanical loads, expansion of materials, residual stresses)\"],\"img\":\"/silo.png\"},{\"title\":\"Dynamic analysis\",\"list\":[\"Multi-Body Dynamics (Complex mechanisms like landing gears and suspensions)\",\"Normal modes (Natural frequencies and mode shapes, Complex eigenvalues, preloaded eigenvalues)\",\"Frequency response analysis (Direct integration and mode based steady-state response analysis)\",\"Acoustic and NVH analysis (Boundary element based acoustic analysis, fully acoustic analysis)\",\"Random response analysis and Response spectrum analysis\",\"Radiated power analysis\"],\"img\":\"/dynamic-anal.png\"},{\"title\":\"Crash analysis\",\"list\":[\"Crash analysis (Complex structures like a vehicle, mobile phone, ect..)\",\"Strain-rate dependent materials\",\"Post-buckling effects\",\"Explicit dynamic (Complex dynamic structures like crankshafts)\",\"Blast simulations (soils, fluids and structures)\",\"Drop test simulations\"],\"img\":\"/sliderBg.png\"},{\"title\":\"Fatigue\",\"list\":[\"Static analysis based fatigue (S-N curve, mean stress correction, residual stresses )\",\"Vibrational fatigue (Based on random response analysis)\",\"Thermomechanical fatigue (Power electronic thermo-mechanical analysis)\"],\"img\":\"/F1.png\"},{\"title\":\"Composite material\",\"list\":[\"Predictions of components made from high-performance materials\",\"Inter and intra laminar damage modelling (Ply failure and delamination)\",\"Multi-scale analysis (Larger structures with embedded domains)\",\"Impact simulations on laminates (Stacked-shell approach)\",\"Micromechanics (Homogenization and localization)\"],\"img\":\"/Home_carosel_4.png\"},{\"title\":\"Thermal analysis\",\"list\":[\"Solid heat transfer (Conduction and Radiation)​\",\"Conjugated heat transfer (Air and Liquid cooling)​\",\"Joule heating (Coupled electric thermal analysis for realistic heat losses calculation)\",\"Battery cell, electronic and electric motor cooling\",\"Heat exchanger and boiler thermal analysis\"],\"img\":\"/thermanalysis.png\"},{\"title\":\"Computational fluid dynamics\",\"list\":[\"Multiphase flow simulation\",\"Particle analysis (Smooth particle hydrodynamics)\",\"Fluid-structural interaction (Turbine loads, exhaust system loading)\",\"Turbomachinery (pumps and turbines)\",\"Forced and natural convection\",\"Free surface flow (Complex shapes of cooling channels)\",\"Aerodynamics\"],\"img\":\"/Drone.png\"},{\"title\":\"Bulk material analysis\",\"list\":[\"Discrete element method for bulk analysis\",\"Complex bulk material models\",\"Conveyor and hopper analysis\",\"Bulk material loading extraction\",\"Ware analysis\"],\"img\":\"/DEM.png\"},{\"title\":\"Manufacturing analysis\",\"list\":[\"Injection molding (Simulation of flow, pack and warping stages. Optimization of cooling and molding parameters for higher productivity)​\",\"Forming (Analysis of deep drawing for single and multi-stage tools. Optimization of the die for the springbuck effect.)​\",\"Casting ( Gravitations, low and high-pressure casting processes)\"],\"img\":\"/Figure4.png\"},{\"title\":\"Electromagnetic analysis\",\"list\":[\"PMSM analysis (Concept design, Torque speed characteristics, Cogging torque, back EMF harmonic study, Id-Iq maps, Eddy current losses, NVH)\",\"Induction motor analysis (Analysis of entire IM period, study of harmonics, starting analysis)\",\"SMR motor analysis (switch on-off angle optimization, losses calculation, current chopping techniques)\"],\"img\":\"/EM.png\"},{\"title\":\"Numerical optimization\",\"list\":[\"Parametric optimization - (Shape optimization, thickness optimization, composite optimization, material characterization)\",\"Topology optimization - (Complex design spaces, multi-objective and multi-constraint optimization, manufacturing constraints)\",\"Topography and shape optimization - (Bead optimization, metal sheet thickness optimization, shape optimization)\"],\"img\":\"/OPTIMIZATION_SERVICES_5.png\"}]},{\"name\":\"Product Design\",\"seo_title\":\"Simbased | Engineering and Product design\",\"seo_desc\":\"Using the latest engineering tools, we can take your product through all the stages of design, form concept to production readiness. You may only have an idea of what your product should do, or you can already have a preliminary design of your product, either way, we can help you design the most reliable and cost effective products on the market.\",\"hero_bg\":\"/images/prod-design.jpeg\",\"fullName\":\"Engineering and Product design\",\"image_index\":\"/images/prod-design.jpeg\",\"url\":\"/solutions/product-design\",\"desc\":\"Using the latest engineering tools, we can take your product through all the stages of design, form concept to production readiness. You may only have an idea of what your product should do, or you can already have a preliminary design of your product, either way, we can help you design the most reliable and cost effective products on the market.\",\"info\":[{\"title\":\"Concept design\",\"list\":[\"With our engineering experiences we can help you develop product from the concept idea.\",\"Using the CAD design we can make early iterations of the designs come to life and adjust it as we go.\",\"Ensuring the product is compliant with appropriate technical and regulatory specifications\"],\"img\":\"/product_1.png\"},{\"title\":\"3D CAD modelling\",\"list\":[\"Precision modelling of complex parts and assemblies\",\"Model preparation for rapid prototyping and various manufacturing methods, such as injection molding.\",\"Parametric 3D design for iterative product design\",\"Advanced surface modelling and forming\",\"Visualization for better understanding of products form, function, and aesthetics\"],\"img\":\"/blender.png\"},{\"title\":\"3D Print Prototyping and Manufacturing\",\"list\":[\"We offer rapid prototyping with the latest 3D printing technology\",\"Precision CNC machining via our trusted partners for prototyping and production\"],\"img\":\"/3dprint.jpg\"},{\"title\":\"Technical Documentation\",\"list\":[\"With our extensive knowledge of manufacturing processes and tolerancing, we prepare complete technical documentation, enabling smooth transition of your product into production\"],\"img\":\"/technologyManufac.png\"},{\"title\":\"Requirements Definition\",\"list\":[\"We assist in defining your product requirements by conducting thorough industry standard analyses and comprehensive market research.\",\"Ensuring your product complies with all defined requirements is our top priority.\"],\"img\":\"/blender_spec1.jpeg\"}]}]");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 bg-white left-0 w-screen border-b py-6 z-[999] shadow-sm" data-astro-cid-2w66rqv5> <div class="container flex items-center gap-x-12 justify-between" data-astro-cid-2w66rqv5> <a href="/" title="Home" data-astro-cid-2w66rqv5> <img class="w-[150px] lg:w-[200px]" src="/logo.png" alt="Simbased logo" class="logo aspect-[236/31]" data-astro-cid-2w66rqv5> </a> <div class="flex-grow" data-astro-cid-2w66rqv5></div> <ul class="gap-x-12 text-[15px] font-semibold hidden lg:flex" data-astro-cid-2w66rqv5> <li class="group cursor-pointer" data-astro-cid-2w66rqv5> <div class="relative" data-astro-cid-2w66rqv5> <div class="text-foreground/70 hover:text-primary font-normal text-[15px] capitalize lg:text-base" data-astro-cid-2w66rqv5>
Industries
</div> <div class="group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute z-[99999] duration-300 ease-in-out border top-5 left-0 p-2 w-[220px] h-fit bg-white shadow-xl invisible opacity-0 translate-y-2" data-astro-cid-2w66rqv5> <p class="text-zinc-500 px-1.5 pt-3 font-normal uppercase text-sm mb-3" data-astro-cid-2w66rqv5>
Industries
</p> <ul class="flex gap-x-4 flex-col" data-astro-cid-2w66rqv5> ${Data.industrys.map((item) => renderTemplate`<a${addAttribute(`/industries?industry=${item.industry_url}#selector`, "href")} class="industry-link w-full text-left text-nowrap flex group duration-300 p-2 hover:bg-primary/10 items-center gap-x-2" data-astro-cid-2w66rqv5> <img width="16" height="16"${addAttribute(item.logo_indusri_logo, "src")}${addAttribute(item.industry, "alt")} data-astro-cid-2w66rqv5> <div class="font-normal w-full text-left group-hover:text-primary text-zinc-700 duration-300" data-astro-cid-2w66rqv5> ${item.industry} </div> </a>`)} </ul> </div> </div> </li> <li class="group cursor-pointer" data-astro-cid-2w66rqv5> <div class="relative group cursor-pointer" data-astro-cid-2w66rqv5> <div class="text-foreground/70 hover:text-primary font-normal text-[15px] capitalize lg:text-base" data-astro-cid-2w66rqv5>
Services
</div> <div class="group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute z-[99999] duration-300 ease-in-out border top-5 left-0 p-2 w-[220px] h-fit bg-white shadow-xl invisible opacity-0 translate-y-2" data-astro-cid-2w66rqv5> <p class="text-zinc-500 px-1.5 pt-3 font-normal uppercase text-sm mb-3" data-astro-cid-2w66rqv5>
Services
</p> <ul class="flex gap-x-4 flex-col" data-astro-cid-2w66rqv5> ${Services.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="w-full text-left text-nowrap flex group duration-300 p-2 hover:bg-primary/10 items-center gap-x-2" data-astro-cid-2w66rqv5><div class="font-normal w-full text-left group-hover:text-primary text-zinc-700 duration-300" data-astro-cid-2w66rqv5> ${item.name} </div> </a>`)} </ul> </div> </div> </li> <li data-astro-cid-2w66rqv5> <a class="text-foreground/70 hover:text-primary lg:text-base font-normal text-[15px]" href="/about" data-astro-cid-2w66rqv5>
About us
</a> </li> <li data-astro-cid-2w66rqv5> <a class="text-foreground/70 hover:text-primary lg:text-base font-normal text-[15px]" href="/case-studies/case" data-astro-cid-2w66rqv5>
Case studies
</a> </li> </ul> <a href="/contact" class="px-5 lg:px-7 text-sm w-fit items-start py-3 lg:py-3.5 gap-x-3 hover:ring-2 hover:ring-primary hover:ring-opacity-50 duration-300 hidden lg:flex bg-gradient-to-r from-[#1FA48C] via-[#1F9BA4] to-[#1F6CA4] text-white" data-astro-cid-2w66rqv5> <span class="lg:text-base" data-astro-cid-2w66rqv5>Get in touch</span> <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2w66rqv5> <path d="M1 18.4059L12.9944 6.39343" stroke="white" stroke-opacity="0.9" stroke-width="1.7" data-astro-cid-2w66rqv5></path> <path d="M13.0277 6.49352C13.4968 6.49352 13.877 6.11268 13.877 5.64288C13.877 5.17308 13.4968 4.79224 13.0277 4.79224L13.0277 6.49352ZM1.75895 6.49352H13.0277L13.0277 4.79224H1.75895L1.75895 6.49352Z" fill="white" fill-opacity="0.9" data-astro-cid-2w66rqv5></path> <path d="M13.877 6.39338C13.877 5.92358 13.4968 5.54273 13.0277 5.54273C12.5586 5.54273 12.1783 5.92358 12.1783 6.39338L13.877 6.39338ZM13.877 17.6791V6.39338L12.1783 6.39338V17.6791L13.877 17.6791Z" fill="white" fill-opacity="0.9" data-astro-cid-2w66rqv5></path> </svg> </a> <div style="box-shadow: -30px 0px 30px rgba(0, 0, 0, 0.1)" class="mobile-menu invisible opacity-0 translate-x-[100%] duration-500 ease-in-out w-screen h-[100vh] text-foreground z-[9999] top-[65px] bg-white/80 border-t backdrop-blur-lg fixed left-0 px-6 pt-12" data-astro-cid-2w66rqv5> <div class="rounded-lg p-5 duration-300 ease-in-out" data-astro-cid-2w66rqv5> <div class="menu" data-astro-cid-2w66rqv5> <p class="text-sm text-foreground" data-astro-cid-2w66rqv5></p> <ul class="flex flex-col gap-y-7 text-foreground" data-astro-cid-2w66rqv5> <div class="text-xl" data-astro-cid-2w66rqv5> <button class="flex items-center gap-x-2 button-submenu" data-astro-cid-2w66rqv5>
Industries<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-foreground duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2w66rqv5> <path stroke-width="1.5" d="M19 9l-7 7-7-7" data-astro-cid-2w66rqv5></path> </svg> </button> <div class="sub-menu text-base flex flex-col invisible opacity-0 h-0" data-astro-cid-2w66rqv5> ${Data.industrys.map((item) => renderTemplate`<div class="sub-menu-item group w-fit mt-2" data-astro-cid-2w66rqv5> <a${addAttribute(`/industries?industry=${item.industry_url}#selector`, "href")} class="group-scoped" data-astro-cid-2w66rqv5>${item.industry} <span class="block h-[1px] w-[0px] group-scoped-hover:w-full ease-in-out duration-200 bg-gray-400" data-astro-cid-2w66rqv5></span> </a> </div>`)} </div> </div> <div class="text-xl" data-astro-cid-2w66rqv5> <button class="flex items-center gap-x-2 button-submenu" data-astro-cid-2w66rqv5>
Services<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-foreground duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2w66rqv5> <path stroke-width="1.5" d="M19 9l-7 7-7-7" data-astro-cid-2w66rqv5></path> </svg> </button> <div class="sub-menu text-base flex flex-col invisible opacity-0 h-0" data-astro-cid-2w66rqv5> ${Services.map((item) => renderTemplate`<div class="sub-menu-item w-fit mt-2" data-astro-cid-2w66rqv5> <a${addAttribute(item.url, "href")} class="group-scoped" data-astro-cid-2w66rqv5>${item.name} <span class="block h-[1px] w-[0px] group-scoped-hover:w-full ease-in-out duration-200 bg-gray-400" data-astro-cid-2w66rqv5></span> </a> </div>`)} </div> </div> <div class="text-xl" data-astro-cid-2w66rqv5> <a href="/about" data-astro-cid-2w66rqv5>About us</a> </div> <div class="text-xl" data-astro-cid-2w66rqv5> <a href="/case-studies" data-astro-cid-2w66rqv5>Case studies</a> </div> <li data-astro-cid-2w66rqv5> <a href="/contact" class="text-xl" data-astro-cid-2w66rqv5>Get in touch</a> </li> </ul> </div> <hr class="mt-8 mb-8 border border-white/10" data-astro-cid-2w66rqv5> </div> </div> <button title="Toggle menu" class="block lg:hidden toggle-menu" data-astro-cid-2w66rqv5> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 close" data-astro-cid-2w66rqv5> <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" data-astro-cid-2w66rqv5></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 hidden open-close" data-astro-cid-2w66rqv5><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" data-astro-cid-2w66rqv5></path></svg> </button> </div> </header> ${renderScript($$result, "D:/MYWork/astroStart/regular-resonance/src/components/Header/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/MYWork/astroStart/regular-resonance/src/components/Header/Header.astro", undefined);

const $$Astro = createAstro("https://www.simbased.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, desc } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainHeadLayout", $$MainHeadLayout, { "title": title, "desc": desc })}${maybeRenderHead()}<body class="max-w-screen overflow-x-hidden"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html><!-- <style is:global></style> -->`;
}, "D:/MYWork/astroStart/regular-resonance/src/layouts/Layout.astro", undefined);

export { $$Layout as $, Data as D, Services as S };
