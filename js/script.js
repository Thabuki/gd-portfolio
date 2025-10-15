// Modal do portfólio + dados
(function () {
  "use strict";

  let projects = {
    main1: {
      title: "Changer Seven",
      meta: "Game/Level Designer • Gixer Entertainment • Nov 2023 – Oct 2025",
      summary:
        "Unreal Engine 5 (PC & Consoles). Designed combat/progression systems, enemy AI, and levels.",
      experience: [
        "Designed and balanced player abilities and enemy AI for a Brazilian-developed hack-and-slash.",
        "Implemented and iterated on multiple playable levels, ensuring challenge pacing and readability standards used in international productions.",
        "Built the backbone and early iterations of the game's UI, defining flow and usability foundations for future development.",
        "Authored core combat and progression system docs, improving clarity between Brazilian and international collaborators.",
        "Coordinated internal and community playtests, adjusting and reiterating difficulty spikes across encounters.",
        "Worked with engineers to fix ability bugs, improving responsiveness and stability in builds delivered to global testers.",
      ],
      images: [
        "img/main-games/changer/changer-1.png",
        "img/main-games/changer/changer-3.png",
        "img/main-games/changer/changer-4.png",
        "img/main-games/changer/changer-5.png",
        "img/main-games/changer/changer-6.png",
        "img/main-games/changer/changer-7.png",
        "img/main-games/changer/changer-8.png",
        "img/main-games/changer/changer-9.png",
        "img/main-games/changer/changer-10.png",
        "img/main-games/changer/changer-11.png",
        "img/main-games/changer/changer-12.png",
        "img/main-games/changer/changer-13.png",
        "img/main-games/changer/changer-14.png",
        "img/main-games/changer/changer-15.png",
        "img/main-games/changer/changer-16.png",
        "img/main-games/changer/changer-17.png",
        "img/main-games/changer/changer-18.png",
        "img/main-games/changer/changer-19.jpg",
        "img/main-games/changer/changer-20.jpg",
        "img/main-games/changer/changer-21.jpg",
      ],
      // O vídeo pode ser uma URL do YouTube ou um arquivo local
      video: "https://youtu.be/hpGGYigkXLk",
      links: [
        {
          label: "View on Steam",
          href: "https://store.steampowered.com/app/2069330/Changer_Seven/",
        },
      ],
    },
    main2: {
      title: "PAYDAY Crime War",
      meta: "PopReach Incorporated • Dec 2022 – Aug 2023",
      summary:
        "Unity (Mobile). Planned and built levels combining stealth and FPS gameplay.",
      experience: [
        "Designed stealth- and FPS-oriented missions for a globally recognized franchise.",
        "Produced Level Design Documents (LDDs) and gathered references for development resources.",
        "Implemented and tested new levels while iterating based on team feedback.",
        "Balanced pacing, challenge, and replayability across multiple mission types.",
        "Worked with engineers and artists to maintain performance and visual quality.",
        "Incorporated player and QA feedback into final mission polish passes.",
      ],
      images: [
        "img/main-games/payday/payday-1.jpg",
        "img/main-games/payday/payday-3.webp",
        "img/main-games/payday/payday-4.webp",
        "img/main-games/payday/payday-5.gif",
        "img/main-games/payday/payday-6.gif",
        "img/main-games/payday/payday-7.gif",
        "img/main-games/payday/payday-8.gif",
        "img/main-games/payday/payday-9.webp",
      ],
      video: "https://youtu.be/ohMP2Y-CPaE",
      links: [],
    },
    main3: {
      title: "Archer: DANGER PHONE",
      meta: "Truly Social Games • Oct 2021 – Nov 2022",
      summary:
        "Unity (Mobile). Live-ops data, gameplay balance, documentation, offers, and automation.",
      experience: [
        "Supported live-ops design for weekly and limited-time events.",
        "Led a revenue-growth plan that surpassed a US $ 50 K goal, coordinating event cadence and offer structure.",
        "Balanced gameplay systems and event content to maintain engagement.",
        "Created and maintained system documentation, mockups, and flowcharts.",
        "Improved live-ops efficiency by automating the weekly event setup process.",
        "Collaborated with data and design teams to ensure coherent feature delivery.",
      ],
      images: [
        "img/main-games/archer/archer-1.png",
        "img/main-games/archer/archer-3.jpg",
        "img/main-games/archer/archer-4.jpg",
        "img/main-games/archer/archer-5.jpg",
        "img/main-games/archer/archer-6.webp",
        "img/main-games/archer/archer-7.jpg",
        "img/main-games/archer/archer-8.jpg",
        "img/main-games/archer/archer-9.webp",
      ],
      video: "https://youtu.be/jxlYpkjkfAs",
      links: [],
    },
    main4: {
      title: "Main Game 4",
      meta: "Role • Year",
      summary: "Summary",
      experience: [],
      images: [],
      video: "",
      links: [],
    },
    other1: {
      title: "GHOULF",
      meta: "Level Designer • GMTK 2021",
      summary:
        "Third-person isometric minigolf-esque puzzle game made in Unity over 2 days for GMTK 2021. Help a misplaced soul in Hell reunite with its body and escape.",
      experience: [
        "Designed nine puzzle-arena stages centered on the ‘haunting golf’ mechanic, where players possess objects to redirect shots and trigger chain reactions.",
        "Built all levels in Unity using modular tiles and tight space constraints to support quick learning and discovery.",
        "Maintained continuous iteration through internal playtests with the 6-person jam team, refining level readability, pacing, and ‘aha!’ flow moments.",
        "Established ‘dev scores’ internally to benchmark designer performance and guide balance decisions, even though they were not included in the public build.",
        "Contributed to layout composition and camera readability to ensure smooth flow despite high-contrast visuals.",
        "Collaborated across design, programming, art, and audio disciplines to achieve a cohesive tone within the 48-hour scope.",
        "Prioritized player clarity and momentum over precision, resulting in approachable yet expressive level design.",
        "GMTK 2021 rankings (of 5,674): Presentation #31 · Overall #86 · Originality #229 · Fun #336",
        "Earned community recognition for unique mechanic interpretation and environmental humor.",
      ],
      images: [
        "img/side-projects/ghoulf/ghoulf-1.webp",
        "img/side-projects/ghoulf/ghoulf-2.gif",
        "img/side-projects/ghoulf/ghoulf-3.webp",
        "img/side-projects/ghoulf/ghoulf-4.webp",
        "img/side-projects/ghoulf/ghoulf-5.webp",
        "img/side-projects/ghoulf/ghoulf-6.webp",
      ],
      video: "",
      links: [
        { label: "Play on itch.io", href: "https://daellot.itch.io/ghoulf" },
      ],
    },
    other2: {
      title: "BORKSPEL",
      meta: "Gameplay Designer/Programmer • Jul 2018 – Oct 2018",
      summary:
        "Online head-to-head competitive VR game for PC where two players race to assemble furniture in a set time, fighting for their job—and their lives.",
      experience: [
        "Designed and developed a furniture-assembly simulation in Unity (C#), focused on spatial reasoning, precision, and motion fluidity.",
        "Implemented the core assembly system, allowing players to pick up, rotate, and snap parts together with intuitive physics and visual feedback.",
        "Crafted a comically eerie tone embodied in the project's motto — 'Assemble or be Assembled.'",
        "Tuned the camera system extensively to minimize motion sickness, a central design concern throughout production.",
        "Created clear UI prompts and visual guides to ease the player's understanding of part orientation and connection logic.",
        "Iterated on level layout and object hierarchy to improve readability and progressive complexity.",
        "Worked closely with collaborators to balance scope, playability, and thematic tone.",
        "Reflected on key lessons in object manipulation design, ergonomic camera systems, and player comfort — shaping future design work.",
      ],
      images: [
        "img/side-projects/borkspel/borkspel-1.webp",
        "img/side-projects/borkspel/borkspel-3.webp",
        "img/side-projects/borkspel/borkspel-4.webp",
        "img/side-projects/borkspel/borkspel-5.webp",
        "img/side-projects/borkspel/borkspel-6.webp",
        "img/side-projects/borkspel/borkspel-7.gif",
        "img/side-projects/borkspel/borkspel-8.webp",
      ],
      video: "https://youtu.be/MXYDWOqcYrI",
      links: [],
    },
    other3: {
      title: "Wrong",
      meta: "Director/Editor • Oct 2017 – Dec 2017",
      summary:
        "Cinematic created using GTA V's Rockstar Editor, telling the story of two modern-time outlaws and their big score that goes right—mostly.",
      experience: [
        "Directed and edited a short experimental action film exploring perception and self-deception through synchronized action and music.",
        "Created in collaboration with another actor (player), where both performance and camera perspective were designed to mirror tension and rhythm.",
        "Went through multiple iterative versions, applying direct professor feedback on pacing, framing, and emotional tone.",
        "Structured the sequence so the physical action follows the musical rhythm, emphasizing synchronization over dialogue.",
        "Served as an early deep dive into the fundamentals of filming, camera control, and sound editing — a major hands-on learning milestone.",
      ],
      images: [
        "img/side-projects/wrong/wrong-1.jpg",
        "img/side-projects/wrong/wrong-3.jpg",
        "img/side-projects/wrong/wrong-4.jpg",
      ],
      video: "https://youtu.be/IMB0JMg00hQ",
      links: [],
    },
    other4: {
      title: "The Omni Crusher",
      meta: "Physical Interface • Mar 2016 – Dec 2016",
      summary:
        "Physical working prototype from a year-long investigation into ergonomic arcade interfaces for fighting games.",
      experience: [
        "Conceived and designed a fictional industrial crushing machine as part of an advanced ergonomics and design project.",
        "Every element — from prototype to final version — was entirely hand-made, including physical mock-ups, control panels, and mechanical interfaces.",
        "The process involved multiple people and their hands, focusing on creating a universally ergonomic product adaptable to different body types.",
        "Developed a comprehensive business model outlining production feasibility and target market positioning.",
        "Authored a detailed production manual, covering assembly steps, operation safety, and quality standards.",
        "Achieved a final grade of 9.9, highlighting excellence in design execution, ergonomics, and presentation.",
      ],
      images: [
        "img/side-projects/omnic/omnic-1.jpg",
        "img/side-projects/omnic/omnic-3.jpg",
        "img/side-projects/omnic/omnic-4.jpg",
        "img/side-projects/omnic/omnic-5.jpg",
        "img/side-projects/omnic/omnic-6.jpg",
        "img/side-projects/omnic/omnic-7.jpg",
      ],
      video: "https://youtu.be/yckgytl1HLg",
      links: [],
    },
    other5: {
      title: "Dark Souls Study",
      meta: "Level Designer • Nov 2017 (2 weeks)",
      summary:
        "Level design study inspired by Dark Souls' Anor Londo — a reimagined “third bell” built in two weeks using Google SketchUp.",
      experience: [
        "Features five interconnected sections, each with its own spatial identity and progression theme",
        "Includes bird's-eye and top-down maps, full legend, and character scale reference for spatial readability",
        "Documents critical, optional, and shortcut paths, with notes on pacing and exploration flow",
        "Accompanied by a beat flowchart detailing time per beat, beat type, path type, and difficulty curve per beat",
        "Supported by a difficulty-over-time graph, visualizing challenge rhythm and player intensity throughout the level",
      ],
      images: [
        "img/side-projects/ds-study/ds-1.webp",
        "img/side-projects/ds-study/ds-2.webp",
        "img/side-projects/ds-study/ds-3.webp",
        "img/side-projects/ds-study/ds-4.webp",
        "img/side-projects/ds-study/ds-5.webp",
        "img/side-projects/ds-study/ds-6.webp",
        "img/side-projects/ds-study/ds-7.webp",
      ],
      video: "https://www.youtube.com/watch?v=5JVl65TaZeY",
      links: [],
    },
  };

  const qs = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  const modal = qs("#project-modal");
  const media = qs("#modal-media");
  const title = qs("#modal-title");
  const modalRole = qs("#modal-role");
  const modalCompany = qs("#modal-company");
  const body = qs("#modal-body");
  const links = qs("#modal-links");
  const closeButtons = qsa("[data-close]", modal);
  const prevBtn = qs("[data-prev]");
  const nextBtn = qs("[data-next]");
  // Elementos do lightbox
  const lb = document.getElementById("img-lightbox");
  const lbImg = document.getElementById("img-lightbox-img");
  const lbBackdrop = lb ? lb.querySelector(".img-lightbox-backdrop") : null;
  const lbClose = lb ? lb.querySelector(".img-lightbox-close") : null;
  const lbContent = lb ? lb.querySelector(".img-lightbox-content") : null;
  const lbDialog = lb ? lb.querySelector(".img-lightbox-dialog") : null;
  const lbZoomIndicator = lb
    ? lb.querySelector(".img-lightbox-zoom-indicator")
    : null;
  const lbResetBtn = lb ? lb.querySelector(".img-lightbox-reset") : null;

  // Mantém a ordem de navegação conforme os cards no DOM
  const cardEls = qsa(".card[data-id]");
  const navOrder = cardEls.map((el) => el.getAttribute("data-id"));
  let currentProjectIndex = -1;

  // Ano no footer
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle (básico)
  const navToggle = qs(".nav-toggle");
  const menu = qs("#site-menu");
  if (navToggle && menu) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      menu.hidden = expanded;
    });
    menu.hidden = true; // começa hidden em telas pequenas
  }

  // Garante que o menu fique visível ao redimensionar para desktop
  const mql = window.matchMedia("(min-width: 901px)");
  const onResize = () => {
    if (menu)
      menu.hidden =
        !mql.matches &&
        qs(".nav-toggle")?.getAttribute("aria-expanded") !== "true";
  };
  mql.addEventListener?.("change", onResize);
  window.addEventListener("resize", onResize);
  onResize();

  // Setar atributos width/height baseados no tamanho intrínseco para reduzir CLS
  function setIntrinsicDimensions(img) {
    if (!img) return;
    const apply = () => {
      if (img.naturalWidth && img.naturalHeight) {
        if (!img.getAttribute("width"))
          img.setAttribute("width", String(img.naturalWidth));
        if (!img.getAttribute("height"))
          img.setAttribute("height", String(img.naturalHeight));
      }
    };
    if (img.complete) apply();
    else img.addEventListener("load", apply, { once: true });
  }
  setIntrinsicDimensions(qs("#about .about-photo img"));
  setIntrinsicDimensions(qs("header .brand img"));

  // Scroll spy: atualiza aria-current nos links de navegação
  const navLinks = qsa('.site-nav a[href^="#"]');
  const sections = navLinks
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && h.startsWith("#"))
    .map((h) => qs(h))
    .filter(Boolean);

  const spy = () => {
    let activeId = "";
    const fromTop = window.scrollY + 80; // offset do header
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (fromTop >= top && fromTop < top + sec.offsetHeight) {
        activeId = `#${sec.id}`;
        break;
      }
    }
    navLinks.forEach((a) => {
      const isActive = a.getAttribute("href") === activeId;
      if (isActive) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", spy, { passive: true });
  window.addEventListener("resize", spy, { passive: true });
  spy();

  // Abre o modal para um id de projeto
  function openProject(id) {
    const data = projects[id];
    if (!data) return;

    currentProjectIndex = Math.max(0, navOrder.indexOf(id));

    // preenche o conteúdo
    title.textContent = data.title || "";

    // Faz parse dos metadados para extrair função e empresa baseado nos padrões do projeto
    if (data.meta) {
      // Lida com diferentes padrões de metadados baseado no ID do projeto
      if (id === "main1") {
        // Changer Seven
        modalRole.textContent = "Game/Level Designer";
        modalCompany.textContent =
          "Gixer Entertainment • Nov\u00A02023 – Oct\u00A02025";
      } else if (id === "main2") {
        // PAYDAY: meta tem empresa mas falta função
        modalRole.textContent = "Level Designer";
        modalCompany.textContent =
          "PopReach Incorporated • Dec\u00A02022 – Aug\u00A02023";
      } else if (id === "main3") {
        // Archer: meta tem empresa mas falta função
        modalRole.textContent = "Game Designer";
        modalCompany.textContent =
          "Truly Social Games • Oct\u00A02021 – Nov\u00A02022";
      } else {
        // Para outros projetos, tenta dividir por " • "
        const metaParts = data.meta.split(" • ");
        if (metaParts.length >= 2) {
          modalRole.textContent = metaParts[0];
          modalCompany.textContent = metaParts.slice(1).join(" • ");
        } else {
          modalRole.textContent = data.meta;
          modalCompany.textContent = "";
        }
      }
    } else {
      modalRole.textContent = "";
      modalCompany.textContent = "";
    }

    body.innerHTML = "";
    links.innerHTML = "";
    media.innerHTML = "";

    // Resumo e experiência dentro do modal
    if (data.summary) {
      const p = document.createElement("p");
      p.textContent = data.summary;
      body.appendChild(p);
    }
    if (Array.isArray(data.experience) && data.experience.length) {
      const h = document.createElement("h4");
      h.textContent = "My role & contributions";
      body.appendChild(h);
      const ul = document.createElement("ul");
      data.experience.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }
    // ordem da mídia: primeira imagem -> vídeo -> imagens restantes
    const videoId = getYouTubeId(data.video);
    const imgs = Array.isArray(data.images) ? data.images : [];
    let mediaCount = 0;

    // Primeira imagem (se houver)
    if (imgs.length) {
      const img = new Image();
      img.loading = "lazy";
      img.decoding = "async";
      img.src = imgs[0];
      img.alt = `${data.title} screenshot`;
      media.appendChild(img);
      mediaCount++;
    }

    // Vídeo em segundo (se houver)
    if (videoId) {
      const wrap = document.createElement("div");
      wrap.className = "video-wrap";
      wrap.innerHTML = `<iframe class="video-frame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      media.appendChild(wrap);
      mediaCount++;
    }

    // Imagens restantes (e URLs do YouTube embedded se existirem na lista)
    if (imgs.length > 1) {
      for (let i = 1; i < imgs.length; i++) {
        const src = imgs[i];
        const extraVid = getYouTubeId(src);
        if (extraVid) {
          const wrap = document.createElement("div");
          wrap.className = "video-wrap";
          wrap.innerHTML = `<iframe class="video-frame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${extraVid}?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
          media.appendChild(wrap);
          mediaCount++;
        } else {
          const img = new Image();
          img.loading = "lazy";
          img.decoding = "async";
          img.src = src;
          img.alt = `${data.title} screenshot`;
          media.appendChild(img);
          mediaCount++;
        }
      }
    }

    // Toggle de acessibilidade
    if (mediaCount > 0) media.removeAttribute("aria-hidden");
    else media.setAttribute("aria-hidden", "true");

    // links (apenas links personalizados; sem link extra do YouTube)
    if (Array.isArray(data.links) && data.links.length) {
      data.links.forEach((l) => {
        const a = document.createElement("a");
        a.href = l.href;
        a.target = /^(https?:)?\/\//.test(l.href) ? "_blank" : "_self";
        a.rel = "noopener";
        a.textContent = l.label;
        links.appendChild(a);
      });
    }

    openModal();

    // Atualiza estado dos botões Prev/Next
    if (prevBtn) prevBtn.disabled = currentProjectIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentProjectIndex >= navOrder.length - 1;
  }

  // Abrir/fechar modal + gerenciamento de foco
  let lastFocused = null;
  function openModal() {
    lastFocused = document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    trapFocus(modal);
    document.body.classList.add("modal-open");
    // Recomputa o hover do cursor quando o modal é aberto (a sobreposição afeta a detecção de área)
    try {
      if (typeof updateCursorHover === "function") updateCursorHover();
    } catch {}
  }
  function closeModal() {
    // Interrompe qualquer mídia em reprodução e limpa
    try {
      qsa("video", media).forEach((v) => {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {}
      });
      qsa("iframe", media).forEach((f) => {
        try {
          f.src = f.src;
        } catch {}
      });
      media.innerHTML = "";
      media.setAttribute("aria-hidden", "true");
    } catch {}
    modal.setAttribute("aria-hidden", "true");
    releaseFocus();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    document.body.classList.remove("modal-open");
    // Recomputa o hover do cursor quando o modal é fechado
    try {
      if (typeof updateCursorHover === "function") updateCursorHover();
    } catch {}
  }

  // Vincula a abertura nos cards
  qsa(".card[data-id]").forEach((card) => {
    const id = card.getAttribute("data-id");
    // thumbnails iniciais vindas dos dados inline
    try {
      const data = projects[id];
      if (data) setCardThumb(card, data);
    } catch (_) {}
    const handler = () => openProject(id);
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler();
      }
    });
  });

  // Interações quando fecha
  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));
  modal.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-close")) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") {
      // Se o lightbox estiver aberto, ele gerencia o ESC; senão, fecha o modal
      if (!lb || lb.getAttribute("aria-hidden") !== "false") closeModal();
    }
  });

  // Navegação Prev/Next
  function openRelative(delta) {
    if (currentProjectIndex < 0) return;
    const nextIndex = currentProjectIndex + delta;
    if (nextIndex < 0 || nextIndex >= navOrder.length) return;
    openProject(navOrder[nextIndex]);
  }
  if (prevBtn) prevBtn.addEventListener("click", () => openRelative(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => openRelative(1));
  window.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "false") {
      if (e.key === "ArrowLeft") openRelative(-1);
      if (e.key === "ArrowRight") openRelative(1);
    }
  });

  // ----------------------------------------
  // Lightbox para imagens dentro do modal
  // ----------------------------------------
  let lbState = {
    open: false,
    scale: 1,
    baseScale: 1,
    tx: 0,
    ty: 0,
    natW: 0,
    natH: 0,
    lastFocus: null,
    fullResLoaded: false,
  };
  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }
  function applyLBTransform() {
    if (!lbImg) return;
    lbImg.style.transform = `translate(${lbState.tx}px, ${lbState.ty}px) scale(${lbState.scale})`;
    updateZoomIndicator();
  }
  function updateZoomIndicator() {
    if (!lbZoomIndicator || !lbState.baseScale) return;
    const zoomPercent = Math.round((lbState.scale / lbState.baseScale) * 100);
    lbZoomIndicator.textContent = `${zoomPercent}%`;
  }
  function resetZoom() {
    if (!lb || !lbState.baseScale) return;
    lbState.scale = lbState.baseScale;
    lb.classList.remove("zoomed");
    if (lbImg) lbImg.style.cursor = "zoom-in";
    centerLB();
    applyLBTransform();
  }
  function loadFullResImage() {
    if (!lbImg || lbState.fullResLoaded) return;
    const fullResSrc = lbImg.getAttribute("data-full-src");
    if (!fullResSrc || lbImg.src === fullResSrc) return;

    lbState.fullResLoaded = true;
    const tempImg = new Image();
    tempImg.onload = () => {
      lbImg.src = fullResSrc;
      lbImg.removeAttribute("data-full-src");
    };
    tempImg.onerror = () => {
      // Se falhar, mantém a imagem atual
      lbState.fullResLoaded = false;
    };
    tempImg.src = fullResSrc;
  }
  function centerLB() {
    if (!lbContent) return;
    const rect = lbContent.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    const vw = lbState.natW * lbState.scale;
    const vh = lbState.natH * lbState.scale;
    // Center even when image is larger than the container (allow negative offset)
    lbState.tx = (cw - vw) / 2;
    lbState.ty = (ch - vh) / 2;
    applyLBTransform();
  }
  function getFitScales() {
    const rect = lbContent.getBoundingClientRect();
    const scaleW = rect.width / (lbState.natW || rect.width);
    const scaleH = rect.height / (lbState.natH || rect.height);
    return {
      contain: Math.min(scaleW, scaleH),
      cover: Math.max(scaleW, scaleH),
    };
  }
  function clampTranslate() {
    const rect = lbContent.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    const vw = lbState.natW * lbState.scale;
    const vh = lbState.natH * lbState.scale;

    // If the image is smaller than the container on an axis, keep it centered
    if (vw <= cw) {
      lbState.tx = (cw - vw) / 2;
    } else {
      const minX = cw - vw; // negativo
      lbState.tx = clamp(lbState.tx, minX, 0);
    }

    if (vh <= ch) {
      lbState.ty = (ch - vh) / 2;
    } else {
      const minY = ch - vh; // negativo
      lbState.ty = clamp(lbState.ty, minY, 0);
    }
  }

  function openLightbox(src, focusEl) {
    if (!lb || !lbImg || !lbContent) return;
    lbState.lastFocus = focusEl || document.activeElement;
    lb.setAttribute("aria-hidden", "false");
    // Não modificamos body scroll aqui: o modal já bloqueia quando aberto
    lbImg.style.transform = "none";
    lbImg.style.cursor = "zoom-in";
    lb.classList.remove("zoomed");

    // Configura lazy-loading: armazena URL completa e carrega versão de baixa resolução se disponível
    // Se o src contém "_thumb" ou "-thumb", assume que é thumbnail; caso contrário, carrega direto
    lbImg.setAttribute("data-full-src", src);

    // Por enquanto carrega imagem completa; no futuro, pode detectar thumbnail automaticamente
    lbImg.src = src;

    const onLoad = () => {
      lbState.natW = lbImg.naturalWidth || 0;
      lbState.natH = lbImg.naturalHeight || 0;
      // Base scale fits entire image within viewport (contain)
      const { contain } = getFitScales();
      lbState.baseScale = contain;
      lbState.scale = lbState.baseScale;
      centerLB();
      updateZoomIndicator();
    };
    if (lbImg.complete) onLoad();
    else lbImg.addEventListener("load", onLoad, { once: true });
    lbState.open = true;
    lbClose?.focus?.();
  }
  function closeLightbox() {
    if (!lb) return;
    lb.setAttribute("aria-hidden", "true");
    try {
      lbImg.src = "";
    } catch {}
    lbState.open = false;
    lbState.scale = lbState.baseScale = 1;
    lbState.tx = lbState.ty = 0;
    lbState.fullResLoaded = false;
    if (lbState.lastFocus && lbState.lastFocus.focus) lbState.lastFocus.focus();
  }

  // Eventos do lightbox
  lbBackdrop?.addEventListener("click", closeLightbox);

  // Manipulação aprimorada do botão de fechar para mobile
  if (lbClose) {
    lbClose.addEventListener("click", closeLightbox);
    // Adiciona eventos de toque para melhor suporte mobile
    lbClose.addEventListener("touchend", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
    });
    // Adiciona eventos de ponteiro como fallback
    lbClose.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      }
    });
  }
  if (lbResetBtn) {
    lbResetBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      resetZoom();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (lb && lb.getAttribute("aria-hidden") === "false" && e.key === "Escape")
      closeLightbox();
  });

  // Bind nas imagens que entram no modal
  const bindModalImages = () => {
    if (!media) return;
    // Delegação: escuta cliques em imagens diretas dentro de #modal-media
    media.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      // Apenas <img> que não são ícones/botões
      if (target.tagName.toLowerCase() === "img") {
        const src = target.getAttribute("src") || "";
        if (!src) return;
        e.preventDefault();
        e.stopPropagation();
        openLightbox(src, target);
      }
    });
  };
  bindModalImages();

  // Bind das interações do lightbox uma vez (zoom/pan + fechar ao clicar fora quando com zoom)
  (function bindLightboxOnce() {
    if (!lb || !lbImg || !lbContent) return;
    if (lb._bound) return;
    lb._bound = true;

    // Alterna zoom ao clicar na imagem (ignora clique imediatamente após arraste)
    lbImg.addEventListener("click", (e) => {
      // Se houve arraste (pan) antes de soltar, não interpreta como clique de toggle
      if (typeof didDrag !== "undefined" && didDrag) {
        didDrag = false; // reseta para próximos cliques
        return; // não alterna zoom
      }
      if (lbState.natW <= 0 || lbState.natH <= 0) return;
      const rect = lbContent.getBoundingClientRect();
      const { contain, cover } = getFitScales();
      // Se já está com zoom além do contain, volta
      if (lbState.scale > contain + 0.001) {
        lbState.scale = lbState.baseScale;
        lb.classList.remove("zoomed");
        lbImg.style.cursor = "zoom-in";
        centerLB();
        return;
      }
      // Aplica zoom (cover) centralizando no ponto clicado
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const newScale = Math.max(cover, lbState.baseScale);
      const px = (mx - lbState.tx) / lbState.scale;
      const py = (my - lbState.ty) / lbState.scale;
      lbState.scale = newScale;
      lbState.tx = mx - px * lbState.scale;
      lbState.ty = my - py * lbState.scale;
      clampTranslate();
      applyLBTransform();
      lb.classList.add("zoomed");
      lbImg.style.cursor = "grab";
      loadFullResImage();
    });

    // Zoom suave com roda do mouse (em torno do cursor)
    lbContent.addEventListener(
      "wheel",
      (e) => {
        if (!lbState.open) return;
        e.preventDefault();
        const rect = lbContent.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const delta = -e.deltaY; // up = zoom in
        const factor = Math.exp(delta * 0.0015);
        const { contain, cover } = getFitScales();
        const minS = contain;
        const maxS = Math.max(3 * contain, cover);
        const newScale = clamp(lbState.scale * factor, minS, maxS);
        const px = (mx - lbState.tx) / lbState.scale;
        const py = (my - lbState.ty) / lbState.scale;
        lbState.scale = newScale;
        lbState.tx = mx - px * lbState.scale;
        lbState.ty = my - py * lbState.scale;
        clampTranslate();
        applyLBTransform();
        if (lbState.scale > minS + 0.001) {
          lb.classList.add("zoomed");
          lbImg.style.cursor = "grab";
          loadFullResImage();
        } else {
          lb.classList.remove("zoomed");
          lbImg.style.cursor = "zoom-in";
          centerLB();
        }
      },
      { passive: false }
    );

    // Arrastar/pan enquanto está com zoom
    let dragging = false;
    let didDrag = false;
    let lastX = 0,
      lastY = 0;
    let lastMoveTime = 0;
    let velocityX = 0,
      velocityY = 0;
    let momentumRAF = 0;

    function startMomentum() {
      if (momentumRAF) cancelAnimationFrame(momentumRAF);
      const friction = 0.92; // desacelera ~8% por frame
      const minSpeed = 0.5; // para quando velocidade < 0.5 px/frame

      function animate() {
        const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        if (speed < minSpeed) {
          velocityX = velocityY = 0;
          momentumRAF = 0;
          return;
        }
        lbState.tx += velocityX;
        lbState.ty += velocityY;
        clampTranslate();
        applyLBTransform();
        velocityX *= friction;
        velocityY *= friction;
        momentumRAF = requestAnimationFrame(animate);
      }
      momentumRAF = requestAnimationFrame(animate);
    }

    lbContent.addEventListener("mousedown", (e) => {
      if (lbState.scale <= lbState.baseScale + 0.001) return;
      // Para momentum se houver
      if (momentumRAF) {
        cancelAnimationFrame(momentumRAF);
        momentumRAF = 0;
        velocityX = velocityY = 0;
      }
      // Se o usuário clicou na imagem, permite arrastar; se clicou fora, pode fechar (tratado abaixo)
      dragging = true;
      didDrag = false;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMoveTime = performance.now();
      lb.classList.add("zoomed");
      lbImg.style.cursor = "grabbing";
      loadFullResImage();
      e.preventDefault();
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastMoveTime);
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMoveTime = now;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag = true;
      // Captura velocidade (px/ms)
      velocityX = (dx / dt) * 16; // normaliza para ~60fps frame
      velocityY = (dy / dt) * 16;
      lbState.tx += dx;
      lbState.ty += dy;
      clampTranslate();
      applyLBTransform();
    });
    window.addEventListener("mouseup", () => {
      if (!dragging) return;
      dragging = false;
      // Inicia momentum se velocidade for significativa
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      if (speed > 1) {
        startMomentum();
      } else {
        velocityX = velocityY = 0;
      }
      if (lbState.scale > lbState.baseScale + 0.001)
        lbImg.style.cursor = "grab";
      else lbImg.style.cursor = "zoom-in";
    });

    // ================= Gestos de toque: duplo toque, pinça para zoom e pan =================
    let touchState = {
      active: false,
      lastTapTime: 0,
      startDist: 0,
      startScale: 1,
      startMidX: 0,
      startMidY: 0,
      lastX: 0,
      lastY: 0,
      panning: false,
    };

    function getTouches(e) {
      const t = e.touches;
      const rect = lbContent.getBoundingClientRect();
      if (t.length === 1) {
        return [{ x: t[0].clientX - rect.left, y: t[0].clientY - rect.top }];
      } else if (t.length >= 2) {
        return [
          { x: t[0].clientX - rect.left, y: t[0].clientY - rect.top },
          { x: t[1].clientX - rect.left, y: t[1].clientY - rect.top },
        ];
      }
      return [];
    }
    function dist(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
    function midpoint(a, b) {
      return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    }

    lbContent.addEventListener(
      "touchstart",
      (e) => {
        if (!lbState.open) return;
        if (!e.touches || e.touches.length === 0) return;
        // Prevent native zoom/scroll
        e.preventDefault();

        const now = performance.now();
        const pts = getTouches(e);

        // Double-tap detection (single finger quick taps)
        if (e.touches.length === 1) {
          // store for pan
          touchState.lastX = pts[0].x + lbContent.getBoundingClientRect().left;
          touchState.lastY = pts[0].y + lbContent.getBoundingClientRect().top;
          touchState.panning = lbState.scale > lbState.baseScale + 0.001;

          const dt = now - touchState.lastTapTime;
          touchState.lastTapTime = now;
          if (dt > 0 && dt < 300) {
            // Duplo toque: alterna zoom centralizado no toque
            // (mas ignora se acabou de fazer pan)
            if (didDrag) {
              didDrag = false;
              return;
            }
            const mx = pts[0].x;
            const my = pts[0].y;
            const { contain, cover } = getFitScales();
            const minS = contain;
            const maxS = Math.max(3 * contain, cover);
            const targetScale =
              lbState.scale > contain + 0.001
                ? contain
                : clamp(cover, minS, maxS);
            const px = (mx - lbState.tx) / lbState.scale;
            const py = (my - lbState.ty) / lbState.scale;
            lbState.scale = targetScale;
            lbState.tx = mx - px * lbState.scale;
            lbState.ty = my - py * lbState.scale;
            clampTranslate();
            applyLBTransform();
            if (lbState.scale > minS + 0.001) {
              lb.classList.add("zoomed");
              loadFullResImage();
            } else {
              lb.classList.remove("zoomed");
              centerLB();
            }
            return;
          }
        }

        // Pinch start (two fingers)
        if (e.touches.length >= 2 && pts.length >= 2) {
          const a = pts[0];
          const b = pts[1];
          touchState.startDist = dist(a, b);
          touchState.startScale = lbState.scale;
          const mid = midpoint(a, b);
          touchState.startMidX = mid.x;
          touchState.startMidY = mid.y;
          touchState.active = true;
          touchState.panning = false;
        }
      },
      { passive: false }
    );

    lbContent.addEventListener(
      "touchmove",
      (e) => {
        if (!lbState.open) return;
        if (!e.touches || e.touches.length === 0) return;
        e.preventDefault();
        const rect = lbContent.getBoundingClientRect();
        if (e.touches.length >= 2) {
          // Zoom com gesto de pinça
          const pts = getTouches(e);
          if (pts.length < 2 || touchState.startDist <= 0) return;
          const a = pts[0];
          const b = pts[1];
          const mid = midpoint(a, b);
          const currentDist = dist(a, b);
          const scaleFactor = currentDist / touchState.startDist;
          const { contain, cover } = getFitScales();
          const minS = contain;
          const maxS = Math.max(3 * contain, cover);
          const targetScale = clamp(
            touchState.startScale * scaleFactor,
            minS,
            maxS
          );

          // Zoom em torno do ponto médio
          const mx = mid.x;
          const my = mid.y;
          const px = (mx - lbState.tx) / lbState.scale;
          const py = (my - lbState.ty) / lbState.scale;
          lbState.scale = targetScale;
          lbState.tx = mx - px * lbState.scale;
          lbState.ty = my - py * lbState.scale;
          clampTranslate();
          applyLBTransform();
          if (lbState.scale > lbState.baseScale + 0.001) {
            lb.classList.add("zoomed");
            loadFullResImage();
          } else {
            lb.classList.remove("zoomed");
            centerLB();
          }
        } else if (e.touches.length === 1) {
          // Pan com um dedo quando está com zoom
          if (lbState.scale <= lbState.baseScale + 0.001) return;
          const t = e.touches[0];
          const cx = t.clientX;
          const cy = t.clientY;
          const now = performance.now();
          const dt = Math.max(1, now - (lastMoveTime || now));
          const dx = cx - (touchState.lastX || cx);
          const dy = cy - (touchState.lastY || cy);
          touchState.lastX = cx;
          touchState.lastY = cy;
          lastMoveTime = now;
          if (Math.abs(dx) > 1 || Math.abs(dy) > 1) didDrag = true;
          // Captura velocidade
          velocityX = (dx / dt) * 16;
          velocityY = (dy / dt) * 16;
          lbState.tx += dx;
          lbState.ty += dy;
          clampTranslate();
          applyLBTransform();
        }
      },
      { passive: false }
    );

    lbContent.addEventListener(
      "touchend",
      (e) => {
        // limpar flags
        if (e.touches && e.touches.length === 0) {
          // Inicia momentum se velocidade for significativa
          const speed = Math.sqrt(
            velocityX * velocityX + velocityY * velocityY
          );
          if (speed > 1 && lbState.scale > lbState.baseScale + 0.001) {
            startMomentum();
          } else {
            velocityX = velocityY = 0;
          }
          touchState.active = false;
          touchState.startDist = 0;
          touchState.panning = false;
        }
      },
      { passive: false }
    );

    // Fecha ao clicar em qualquer lugar fora da imagem (independente do zoom)
    // Proteção: se acabou de fazer pan, ignora o clique para evitar fechar acidentalmente
    const onDialogClick = (e) => {
      if (!lb || lb.getAttribute("aria-hidden") === "true") return;
      if (didDrag) {
        // Reset and ignore this click
        didDrag = false;
        return;
      }
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      // Se o alvo do clique for a própria imagem, não faz nada (clique na imagem alterna zoom)
      if (target === lbImg) return;
      // Caso contrário, fecha
      e.preventDefault();
      closeLightbox();
    };
    lbDialog?.addEventListener("click", onDialogClick);
  })();

  // ----------------------------------------
  // Rolagem suave aprimorada
  // ----------------------------------------

  // Lida com cliques de navegação com rolagem suave
  function enhancedScrollTo(target) {
    const element = document.querySelector(target);
    if (!element) return;

    // Pega altura do header para calcular o deslocamento
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.offsetHeight : 0;
    const extraOffset = 20; // Additional breathing room

    const targetPosition = element.offsetTop - headerHeight - extraOffset;
    const startPosition = window.pageYOffset;
    const distance = Math.max(0, targetPosition) - startPosition;
    const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.8)); // Adaptive duration

    let start = null;

    // Função de easing personalizada (ease-out-cubic)
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeOutCubic(progress);
      const currentPosition = startPosition + distance * ease;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Manipulação aprimorada de links de navegação
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    // Lida com casos especiais
    if (href === "#top") {
      e.preventDefault();
      // Usa scroll suave personalizada para o topo também
      const startPosition = window.pageYOffset;
      const distance = -startPosition;
      const duration = Math.min(1000, Math.max(500, Math.abs(distance) * 0.6));

      let start = null;

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = easeOutCubic(progress);
        const currentPosition = startPosition + distance * ease;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
      return;
    }

    // Handle section navigation
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      enhancedScrollTo(href);

      // Update URL without triggering scroll
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    }
  });

  // Lida com carregamento da página com hash
  window.addEventListener("load", () => {
    if (window.location.hash) {
      // Delay para garantir que a página está totalmente renderizada
      setTimeout(() => {
        enhancedScrollTo(window.location.hash);
      }, 100);
    }
  });

  // ----------------------------------------
  // Cheat: Konami Code (Pretty Smile Mode)
  // ----------------------------------------

  function isTypingContext() {
    const ae = document.activeElement;
    if (!ae) return false;
    const tag = ae.tagName?.toLowerCase();
    return (
      ae.isContentEditable ||
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    );
  }
  const konamiSeq = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
  ];
  let keyBuffer = [];
  let textBuffer = "";
  let textBufferTimer = null;
  const MAX_KEYBUF = 20;
  const MAX_TEXTBUF = 32;

  function normKey(e) {
    const k = e.key || "";
    return String(k).toLowerCase();
  }
  function endsWithKonami(buf) {
    if (buf.length < konamiSeq.length) return false;
    for (let i = 0; i < konamiSeq.length; i++) {
      if (buf[buf.length - konamiSeq.length + i] !== konamiSeq[i]) return false;
    }
    return true;
  }
  function showToast(msg) {
    let t = qs("#cheat-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "cheat-toast";
      t.className = "cheat-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    // trigger
    t.classList.remove("show");
    void t.offsetWidth; // reflow
    t.classList.add("show");
    clearTimeout(t._hideTimer);
    t._hideTimer = setTimeout(() => t.classList.remove("show"), 1600);
  }

  // Helper: trocar a foto do "Sobre mim" no Pretty Smile Mode
  function updateAboutPhotoForPrettySmile(enabled) {
    const img = qs("#about .about-photo img");
    if (!img) return;
    const normalSrc = "img/thales.jpg";
    const prettySmileSrc = "img/prettysmile.png";
    // Se estiver ligando o Pretty Smile Mode, tenta trocar a imagem e adiciona fallback
    if (enabled) {
      if (img.getAttribute("src") !== prettySmileSrc) {
        const onErr = () => {
          img.src = normalSrc;
          img.removeEventListener("error", onErr);
        };
        img.addEventListener("error", onErr, { once: true });
        img.setAttribute("src", prettySmileSrc);
      }
    } else {
      if (img.getAttribute("src") !== normalSrc)
        img.setAttribute("src", normalSrc);
    }
  }

  // Helper: trocar a logo do header no Pretty Smile Mode
  function updateLogoForPrettySmile(enabled) {
    const logo = qs("header .brand img");
    if (!logo) return;
    const normalSrc = "img/logo.png";
    const prettySmileSrc = "img/prettysmile.png";
    if (enabled) {
      if (logo.getAttribute("src") !== prettySmileSrc) {
        const onErr = () => {
          logo.src = normalSrc;
          logo.removeEventListener("error", onErr);
        };
        logo.addEventListener("error", onErr, { once: true });
        logo.setAttribute("src", prettySmileSrc);
      }
    } else {
      if (logo.getAttribute("src") !== normalSrc)
        logo.setAttribute("src", normalSrc);
    }
  }

  // Konami Code: Pretty Smile Mode
  function setPrettySmileMode(enabled) {
    document.body.classList.toggle("pretty-smile-mode", !!enabled);
    try {
      sessionStorage.setItem("prettySmileMode", enabled ? "1" : "0");
    } catch {}
    updateAboutPhotoForPrettySmile(enabled);
    updateLogoForPrettySmile(enabled);
    if (enabled) {
      enablePrettysmile();
    } else {
      disablePrettysmile();
    }
    showToast(`Pretty Smile Mode ${enabled ? "ON" : "OFF"}`);
  }
  function togglePrettySmileMode() {
    setPrettySmileMode(!document.body.classList.contains("pretty-smile-mode"));
  }

  // Follower do Pretty Smile (parte do Konami Code/Modo Pretty Smile)
  let prettysmileEnabled = false;
  let prettysmileEl = null;
  let prettysmileRAF = 0;
  let targetX = 0,
    targetY = 0;
  let prettysmileX = 0,
    prettysmileY = 0;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  function prettysmileLoop() {
    if (!prettysmileEnabled || !prettysmileEl) return;
    const lerp = prefersReduced ? 1 : 0.15;
    prettysmileX = prettysmileX + (targetX - prettysmileX) * lerp;
    prettysmileY = prettysmileY + (targetY - prettysmileY) * lerp;
    // Usa left/top para evitar problemas com scroll e conflitos com transform do CSS
    prettysmileEl.style.left = `${Math.round(prettysmileX)}px`;
    prettysmileEl.style.top = `${Math.round(prettysmileY)}px`;
    prettysmileRAF = requestAnimationFrame(prettysmileLoop);
  }
  function enablePrettysmile() {
    if (prettysmileEnabled) return;
    prettysmileEnabled = true;
    prettysmileEl = document.createElement("img");
    prettysmileEl.className = "idkfa";
    prettysmileEl.setAttribute("aria-hidden", "true");
    prettysmileEl.src = "img/prettysmile.png";
    prettysmileEl.alt = "Pretty Smile";
    prettysmileEl.style.width = "32px";
    prettysmileEl.style.height = "32px";
    document.body.appendChild(prettysmileEl);
    // Init offscreen e limpa qualquer transform vindo do CSS
    prettysmileX = -100;
    prettysmileY = -100;
    targetX = -100;
    targetY = -100;
    prettysmileEl.style.left = `${prettysmileX}px`;
    prettysmileEl.style.top = `${prettysmileY}px`;
    prettysmileEl.style.transform = "none";

    // Armazena a posição do mouse relativa à viewport
    let clientX = 0,
      clientY = 0;

    const updateTarget = () => {
      targetX = clientX + window.scrollX + 12;
      targetY = clientY + window.scrollY + 12;
      if (!prefersReduced && !prettysmileRAF)
        prettysmileRAF = requestAnimationFrame(prettysmileLoop);
      else prettysmileLoop();
    };

    const onMove = (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      updateTarget();
    };

    const onScroll = () => {
      updateTarget();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    prettysmileEl._cleanup = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }
  function disablePrettysmile() {
    prettysmileEnabled = false;
    if (prettysmileRAF) cancelAnimationFrame(prettysmileRAF);
    prettysmileRAF = 0;
    if (prettysmileEl) {
      try {
        prettysmileEl._cleanup?.();
      } catch {}
      prettysmileEl.remove();
      prettysmileEl = null;
    }
  }

  let cursorEnabled = false;
  let cursorEl = null;
  let ghostEls = [];
  let cursorRAF = 0;
  let cx = -100,
    cy = -100; // pos atual do ponteiro
  let lastX = 0,
    lastY = 0,
    lastT = 0; // para scaling baseado na velocidade
  function updateCursorHover() {
    if (!cursorEl) return;
    const el = document.elementFromPoint?.(cx, cy) || null;
    const hoverEl =
      el && el.closest
        ? el.closest(
            'a, button, [role="button"], .card, input, textarea, select, label'
          )
        : null;
    cursorEl.classList.toggle("hover", !!hoverEl);
  }
  function cursorLoop() {
    if (!cursorEnabled) return;
    for (let i = 0; i < ghostEls.length; i++) {
      const g = ghostEls[i];
      const tx = i === 0 ? cx : ghostEls[i - 1]._x;
      const ty = i === 0 ? cy : ghostEls[i - 1]._y;
      g._x = g._x + (tx - g._x) * 0.15;
      g._y = g._y + (ty - g._y) * 0.15;
      g.style.left = `${Math.round(g._x)}px`;
      g.style.top = `${Math.round(g._y)}px`;
    }
    cursorRAF = requestAnimationFrame(cursorLoop);
  }
  function onCursorMove(e) {
    cx = e.clientX;
    cy = e.clientY;
    if (cursorEl) {
      cursorEl.style.left = `${cx}px`;
      cursorEl.style.top = `${cy}px`;
      const now = performance.now();
      const dt = Math.max(1, now - (lastT || now));
      const dx = cx - (lastX || cx);
      const dy = cy - (lastY || cy);
      const speed = Math.sqrt(dx * dx + dy * dy) / dt; // px/ms
      const scale = Math.max(0.9, Math.min(1 + speed * 0.4, 1.6));
      cursorEl.style.transform = `scale(${scale.toFixed(3)})`;
      lastX = cx;
      lastY = cy;
      lastT = now;
      // Hover sensível a links: recomputa baseado na posição atual
      updateCursorHover();
    }
    if (!prefersReduced && !cursorRAF)
      cursorRAF = requestAnimationFrame(cursorLoop);
  }
  function onCursorClick(e) {
    if (!cursorEnabled) return;
    const r = document.createElement("div");
    r.className = "retro-ripple";
    r.style.left = `${e.clientX}px`;
    r.style.top = `${e.clientY}px`;
    document.body.appendChild(r);
    const cleanup = () => {
      r.removeEventListener("animationend", cleanup);
      r.remove();
    };
    r.addEventListener("animationend", cleanup);
    setTimeout(cleanup, 420);
  }
  function enableRetroCursor() {
    if (cursorEnabled) return;
    cursorEnabled = true;
    cursorEl = document.createElement("div");
    cursorEl.className = "retro-cursor";
    cursorEl.setAttribute("aria-hidden", "true");
    cursorEl.style.left = "-100px";
    cursorEl.style.top = "-100px";
    document.body.appendChild(cursorEl);
    ghostEls = [];
    if (!prefersReduced) {
      for (let i = 0; i < 3; i++) {
        const g = document.createElement("div");
        g.className = "retro-ghost";
        g._x = -100;
        g._y = -100;
        g.style.left = "-100px";
        g.style.top = "-100px";
        document.body.appendChild(g);
        ghostEls.push(g);
      }
    }
    window.addEventListener("mousemove", onCursorMove, { passive: true });
    window.addEventListener("mousedown", onCursorClick, { passive: true });
    const onViewportChange = () => {
      updateCursorHover();
    };
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("wheel", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange, { passive: true });
    cursorEl._onViewportChange = onViewportChange;
    // Recomputa com mudanças de foco do teclado
    const onFocusChange = () => {
      updateCursorHover();
    };
    window.addEventListener("focusin", onFocusChange, true);
    window.addEventListener("focusout", onFocusChange, true);
    cursorEl._onFocusChange = onFocusChange;
    // Também escuta scroll dentro das colunas do modal (não propaga para window)
    const scrollTargets = [
      document.querySelector(".modal-media"),
      document.querySelector(".modal-text"),
      document.querySelector(".modal-content"),
    ].filter(Boolean);
    scrollTargets.forEach((t) =>
      t.addEventListener("scroll", onViewportChange, { passive: true })
    );
    cursorEl._scrollTargets = scrollTargets;
    if (!prefersReduced) cursorRAF = requestAnimationFrame(cursorLoop);
  }
  function disableRetroCursor() {
    cursorEnabled = false;
    if (cursorRAF) cancelAnimationFrame(cursorRAF);
    cursorRAF = 0;
    window.removeEventListener("mousemove", onCursorMove);
    window.removeEventListener("mousedown", onCursorClick);
    if (cursorEl && cursorEl._onViewportChange) {
      window.removeEventListener("scroll", cursorEl._onViewportChange);
      window.removeEventListener("wheel", cursorEl._onViewportChange);
      window.removeEventListener("resize", cursorEl._onViewportChange);
      if (cursorEl._scrollTargets) {
        try {
          cursorEl._scrollTargets.forEach((t) =>
            t.removeEventListener("scroll", cursorEl._onViewportChange)
          );
        } catch {}
      }
    }
    if (cursorEl && cursorEl._onFocusChange) {
      window.removeEventListener("focusin", cursorEl._onFocusChange, true);
      window.removeEventListener("focusout", cursorEl._onFocusChange, true);
    }
    try {
      cursorEl?.remove();
    } catch {}
    cursorEl = null;
    ghostEls.forEach((g) => {
      try {
        g.remove();
      } catch {}
    });
    ghostEls = [];
  }

  // Restaura modos persistentes
  try {
    if (sessionStorage.getItem("prettySmileMode") === "1") {
      document.body.classList.add("pretty-smile-mode");
      updateAboutPhotoForPrettySmile(true);
      updateLogoForPrettySmile(true);
    }
  } catch {}

  // Key handling global para cheats
  window.addEventListener("keydown", (e) => {
    // Pula quando digitando em campos
    if (isTypingContext()) return;
    const k = normKey(e);
    // Mantém key buffer para o Konami Code
    keyBuffer.push(k);
    if (keyBuffer.length > MAX_KEYBUF) keyBuffer.shift();
    if (endsWithKonami(keyBuffer)) {
      // Opcional: permitir Enter para finalizar, mas alternar apenas na sequência
      togglePrettySmileMode();
      keyBuffer.length = 0; // reset
      return;
    }
    // Mantém o buffer de palavras para cheats (apenas letras)
    if (/^[a-z0-9]$/.test(k)) {
      textBuffer += k;
      if (textBuffer.length > MAX_TEXTBUF)
        textBuffer = textBuffer.slice(-MAX_TEXTBUF);
      clearTimeout(textBufferTimer);
      textBufferTimer = setTimeout(() => {
        textBuffer = "";
      }, 3000);
    }
  });

  // Focus trap
  let untrap = null;
  function trapFocus(container) {
    const focusable = getFocusable(container);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();
    function onKeydown(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    container.addEventListener("keydown", onKeydown);
    untrap = () => container.removeEventListener("keydown", onKeydown);
  }
  function releaseFocus() {
    if (untrap) untrap();
  }
  function getFocusable(container) {
    const selectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea",
      "input",
      "select",
      '[tabindex]:not([tabindex="-1"])',
    ];
    return qsa(selectors.join(","), container).filter(
      (el) => !el.hasAttribute("disabled")
    );
  }

  // Utilitários
  function setCardThumb(card, data) {
    const thumbEl = qs(".thumb", card);
    if (!thumbEl || !data) return;
    const firstImg = data.thumb || data.images?.[0];
    const videoId = getYouTubeId(data.video);
    if (firstImg) thumbEl.style.backgroundImage = `url('${firstImg}')`;
    else if (videoId)
      thumbEl.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')`;
    // marca o card se houver vídeo
    if (videoId) card.classList.add("has-video");
  }

  function getYouTubeId(url) {
    if (!url) return "";
    try {
      // trata youtu.be/ID e youtube.com/watch?v=ID e /embed/ID
      const match = String(url).match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
      );
      return match ? match[1] : "";
    } catch {
      return "";
    }
  }
})();
