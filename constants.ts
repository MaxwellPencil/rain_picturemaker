import { PromptStyle, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: "all", label: "全部风格" },
  { id: "anime", label: "动漫 & 二次元" },
  { id: "photorealistic", label: "写实摄影" },
  { id: "3d", label: "3D & CGI" },
  { id: "artistic", label: "传统艺术" },
  { id: "cinematic", label: "电影质感" },
  { id: "game", label: "游戏资产" },
  { id: "abstract", label: "抽象 & 特效" },
];

export const PROMPT_STYLES: PromptStyle[] = [
  // --- SPECIAL REQUESTS & TRENDING ---
  {
    id: "anime-spider",
    name: "蜘蛛侠平行宇宙",
    category: "anime",
    description: "半调网点、色差故障、漫画波普艺术风格。",
    tags: ["平行宇宙", "美漫", "波普", "故障风"],
    template: "Illustration of {{subject}} in the style of Spider-Man: Into the Spider-Verse, comic book aesthetic, halftone dots, chromatic aberration, vibrant neon colors, dynamic angle, graffiti textures, frame rate modulation style, sony animation style.",
    previewColor: "from-red-600 to-blue-600"
  },
  {
    id: "3d-arcane",
    name: "双城之战 (Arcane)",
    category: "3d",
    description: "Fortiche工作室风格，手绘纹理3D，油画质感。",
    tags: ["英雄联盟", "手绘3D", "蒸汽朋克", "油画感"],
    template: "Portrait of {{subject}} in the style of Arcane League of Legends, Fortiche production, hand-painted texture maps, oil painting aesthetic on 3d model, visible brushstrokes, dramatic rim lighting, steampunk vibes, high fidelity, masterpiece.",
    previewColor: "from-blue-800 to-amber-600"
  },

  // --- NEW ADDITIONS (Request: 10 New Styles) ---
  {
    id: "art-hudson",
    name: "哈德逊河流派",
    category: "artistic",
    description: "宏大的自然风景，浪漫主义，细腻光影与氛围。",
    tags: ["风景", "油画", "浪漫主义", "史诗"],
    template: "Oil painting of {{subject}} in the style of the Hudson River School, Thomas Cole, vast landscape background, dramatic sunlight breaking through clouds, romanticism, meticulous detail, nature worship, atmospheric perspective, epic scale.",
    previewColor: "from-green-700 to-yellow-600"
  },
  {
    id: "cinema-steampunk",
    name: "蒸汽朋克 (Steampunk)",
    category: "cinematic",
    description: "维多利亚科幻，齿轮，黄铜，工业雾气。",
    tags: ["复古科幻", "机械", "黄铜", "维多利亚"],
    template: "Steampunk character design of {{subject}}, victorian era clothing, brass gears, clockwork mechanisms, steam powered accessories, leather and copper textures, sepia tone, industrial fog, intricate mechanical details.",
    previewColor: "from-amber-700 to-orange-900"
  },
  {
    id: "art-rococo",
    name: "洛可可 (Rococo)",
    category: "artistic",
    description: "华丽繁复，粉彩，弗拉戈纳尔风格，优雅梦幻。",
    tags: ["宫廷", "粉彩", "华丽", "古典"],
    template: "Oil painting in the style of Rococo, Jean-Honoré Fragonard, pastel colors, soft lighting, ornate details, playful atmosphere, elegant clothing, lush garden background, creamy textures, dreamy and romantic.",
    previewColor: "from-pink-300 to-rose-400"
  },
  {
    id: "abstract-giger",
    name: "生化机械 (H.R. Giger)",
    category: "abstract",
    description: "异形风格，骨骼与金属融合，冷峻超现实。",
    tags: ["异形", "恐怖", "机械", "超现实"],
    template: "Biomechanical art style of H.R. Giger, monochromatic grey and black, organic and mechanical fusion, skeletal structures, pipes and tubes, eerie atmosphere, alien textures, nightmarish, surreal, high detail.",
    previewColor: "from-gray-800 to-slate-900"
  },
  {
    id: "3d-isometric",
    name: "3D 等距微缩",
    category: "3d",
    description: "盲盒风格，可爱比例，干净背景，C4D渲染。",
    tags: ["盲盒", "可爱", "极简", "C4D"],
    template: "Isometric 3D render of {{subject}}, cute proportions, blind box toy style, c4d, octane render, clean pastel background, soft shadows, minimalism, orthographic view, high gloss plastic texture.",
    previewColor: "from-purple-300 to-indigo-400"
  },
  {
    id: "art-pop",
    name: "波普艺术 (Pop Art)",
    category: "artistic",
    description: "安迪·沃霍尔风格，漫画网点，高饱和色彩。",
    tags: ["复古", "波普", "色彩", "潮流"],
    template: "Pop art portrait of {{subject}}, style of Andy Warhol and Roy Lichtenstein, comic book ben-day dots, bold black outlines, vibrant primary colors, repetition, commercial art aesthetic, silk screen print effect.",
    previewColor: "from-yellow-400 to-red-600"
  },
  {
    id: "art-baroque",
    name: "巴洛克 (Baroque)",
    category: "artistic",
    description: "强烈的明暗对比，伦勃朗光，戏剧性。",
    tags: ["古典", "戏剧性", "光影", "深沉"],
    template: "Baroque painting of {{subject}}, style of Caravaggio and Rembrandt, chiaroscuro lighting, dramatic contrast between light and dark, rich deep colors, emotional intensity, realistic textures, dark background.",
    previewColor: "from-yellow-700 to-black"
  },
  {
    id: "anime-chibi",
    name: "Q版粘土人 (Chibi)",
    category: "anime",
    description: "二头身，大头小身，可爱手办质感。",
    tags: ["可爱", "手办", "二次元", "Q版"],
    template: "Nendoroid figure style of {{subject}}, chibi proportions, big head small body, cute expressive face, plastic pvc texture, studio lighting, depth of field, anime figurine, clean background.",
    previewColor: "from-pink-400 to-red-400"
  },
  {
    id: "game-blueprint",
    name: "工程蓝图",
    category: "game",
    description: "工业设计图，白线蓝底，剖面结构。",
    tags: ["工业", "设计", "极简", "科技"],
    template: "Technical blueprint drawing of {{subject}}, cyanotype, white lines on blue paper, schematic diagram, exploded view, measurements and annotations, industrial design, architectural precision, clean lines.",
    previewColor: "from-blue-700 to-blue-900"
  },
  {
    id: "art-surreal",
    name: "超现实主义 (Dali)",
    category: "artistic",
    description: "达利风格，梦境，融化的物体，荒诞美学。",
    tags: ["梦境", "荒诞", "艺术", "达利"],
    template: "Surrealist painting of {{subject}}, style of Salvador Dali, dreamscape, melting objects, weird juxtapositions, vast barren landscape, psychological symbolism, oil on canvas, mysterious.",
    previewColor: "from-orange-300 to-sky-400"
  },

  // --- PHOTOREALISTIC ---
  {
    id: "photo-studio",
    name: "高级影棚人像",
    category: "photorealistic",
    description: "专业级人像摄影，光影控制精准。",
    tags: ["人像", "干净", "8k", "锐利"],
    template: "Professional studio photography of {{subject}}, shot on Hasselblad X2D 100C, 85mm lens, f/1.8, softbox lighting, rembrandt lighting, extremely detailed skin texture, 8k resolution, photorealistic, neutral background.",
    previewColor: "from-gray-700 to-gray-900"
  },
  {
    id: "photo-street",
    name: "街头摄影",
    category: "photorealistic",
    description: "抓拍、颗粒感、自然光风格。",
    tags: ["街头", "抓拍", "虚化", "自然光"],
    template: "Street photography of {{subject}} in a bustling city, shot on Leica M11, 35mm lens, candid moment, natural daylight, bokeh background of city traffic, gritty texture, high contrast, urban atmosphere.",
    previewColor: "from-zinc-700 to-stone-800"
  },
  {
    id: "photo-vintage",
    name: "复古拍立得",
    category: "photorealistic",
    description: "怀旧、闪光灯、胶片颗粒感。",
    tags: ["复古", "闪光灯", "颗粒", "90年代"],
    template: "Flash photography polaroid of {{subject}}, vintage aesthetic, harsh camera flash, vignette, film grain, 1990s party vibe, candid, slightly overexposed, nostalgic feel.",
    previewColor: "from-orange-800 to-amber-900"
  },

  // --- ANIME ---
  {
    id: "anime-ghibli",
    name: "吉卜力手绘",
    category: "anime",
    description: "宫崎骏风格，水彩背景，治愈系。",
    tags: ["宫崎骏", "水彩", "治愈", "童话"],
    template: "Anime still of {{subject}}, Studio Ghibli style, Hayao Miyazaki, hand painted watercolor background, lush nature, fluffy clouds, soft natural lighting, nostalgic, whimsical, high quality 2d animation.",
    previewColor: "from-green-500 to-blue-400"
  },
  {
    id: "anime-makoto",
    name: "新海诚风景",
    category: "anime",
    description: "情感化光影，细腻云层，色彩鲜艳。",
    tags: ["风景", "鲜艳", "云层", "治愈系"],
    template: "Anime character illustration of {{subject}} in the style of Makoto Shinkai, breathtaking detailed background, cumulus clouds, lens flare, vibrant blues and oranges, emotional atmosphere, high fidelity, 4k.",
    previewColor: "from-sky-500 to-blue-700"
  },
  {
    id: "anime-cyber",
    name: "赛博浪客",
    category: "anime",
    description: "霓虹、Trigger社风格、充满活力的轮廓。",
    tags: ["赛博朋克", "霓虹", "动作", "波普"],
    template: "Cyberpunk anime style illustration of {{subject}}, Studio Trigger style, vibrant neon colors, chromatic aberration, energetic pose, sharp thick outlines, night city background, futuristic techwear.",
    previewColor: "from-pink-600 to-purple-800"
  },
  {
    id: "anime-90s",
    name: "90年代复古动画",
    category: "anime",
    description: "赛璐璐风格，录像带颗粒，怀旧。",
    tags: ["复古", "VHS", "赛璐璐"],
    template: "1990s retro anime screenshot of {{subject}}, cel shaded, hand drawn aesthetic, vhs tape glitch effect, muted pastel color palette, sailor moon aesthetic, grainy texture, 4:3 aspect ratio.",
    previewColor: "from-fuchsia-700 to-purple-900"
  },
  {
    id: "manga-ink",
    name: "日漫黑白墨绘",
    category: "anime",
    description: "黑白，网点纸，动态线条。",
    tags: ["黑白", "墨水", "漫画", "速写"],
    template: "High quality manga page panel of {{subject}}, intricate ink lines, screen tones, dynamic action lines, black and white, dramatic shading, detailed cross-hatching, berserk manga style.",
    previewColor: "from-gray-900 to-black"
  },

  // --- 3D & CGI ---
  {
    id: "3d-pixar",
    name: "现代皮克斯风",
    category: "3d",
    description: "柔和光照，表情生动，次表面散射。",
    tags: ["可爱", "迪士尼", "干净", "3D"],
    template: "3D render of {{subject}} in the style of a modern Disney Pixar movie, subsurface scattering on skin, soft studio lighting, expressive facial features, cute proportions, c4d, octane render, 8k, highly detailed.",
    previewColor: "from-blue-400 to-indigo-600"
  },
  {
    id: "3d-lego",
    name: "乐高积木",
    category: "3d",
    description: "微距摄影，塑料质感，玩具风。",
    tags: ["乐高", "玩具", "微距", "可爱"],
    template: "Macro photography of a Lego minifigure of {{subject}}, plastic texture, depth of field, studio lighting, bokeh background, high gloss, 3d render, octane render, toy photography.",
    previewColor: "from-yellow-400 to-red-500"
  },
  {
    id: "3d-clay",
    name: "粘土定格动画",
    category: "3d",
    description: "定格动画外观，指纹纹理。",
    tags: ["粘土", "定格", "可爱"],
    template: "Plasticine clay model of {{subject}}, stop motion animation style, visible fingerprints, soft studio lighting, miniature photography effect, tilt-shift, bright pastel colors, aardman animation style.",
    previewColor: "from-red-400 to-orange-500"
  },
  {
    id: "3d-game",
    name: "次世代游戏角色",
    category: "game",
    description: "虚幻引擎5，超精细盔甲/布料。",
    tags: ["UE5", "写实", "玩家", "资产"],
    template: "Full body character design of {{subject}}, unreal engine 5 render, metahuman, hyper-realistic textures, raytracing, global illumination, dramatic lighting, 8k, concept art, trending on artstation.",
    previewColor: "from-emerald-700 to-teal-900"
  },
  {
    id: "low-poly",
    name: "复古 PS1 风格",
    category: "game",
    description: "低多边形，像素化纹理。",
    tags: ["复古", "PS1", "低模", "故障风"],
    template: "Low poly 3d model of {{subject}}, PS1 graphics style, jagged edges, pixelated low-res textures, affine texture mapping, retro gaming aesthetic, crt monitor effect.",
    previewColor: "from-indigo-800 to-purple-900"
  },

  // --- GAME ---
  {
    id: "game-gta",
    name: "GTA 游戏插画",
    category: "game",
    description: "R星风格，矢量感，高饱和度，粗轮廓。",
    tags: ["GTA", "插画", "美漫", "硬朗"],
    template: "Digital illustration of {{subject}} in the style of Grand Theft Auto V loading screen, vector art, heavy outlines, cel shaded, high contrast, saturated colors, digital painting, rockstar games style.",
    previewColor: "from-green-600 to-emerald-800"
  },
  {
    id: "game-pixel",
    name: "16-Bit 像素艺术",
    category: "game",
    description: "复古SNES时代，精致像素点阵。",
    tags: ["像素", "复古", "游戏", "8bit"],
    template: "16-bit pixel art of {{subject}}, retro snes game sprite, dithering, limited color palette, clean pixels, pixel perfection, retro gaming aesthetic, white background.",
    previewColor: "from-purple-500 to-pink-500"
  },

  // --- ARTISTIC ---
  {
    id: "art-ink",
    name: "中国水墨",
    category: "artistic",
    description: "极简主义，留白，泼墨，禅意。",
    tags: ["国画", "水墨", "极简", "东方"],
    template: "Traditional Chinese ink wash painting of {{subject}}, shuimo, black ink on rice paper, wet wash, heavy brushstrokes, minimalism, negative space, zen atmosphere, calligraphy style.",
    previewColor: "from-gray-400 to-black"
  },
  {
    id: "art-paper",
    name: "剪纸艺术",
    category: "artistic",
    description: "层叠纸艺，阴影深度，手工感。",
    tags: ["剪纸", "手工", "立体", "童书"],
    template: "Paper cutout art of {{subject}}, layered paper craft, shadowbox effect, depth of field, soft shadows between layers, vibrant colors, textured paper, handmade aesthetic, 3d depth.",
    previewColor: "from-amber-200 to-orange-400"
  },
  {
    id: "art-oil",
    name: "古典油画",
    category: "artistic",
    description: "厚涂，笔触明显，博物馆级质感。",
    tags: ["油画", "古典", "绘画", "纹理"],
    template: "Oil painting of {{subject}}, style of John Singer Sargent, thick impasto brushstrokes, chiaroscuro lighting, rich colors, canvas texture, classical portraiture, masterpiece.",
    previewColor: "from-amber-700 to-yellow-900"
  },
  {
    id: "art-watercolor",
    name: "梦幻水彩",
    category: "artistic",
    description: "湿画法，柔和，滴落效果。",
    tags: ["水彩", "柔和", "淡彩"],
    template: "Watercolor illustration of {{subject}}, wet-on-wet technique, paint drips, soft edges, pastel colors, white background, negative space, dreamy atmosphere, intricate ink outlines.",
    previewColor: "from-cyan-600 to-blue-500"
  },
  {
    id: "art-stained-glass",
    name: "哥特花窗玻璃",
    category: "artistic",
    description: "马赛克，绚丽光彩，宗教/哥特风。",
    tags: ["玻璃", "哥特", "鲜艳"],
    template: "Stained glass window design featuring {{subject}}, vibrant translucent glass pieces, thick black lead lines, divine light shining through, gothic cathedral style, colorful mosaic.",
    previewColor: "from-red-600 to-blue-600"
  },
  {
    id: "art-ukiyo",
    name: "浮世绘版画",
    category: "artistic",
    description: "日本木刻风格，扁平色彩。",
    tags: ["日本", "木刻", "扁平"],
    template: "Ukiyo-e woodblock print of {{subject}}, style of Hokusai, flat colors, paper texture, traditional japanese art, wave patterns, intricate line work.",
    previewColor: "from-indigo-300 to-blue-500"
  },

  // --- CINEMATIC ---
  {
    id: "cinema-dune",
    name: "沙丘废土美学",
    category: "cinematic",
    description: "巨物恐惧，单色调，维伦纽瓦风格。",
    tags: ["科幻", "史诗", "极简", "电影"],
    template: "Cinematic shot of {{subject}} in the style of Dune (2021), brutalist architecture, vast desert landscape, monochromatic beige and orange palette, atmospheric dust, dramatic scale, denis villeneuve, imax quality.",
    previewColor: "from-orange-200 to-stone-600"
  },
  {
    id: "cinema-burton",
    name: "蒂姆·波顿暗黑风",
    category: "cinematic",
    description: "哥特幻想，大眼角色，怪诞美学。",
    tags: ["哥特", "暗黑", "怪诞", "奇幻"],
    template: "Character design of {{subject}} in the style of Tim Burton, gothic fantasy, stop motion aesthetic, dark eccentric atmosphere, large eyes, spindly limbs, dark shadows, pale skin, spooky, corpse bride style.",
    previewColor: "from-gray-800 to-indigo-900"
  },
  {
    id: "cinema-noir",
    name: "黑色电影 (Film Noir)",
    category: "cinematic",
    description: "高对比度黑白，阴影，神秘感。",
    tags: ["黑白", "阴影", "侦探"],
    template: "Film noir cinematic shot of {{subject}}, black and white, high contrast, dramatic shadows, venetian blind shadows, smoke, mystery, 1940s detective film aesthetic, 35mm film grain.",
    previewColor: "from-gray-900 to-black"
  },
  {
    id: "cinema-wes",
    name: "韦斯·安德森风格",
    category: "cinematic",
    description: "居中构图，粉彩色调，古怪有趣。",
    tags: ["对称", "粉彩", "古怪"],
    template: "Cinematic shot of {{subject}} in the style of Wes Anderson, perfect symmetry, flat composition, pastel color palette, quirky atmosphere, grand budapest hotel aesthetic, distinctive visual style.",
    previewColor: "from-pink-300 to-yellow-300"
  },

  // --- ABSTRACT & FX ---
  {
    id: "fx-biolum",
    name: "生物发光",
    category: "abstract",
    description: "发光丛林，阿凡达风格，夜景。",
    tags: ["发光", "自然", "夜景"],
    template: "Bioluminescent fantasy character {{subject}}, glowing markings, dark night jungle background, magical atmosphere, glowing flora, blue and teal color palette, ethereal lighting.",
    previewColor: "from-teal-600 to-green-800"
  },
  {
    id: "fx-smoke",
    name: "烟雾双重曝光",
    category: "abstract",
    description: "由烟雾和自然构成的剪影。",
    tags: ["烟雾", "抽象", "剪影"],
    template: "Double exposure silhouette of {{subject}} made of swirling colored smoke and forest trees, white background, surreal art, fine art photography, minimalist, high contrast.",
    previewColor: "from-gray-500 to-gray-700"
  }
];