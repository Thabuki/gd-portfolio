// Modal do portfólio + dados
(function () {
	'use strict';

	let projects = {
			main1: {
				title: 'Changer Seven',
				meta: 'Game Designer • Nov 2023 – Nov 2025',
					summary: 'Unreal Engine 5 (PC & Consoles). Designed combat/progression systems, enemy AI, and levels.',
					experience: [
						'Balanced player character attributes and abilities',
						'Designed and fine-tuned enemy AI behaviours, stats, and encounters',
						'Developed game systems that govern core mechanics (combat/progression)',
						'Created and maintained design documents for the game systems',
						'Prototyped, implemented, and iterated on 3 levels',
						'Conducted playtests to gather feedback on character and enemy balance',
						'Analysed community feedback to tweak character and enemy balances',
						'Collaborated with technical teams to optimise gameplay systems',
						'Identified and fixed bugs related to character abilities and enemy interactions',
						'Assisted in coordinating the project\'s documentation and naming structure'
					],
				images: [
					'img/main-games/changer/changer-1.webp',
					'img/main-games/changer/changer-3.jpg',
					'img/main-games/changer/changer-4.jpg',
					'img/main-games/changer/changer-5.jpg',
					'img/main-games/changer/changer-6.jpg',
					'img/main-games/changer/changer-7.jpg',
					'img/main-games/changer/changer-8.jpg',
					'img/main-games/changer/changer-9.jpg'
				],
				// O vídeo pode ser uma URL do YouTube ou um arquivo local
				video: 'https://youtu.be/9KvM1tEteXU',
				links: [
					// { label: 'Website', href: '#' },
					// { label: 'Trailer', href: '#' }
				]
			},
			main2: {
				title: 'PAYDAY Crime War',
				meta: 'Truly Social Games • Dec 2022 – Aug 2023',
					summary: 'Unity (Mobile). Planned and built levels combining stealth and FPS gameplay.',
					experience: [
						'Planned levels that incorporated both stealth and FPS gameplay elements',
						'Wrote and maintained level design documents for all of the game’s levels',
						'Gathered references and evaluated resources needed for development',
						'Prototyped, implemented, tested, and polished new levels',
						'Ensured pacing, challenge, scalability, and replayability across levels',
						'Conducted playtests with the team to gather feedback and suggestions',
						'Translated community feedback into tangible level improvements',
						'Worked with software engineers and artists to achieve performance targets',
						'Fixed bugs related to levels and level systems'
					],
				images: [
					'img/main-games/payday/payday-1.jpg',
					'img/main-games/payday/payday-3.webp',
					'img/main-games/payday/payday-4.webp',
					'img/main-games/payday/payday-5.gif',
					'img/main-games/payday/payday-6.gif',
					'img/main-games/payday/payday-7.gif',
					'img/main-games/payday/payday-8.gif',
					'img/main-games/payday/payday-9.webp'
				],
				video: 'https://youtu.be/ohMP2Y-CPaE',
				links: []
			},
				main3: {
					title: 'Archer: DANGER PHONE',
					meta: 'Truly Social Games • Oct 2021 – Nov 2022',
					summary: 'Unity (Mobile). Live-ops data, gameplay balance, documentation, offers, and automation.',
					experience: [
						'Limited-time event data implementation and weekly set-up',
						'Maintained the gameplay balance in the main game',
						'Maintained and iterated on gameplay balance for timed events',
						'Wrote and maintained documentation on a variety of the game’s systems',
						'Created mock-ups and flowcharts that conveyed the design team\'s ideas',
						'Created and maintained monetized offers through A/B testing and data analysis',
						'Streamlined the process of setting up weekly events through automation'
					],
					images: [
						'img/main-games/archer/archer-1.png',
						'img/main-games/archer/archer-3.jpg',
						'img/main-games/archer/archer-4.jpg',
						'img/main-games/archer/archer-5.jpg',
						'img/main-games/archer/archer-6.webp',
						'img/main-games/archer/archer-7.jpg',
						'img/main-games/archer/archer-8.jpg',
						'img/main-games/archer/archer-9.webp'
					],
					video: 'https://youtu.be/jxlYpkjkfAs',
					links: []
				},
			main4: { title: 'Main Game 4', meta: 'Role • Year', summary: 'Summary', experience: [], images: [], video: '', links: [] },
				jam1: {
					title: 'GHOULF',
					meta: 'Level Designer • GMTK 2021',
					summary: 'Third-person isometric minigolf-esque puzzle game made in Unity over 2 days for GMTK 2021. Help a misplaced soul in Hell reunite with its body and escape.',
					experience: [
						'Designed levels, from paper to engine implementation',
						'Fine-tuned difficulty and gameplay aspects throughout development',
						'Playtested extensively to create a cohesive difficulty curve',
						'Defined scoring ranges for a 3-star rating system',
						'GMTK 2021 rankings (of 5,674): Presentation #31, Overall #86, Originality #229, Fun #336'
					],
					images: [
						'img/side-projects/ghoulf/ghoulf-1.webp',
						'img/side-projects/ghoulf/ghoulf-2.gif',
						'img/side-projects/ghoulf/ghoulf-3.webp',
						'img/side-projects/ghoulf/ghoulf-4.webp',
						'img/side-projects/ghoulf/ghoulf-5.webp',
						'img/side-projects/ghoulf/ghoulf-6.webp'
					],
					video: '',
					links: []
				},
				jam2: {
					title: 'BORKSPEL',
					meta: 'Gameplay Designer/Programmer • Jul 2018 – Oct 2018',
					summary: 'Online head-to-head competitive VR game for PC where two players race to assemble furniture in a set time, fighting for their job—and their lives.',
					experience: [
						'Designed and implemented gameplay systems and interactions in Unity',
						'Focused on head-to-head competitive pacing and clarity for VR',
						'Developed core loop around time pressure and performance feedback'
					],
					images: [
						'img/side-projects/borkspel/borkspel-1.webp',
						'img/side-projects/borkspel/borkspel-3.webp',
						'img/side-projects/borkspel/borkspel-4.webp',
						'img/side-projects/borkspel/borkspel-5.webp',
						'img/side-projects/borkspel/borkspel-6.webp',
						'img/side-projects/borkspel/borkspel-7.gif',
						'img/side-projects/borkspel/borkspel-8.webp'
					],
					video: 'https://youtu.be/MXYDWOqcYrI',
					links: []
				},
				jam3: {
					title: 'Wrong',
					meta: 'Director/Editor • Oct 2017 – Dec 2017',
					summary: 'Cinematic created using GTA V’s Rockstar Editor, telling the story of two modern-time outlaws and their big score that goes right—mostly.',
					experience: [
						'Storyboarded, captured, and edited scenes using Rockstar Editor',
						'Final edit and post-production in Adobe Premiere',
						'Focused on framing, pacing, and narrative clarity'
					],
					images: [
						'img/side-projects/wrong/wrong-1.jpg',
						'img/side-projects/wrong/wrong-3.jpg',
						'img/side-projects/wrong/wrong-4.jpg'
					],
					video: 'https://youtu.be/IMB0JMg00hQ',
					links: []
				},
				jam4: {
					title: 'The Omni Crusher',
					meta: 'Physical Interface • Mar 2016 – Dec 2016',
					summary: 'Physical working prototype from a year-long investigation into ergonomic arcade interfaces for fighting games.',
					experience: [
						'Conducted ergonomic studies and iterative hardware revisions',
						'Applied user-centered design and HCI methodology',
						'Informed decisions through ongoing market research'
					],
					images: [
						// A primeira imagem vira a thumbnail do card e a primeira no modal
						'img/side-projects/omnic/omnic-1.jpg',
						// Fotos adicionais
						'img/side-projects/omnic/omnic-4.jpg',
						'img/side-projects/omnic/omnic-5.jpg',
						'img/side-projects/omnic/omnic-6.jpg',
						'img/side-projects/omnic/omnic-7.jpg',
						'img/side-projects/omnic/omnic-3.jpg'
					],
					video: 'https://youtu.be/yckgytl1HLg',
					links: []
				}
	};

	const qs = (sel, el = document) => el.querySelector(sel);
	const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

	const modal = qs('#project-modal');
	const media = qs('#modal-media');
	const title = qs('#modal-title');
	const modalRole = qs('#modal-role');
	const modalCompany = qs('#modal-company');
	const body = qs('#modal-body');
	const links = qs('#modal-links');
	const closeButtons = qsa('[data-close]', modal);

		// Ano no footer
	const yearEl = qs('#year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle (básico)
	const navToggle = qs('.nav-toggle');
	const menu = qs('#site-menu');
	if (navToggle && menu) {
		navToggle.addEventListener('click', () => {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			menu.hidden = expanded;
		});
		menu.hidden = true; // começa hidden em telas pequenas
	}
		// Garante que o menu fique visível ao redimensionar para desktop
		const mql = window.matchMedia('(min-width: 901px)');
		const onResize = () => { if (menu) menu.hidden = !mql.matches && (qs('.nav-toggle')?.getAttribute('aria-expanded') !== 'true'); };
		mql.addEventListener?.('change', onResize);
		window.addEventListener('resize', onResize);
			onResize();

	// Abre o modal para um id de projeto
	function openProject(id) {
		const data = projects[id];
		if (!data) return;

		// preenche o conteúdo
		title.textContent = data.title || '';
		
		// Parse meta to extract role and company based on project patterns
		if (data.meta) {
			// Handle different meta patterns based on the project ID
			if (id === 'main1') {
				// Changer Seven: meta has role but missing company
				modalRole.textContent = 'Game Designer';
				modalCompany.textContent = 'Gixer Entertainment • Nov 2023 - Nov 2025';
			} else if (id === 'main2') {
				// PAYDAY: meta has company but missing role  
				modalRole.textContent = 'Level Designer';
				modalCompany.textContent = 'PopReach Incorporated • Dec 2022 - Aug 2023';
			} else if (id === 'main3') {
				// Archer: meta has company but missing role
				modalRole.textContent = 'Game Designer';
				modalCompany.textContent = 'Truly Social Games • Oct 2021 - Nov 2022';
			} else {
				// For other projects, try to parse the meta field
				const metaParts = data.meta.split(' • ');
				if (metaParts.length >= 2) {
					modalRole.textContent = metaParts[0];
					modalCompany.textContent = metaParts.slice(1).join(' • ');
				} else {
					modalRole.textContent = data.meta;
					modalCompany.textContent = '';
				}
			}
		} else {
			modalRole.textContent = '';
			modalCompany.textContent = '';
		}
		
		body.innerHTML = '';
		links.innerHTML = '';
		media.innerHTML = '';

			// Resumo e experiência dentro do modal
			if (data.summary) {
				const p = document.createElement('p');
				p.textContent = data.summary;
				body.appendChild(p);
			}
			if (Array.isArray(data.experience) && data.experience.length) {
				const h = document.createElement('h4');
				h.textContent = 'My role & contributions';
				body.appendChild(h);
				const ul = document.createElement('ul');
				data.experience.forEach(item => {
					const li = document.createElement('li');
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
				img.loading = 'lazy';
				img.decoding = 'async';
				img.src = imgs[0];
				img.alt = `${data.title} screenshot`;
				media.appendChild(img);
				mediaCount++;
			}

			// Vídeo em segundo (se houver)
			if (videoId) {
				const wrap = document.createElement('div');
				wrap.className = 'video-wrap';
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
						const wrap = document.createElement('div');
						wrap.className = 'video-wrap';
						wrap.innerHTML = `<iframe class="video-frame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${extraVid}?modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
						media.appendChild(wrap);
						mediaCount++;
					} else {
						const img = new Image();
						img.loading = 'lazy';
						img.decoding = 'async';
						img.src = src;
						img.alt = `${data.title} screenshot`;
						media.appendChild(img);
						mediaCount++;
					}
				}
			}

			// Toggle de acessibilidade
			if (mediaCount > 0) media.removeAttribute('aria-hidden');
			else media.setAttribute('aria-hidden', 'true');

			// links (apenas links personalizados; sem link extra do YouTube)
			if (Array.isArray(data.links) && data.links.length) {
			data.links.forEach(l => {
				const a = document.createElement('a');
				a.href = l.href;
				a.target = /^(https?:)?\/\//.test(l.href) ? '_blank' : '_self';
				a.rel = 'noopener';
				a.textContent = l.label;
				links.appendChild(a);
			});
		}

		openModal();
	}

	// Abrir/fechar modal + gerenciamento de foco
	let lastFocused = null;
	function openModal() {
		lastFocused = document.activeElement;
		modal.setAttribute('aria-hidden', 'false');
		trapFocus(modal);
			document.body.classList.add('modal-open');
	}
	function closeModal() {
		// Interrompe qualquer mídia em reprodução e limpa
		try {
			qsa('video', media).forEach(v => { try { v.pause(); v.currentTime = 0; } catch {} });
			qsa('iframe', media).forEach(f => { try { f.src = f.src; } catch {} });
			media.innerHTML = '';
			media.setAttribute('aria-hidden', 'true');
		} catch {}
		modal.setAttribute('aria-hidden', 'true');
		releaseFocus();
		if (lastFocused && lastFocused.focus) lastFocused.focus();
			document.body.classList.remove('modal-open');
	}

	// Vincula a abertura nos cards
	qsa('.card[data-id]').forEach(card => {
		const id = card.getAttribute('data-id');
		// initial thumbnails from inline data
		try { const data = projects[id]; if (data) setCardThumb(card, data); } catch (_) {}
		const handler = () => openProject(id);
		card.addEventListener('click', handler);
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				handler();
			}
		});
	});

	// Interações quando fecha
	closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
	modal.addEventListener('click', (e) => {
		if (e.target && e.target.hasAttribute('data-close')) closeModal();
	});
	window.addEventListener('keydown', (e) => {
		if (modal.getAttribute('aria-hidden') === 'false' && e.key === 'Escape') {
			closeModal();
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
			if (e.key !== 'Tab') return;
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
		container.addEventListener('keydown', onKeydown);
		untrap = () => container.removeEventListener('keydown', onKeydown);
	}
	function releaseFocus() { if (untrap) untrap(); }
	function getFocusable(container) {
		const selectors = [
			'a[href]', 'button:not([disabled])', 'textarea', 'input', 'select',
			'[tabindex]:not([tabindex="-1"])'
		];
		return qsa(selectors.join(','), container).filter(el => !el.hasAttribute('disabled'));
	}

		// Utilitários
	function setCardThumb(card, data) {
		const thumbEl = qs('.thumb', card);
		if (!thumbEl || !data) return;
		const firstImg = data.thumb || data.images?.[0];
		const videoId = getYouTubeId(data.video);
		if (firstImg) thumbEl.style.backgroundImage = `url('${firstImg}')`;
		else if (videoId) thumbEl.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')`;
		// marca o card se houver vídeo
		if (videoId) card.classList.add('has-video');
	}

		function getYouTubeId(url) {
			if (!url) return '';
			try {
				// trata youtu.be/ID e youtube.com/watch?v=ID e /embed/ID
				const match = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
				return match ? match[1] : '';
			} catch { return ''; }
		}
})();
