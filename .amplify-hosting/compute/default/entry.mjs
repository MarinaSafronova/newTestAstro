import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_ut99h4Dq.mjs';
import { manifest } from './manifest_7S_ntcCQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/case-studies/akashi-kaikyo-bridge-dynamic-analysis.astro.mjs');
const _page3 = () => import('./pages/case-studies/analysis-of-the-pmsm.astro.mjs');
const _page4 = () => import('./pages/case-studies/automotive-chassis-nvh.astro.mjs');
const _page5 = () => import('./pages/case-studies/bead-optimization-of-the-exhaust-muffler.astro.mjs');
const _page6 = () => import('./pages/case-studies/case.astro.mjs');
const _page7 = () => import('./pages/case-studies/compressor-blade-tip-rubbing-vibration.astro.mjs');
const _page8 = () => import('./pages/case-studies/crankshaft-transient-simulation.astro.mjs');
const _page9 = () => import('./pages/case-studies/drop-test-of-intermodal-container.astro.mjs');
const _page10 = () => import('./pages/case-studies/gearbox-nvh.astro.mjs');
const _page11 = () => import('./pages/case-studies/industrial-hall-structural-integrity-during-the-earthquake.astro.mjs');
const _page12 = () => import('./pages/case-studies/muffler-housing-forming-simulation.astro.mjs');
const _page13 = () => import('./pages/case-studies/new_blog.astro.mjs');
const _page14 = () => import('./pages/case-studies/nonlinear-buckling-of-the-reinforced-plate.astro.mjs');
const _page15 = () => import('./pages/case-studies/spur-gear-contact-simulation.astro.mjs');
const _page16 = () => import('./pages/case-studies/truck-frontal-crash-tube-impact-simulation.astro.mjs');
const _page17 = () => import('./pages/case-studies/turbofan-engine-bird-strike.astro.mjs');
const _page18 = () => import('./pages/contact.astro.mjs');
const _page19 = () => import('./pages/industries.astro.mjs');
const _page20 = () => import('./pages/solutions/numerical-simulation.astro.mjs');
const _page21 = () => import('./pages/solutions/product-design.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/case-studies/akashi-kaikyo-bridge-dynamic-analysis.astro", _page2],
    ["src/pages/case-studies/analysis-of-the-pmsm.astro", _page3],
    ["src/pages/case-studies/automotive-chassis-nvh.astro", _page4],
    ["src/pages/case-studies/bead-optimization-of-the-exhaust-muffler.astro", _page5],
    ["src/pages/case-studies/case.astro", _page6],
    ["src/pages/case-studies/compressor-blade-tip-rubbing-vibration.astro", _page7],
    ["src/pages/case-studies/crankshaft-transient-simulation.astro", _page8],
    ["src/pages/case-studies/drop-test-of-intermodal-container.astro", _page9],
    ["src/pages/case-studies/gearbox-nvh.astro", _page10],
    ["src/pages/case-studies/industrial-hall-structural-integrity-during-the-earthquake.astro", _page11],
    ["src/pages/case-studies/muffler-housing-forming-simulation.astro", _page12],
    ["src/pages/case-studies/new_blog.astro", _page13],
    ["src/pages/case-studies/nonlinear-buckling-of-the-reinforced-plate.astro", _page14],
    ["src/pages/case-studies/spur-gear-contact-simulation.astro", _page15],
    ["src/pages/case-studies/truck-frontal-crash-tube-impact-simulation.astro", _page16],
    ["src/pages/case-studies/turbofan-engine-bird-strike.astro", _page17],
    ["src/pages/contact.astro", _page18],
    ["src/pages/industries.astro", _page19],
    ["src/pages/solutions/numerical-simulation.astro", _page20],
    ["src/pages/solutions/product-design.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///D:/MYWork/astroStart/regular-resonance/.amplify-hosting/static/",
    "server": "file:///D:/MYWork/astroStart/regular-resonance/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
