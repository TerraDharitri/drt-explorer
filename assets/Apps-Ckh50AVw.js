import{j as e,F as t,l as a,Y as r,S as s,Z as i,H as l,I as o}from"./index-DAlTqEZr.js";import{r as n,L as d}from"./vendor-DKx09kD0.js";import"./api-BXm3BkPp.js";const c=()=>{const[c,m]=n.useState([]),[p,h]=n.useState(!0),[x,f]=n.useState(null),[u,g]=n.useState("all"),[y,v]=n.useState(""),[b,j]=n.useState("popularity"),[N,w]=n.useState("desc"),[k,S]=n.useState(!1),D=[{id:"dharitri-exchange",name:"Dharitri Exchange",description:"A revolutionary decentralized exchange built on Dharitri Network, enabling the trading of tokenized assets with near-instant settlements.",category:"defi",url:"https://dharitri.exchange",logo:"https://placehold.co/200x200/1a4dda/ffffff?text=DSwap",users:125e3,tvl:352e6,volume24h:58e5,popularityScore:98,verified:!0},{id:"dreamrare",name:"DreamRare",description:"The premier NFT marketplace on Dharitri, featuring digital collectibles, art, and gaming assets.",category:"nft",url:"https://dreamrare.io",logo:"https://placehold.co/200x200/10b981/ffffff?text=DreamRare",users:85e3,tvl:125e5,volume24h:98e4,popularityScore:92,verified:!0},{id:"dharitri-knights",name:"dharitri Knights",description:"Play-to-earn RPG game where players can earn tokens and NFTs by completing quests and battling other players.",category:"games",url:"https://dharitriknights.com",logo:"https://placehold.co/200x200/f59e0b/ffffff?text=Knights",users:42e3,tvl:85e5,volume24h:65e4,popularityScore:85,verified:!0},{id:"growth-defi",name:"Growth DeFi",description:"Advanced yield farming protocol that maximizes returns through automated strategies and compounding.",category:"defi",url:"https://growthdefi.io",logo:"https://placehold.co/200x200/8b5cf6/ffffff?text=Growth",users:28e3,tvl:42e6,volume24h:32e5,popularityScore:83,verified:!0},{id:"dharitri-social",name:"Dharitri Social",description:"Decentralized social network where users own their data and earn rewards for content creation and engagement.",category:"social",url:"https://dhasocial.network",logo:"https://placehold.co/200x200/ef4444/ffffff?text=DSocial",users:68e3,tvl:58e5,volume24h:24e4,popularityScore:79,verified:!0},{id:"chain-vault",name:"Chain Vault",description:"Secure multi-signature wallet and treasury management system for organizations and DAOs.",category:"utility",url:"https://chainvault.finance",logo:"https://placehold.co/200x200/3b82f6/ffffff?text=Vault",users:12500,tvl:78e6,volume24h:42e4,popularityScore:76,verified:!0},{id:"dharitri-dao",name:"Dharitri DAO",description:"Decentralized autonomous organization focused on funding and supporting Dharitri ecosystem projects.",category:"dao",url:"https://dharitriao.org",logo:"https://placehold.co/200x200/a855f7/ffffff?text=DAO",users:9200,tvl:24e6,volume24h:18e4,popularityScore:74,verified:!0},{id:"nftify",name:"NFTify",description:"Platform for creating, managing, and selling NFTs without technical knowledge.",category:"nft",url:"https://nftify.io",logo:"https://placehold.co/200x200/ec4899/ffffff?text=NFTify",users:32e3,tvl:48e5,volume24h:56e4,popularityScore:72,verified:!0},{id:"dharitri-worlds",name:"Dharitri Worlds",description:"Metaverse game where players can own virtual land, build experiences, and socialize in a 3D environment.",category:"games",url:"https://dharitriworlds.game",logo:"https://placehold.co/200x200/14b8a6/ffffff?text=DWorlds",users:38e3,tvl:72e5,volume24h:42e4,popularityScore:70,verified:!0},{id:"identity-dao",name:"Identity DAO",description:"Decentralized identity verification and authentication system built on blockchain.",category:"utility",url:"https://identitydao.io",logo:"https://placehold.co/200x200/f97316/ffffff?text=Identity",users:16500,tvl:38e5,volume24h:85e3,popularityScore:65,verified:!1},{id:"defi-lend",name:"DeFi Lend",description:"Decentralized lending and borrowing platform with competitive interest rates.",category:"defi",url:"https://defilend.finance",logo:"https://placehold.co/200x200/06b6d4/ffffff?text=Lend",users:24e3,tvl:18e6,volume24h:12e5,popularityScore:68,verified:!0},{id:"social-chain",name:"Social Chain",description:"Blockchain-based messaging and social media platform with built-in rewards.",category:"social",url:"https://socialchain.app",logo:"https://placehold.co/200x200/d946ef/ffffff?text=Social",users:45e3,tvl:24e5,volume24h:12e4,popularityScore:66,verified:!1}];n.useEffect((()=>{(async()=>{h(!0),f(null);try{let e="all"===u?[...D]:D.filter((e=>e.category===u));if(""!==y.trim()){const t=y.toLowerCase();e=e.filter((e=>e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)))}e.sort(((e,t)=>{let a,r;switch(b){case"name":a=e.name,r=t.name;break;case"users":a=e.users,r=t.users;break;case"tvl":a=e.tvl,r=t.tvl;break;case"volume":a=e.volume24h,r=t.volume24h;break;default:a=e.popularityScore,r=t.popularityScore}if("string"==typeof a){const e=a.localeCompare(r);return"asc"===N?e:-e}return"asc"===N?a-r:r-a})),setTimeout((()=>{m(e),h(!1)}),600)}catch(e){f("Failed to fetch dApps"),h(!1)}})()}),[u,y,b,N]);const z=e=>{b===e?w("asc"===N?"desc":"asc"):(j(e),w("desc"))},F=e=>e>=1e9?"$"+(e/1e9).toFixed(2)+"B":e>=1e6?"$"+(e/1e6).toFixed(2)+"M":e>=1e3?"$"+(e/1e3).toFixed(2)+"K":"$"+e.toFixed(2),A=t=>b!==t?null:"asc"===N?e.jsx(l,{className:"ml-1"}):e.jsx(o,{className:"ml-1"});return p?e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Decentralized Applications"}),e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})})]}):x?e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Decentralized Applications"}),e.jsx("div",{className:"bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg",children:x})]}):e.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-7xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-6",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Decentralized Applications"}),e.jsxs("div",{className:"flex items-center mt-4 md:mt-0 space-x-2",children:[e.jsxs("form",{onSubmit:e=>{e.preventDefault()},className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search dApps...",value:y,onChange:e=>v(e.target.value),className:"pl-10 pr-4 py-2 w-full rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"}),e.jsx(t,{className:"absolute left-3 top-3 text-gray-400"})]}),e.jsx("button",{onClick:()=>S(!k),className:"p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700",children:e.jsx(a,{className:k?"text-primary":"text-gray-500"})})]})]}),e.jsx("div",{className:"mb-6 flex flex-wrap gap-2",children:[{id:"all",name:"All dApps"},{id:"defi",name:"DeFi"},{id:"nft",name:"NFT"},{id:"games",name:"Games"},{id:"social",name:"Social"},{id:"dao",name:"DAO"},{id:"utility",name:"Utility"}].map((t=>e.jsx("button",{onClick:()=>g(t.id),className:"px-3 py-1 rounded-md text-sm "+(u===t.id?"bg-primary text-white":"bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"),children:t.name},t.id)))}),k&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Sort by"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("button",{onClick:()=>z("popularity"),className:"px-3 py-1 rounded-md text-sm flex items-center "+("popularity"===b?"bg-primary text-white":"bg-white dark:bg-gray-700"),children:["Popularity ",A("popularity")]}),e.jsxs("button",{onClick:()=>z("name"),className:"px-3 py-1 rounded-md text-sm flex items-center "+("name"===b?"bg-primary text-white":"bg-white dark:bg-gray-700"),children:["Name ",A("name")]}),e.jsxs("button",{onClick:()=>z("users"),className:"px-3 py-1 rounded-md text-sm flex items-center "+("users"===b?"bg-primary text-white":"bg-white dark:bg-gray-700"),children:["Users ",A("users")]}),e.jsxs("button",{onClick:()=>z("tvl"),className:"px-3 py-1 rounded-md text-sm flex items-center "+("tvl"===b?"bg-primary text-white":"bg-white dark:bg-gray-700"),children:["TVL ",A("tvl")]}),e.jsxs("button",{onClick:()=>z("volume"),className:"px-3 py-1 rounded-md text-sm flex items-center "+("volume"===b?"bg-primary text-white":"bg-white dark:bg-gray-700"),children:["Volume ",A("volume")]})]})]}),e.jsxs("p",{className:"mb-6 text-gray-500 dark:text-gray-400",children:["Showing ",c.length," ",1===c.length?"application":"applications"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:c.map((t=>{return e.jsx(d,{to:`/app/${t.id}`,className:"bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-16 h-16 mr-4 flex-shrink-0 overflow-hidden rounded-lg",children:e.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h3",{className:"text-lg font-semibold",children:t.name}),t.verified&&e.jsx("span",{className:"ml-2 text-primary",title:"Verified dApp",children:e.jsx(r,{size:12})})]}),e.jsx("span",{className:"inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full mt-1 capitalize",children:t.category})]})]}),e.jsx("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2",children:t.description}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center text-gray-500 mb-1",children:[e.jsx(s,{size:12,className:"mr-1"}),e.jsx("span",{className:"text-xs",children:"Users"})]}),e.jsx("p",{className:"font-medium text-sm",children:(a=t.users,a>=1e6?(a/1e6).toFixed(1)+"M":a>=1e3?(a/1e3).toFixed(1)+"K":a.toString())})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center text-gray-500 mb-1",children:[e.jsx(i,{size:12,className:"mr-1"}),e.jsx("span",{className:"text-xs",children:"TVL"})]}),e.jsx("p",{className:"font-medium text-sm",children:F(t.tvl)})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"flex items-center justify-center text-gray-500 mb-1",children:e.jsx("span",{className:"text-xs",children:"Volume 24h"})}),e.jsx("p",{className:"font-medium text-sm",children:F(t.volume24h)})]})]}),e.jsx("div",{className:"mt-4 text-xs text-gray-500 truncate",children:e.jsx("span",{className:"hover:text-primary",children:t.url})})]})},t.id);var a}))}),0===c.length&&e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center",children:[e.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No dApps found matching your criteria."}),e.jsx("button",{onClick:()=>{v(""),g("all")},className:"mt-2 text-primary hover:underline",children:"Clear filters"})]})]})};export{c as default};
