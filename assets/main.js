(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const page = body.dataset.page || "";

  const header = document.querySelector("[data-site-header]");
  if (header) {
    const links = [
      ["work", "Work", `${root}work.html`],
      ["about", "About", `${root}about.html`],
      ["resume", "Resume", `${root}resume.html`],
    ];

    header.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="shell nav">
          <a class="brand" href="${root}index.html" aria-label="Vanessa Duan home">
            <span class="brand-mark">微</span>
            <span>Vanessa Duan</span>
          </a>
          <nav class="nav-links" aria-label="Primary navigation" data-nav-links>
            ${links.map(([key, label, href]) => `<a href="${href}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
            <a href="mailto:978278902@qq.com">Contact</a>
          </nav>
          <span class="nav-meta">Shenzhen · Systems · AI</span>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-navigation" data-menu>Menu</button>
        </div>
      </header>`;

    const menu = header.querySelector("[data-menu]");
    const nav = header.querySelector("[data-nav-links]");
    if (menu && nav) {
      nav.id = "mobile-navigation";
      menu.addEventListener("click", () => {
        const isOpen = nav.dataset.open === "true";
        nav.dataset.open = String(!isOpen);
        menu.setAttribute("aria-expanded", String(!isOpen));
      });
    }
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="shell">
          <div class="footer-grid">
            <div>
              <p class="footer-title">Let’s make complexity usable.</p>
              <a class="button" href="mailto:978278902@qq.com">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
            <div class="footer-links">
              <strong>Navigate</strong>
              <a href="${root}work.html">Selected work</a>
              <a href="${root}about.html">About & experience</a>
              <a href="${root}resume.html">Resume</a>
            </div>
            <div class="footer-links">
              <strong>Elsewhere</strong>
              <a href="https://github.com/Jingyuan0199" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="mailto:978278902@qq.com">Email</a>
              <span>Based in Shenzhen</span>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© <span data-year></span> Vanessa Duan</span>
            <span>Designed as a living system, not a static archive.</span>
          </div>
        </div>
      </footer>`;
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Articles always render their complete content. Old reading URL preferences are ignored.
  // Screen galleries settle their panels during startup; restore deep links after that layout.
  if (body.classList.contains("editorial-project") || body.classList.contains("overview-page")) {
    window.addEventListener("load", () => {
      const anchor = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (anchor) requestAnimationFrame(() => requestAnimationFrame(() => anchor.scrollIntoView({ behavior: "instant", block: "start" })));
    }, { once: true });
  }
  // Progressive enhancement for all pages using the editorial project template.
  if (body.classList.contains("editorial-project")) {
    document.querySelectorAll("[data-theme-demo]").forEach((demo) => {
      const modes = JSON.parse(demo.dataset.themeConfig);
      const buttons = [...demo.querySelectorAll("[data-theme-mode]")];
      const selectMode = (id) => {
        const mode = modes.find((item) => item.id === id);
        if (!mode) return;
        demo.style.setProperty("--demo-primary", mode.primary);
        demo.style.setProperty("--demo-soft", mode.soft);
        demo.style.setProperty("--demo-radius", `${mode.radius}px`);
        demo.style.setProperty("--demo-tag-radius", `${mode.tagRadius ?? mode.radius}px`);
        demo.querySelector("[data-theme-name]").textContent = mode.label;
        demo.querySelector("[data-theme-message]").textContent = mode.message;
        buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.themeMode === id)));
      };
      buttons.forEach((button) => button.addEventListener("click", () => selectMode(button.dataset.themeMode)));
      demo.querySelector("[data-theme-controls]").hidden = false;
    });
    document.querySelectorAll("[data-evidence-open]").forEach((opener) => {
      const dialog = document.getElementById(opener.dataset.evidenceOpen);
      if (!dialog || typeof dialog.showModal !== "function") return;
      opener.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        dialog.showModal();
      });
      dialog.querySelector("[data-evidence-close]").addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener("close", () => opener.focus({ preventScroll: true }));
    });
    document.querySelectorAll("[data-color-figure]").forEach((figure) => {
      const controls = [...figure.querySelectorAll("[data-color-toggle]")];
      const art = figure.querySelector(".project-figure__art");
      const scene = art?.querySelector(".project-art__scene");
      const source = scene?.querySelector(".project-art__source");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      let hovered = false;
      let keyboardFocus = false;
      let pointerFrame = 0;
      let pointerX = 0;
      let pointerY = 0;
      let depth = 3;
      const syncActive = () => {
        figure.classList.toggle("is-art-active", hovered || keyboardFocus);
      };
      const resetPointer = () => {
        cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        art?.style.setProperty("--art-x", "0px");
        art?.style.setProperty("--art-y", "0px");
        art?.style.setProperty("--art-rotate-x", "0deg");
        art?.style.setProperty("--art-rotate-y", "0deg");
      };
      // Clip copies of the original raster into small regions. The source stays
      // intact beneath them, so the static illustration also works without JS.
      if (source && art.dataset.artMotion) {
        try {
          const profile = JSON.parse(art.dataset.artMotion);
          depth = Number(profile.depth) || 3;
          const pieces = document.createDocumentFragment();
          profile.layers.forEach((layer) => {
            const [x, y, width, height] = layer.bounds;
            if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) return;
            const piece = document.createElement("span");
            piece.className = `project-motion__piece project-motion__piece--${layer.kind}`;
            piece.setAttribute("aria-hidden", "true");
            piece.style.cssText = `left:${x}%;top:${y}%;width:${width}%;height:${height}%;--piece-delay:${layer.delay || 0}ms;--piece-scale:${layer.scale || 1};`;
            if (layer.clip) piece.style.clipPath = layer.clip;
            if (layer.axis === "y") piece.classList.add("project-motion__piece--vertical");
            const crop = document.createElement("span");
            crop.className = "project-motion__crop";
            const image = document.createElement("img");
            image.src = source.src;
            image.alt = "";
            image.draggable = false;
            image.decoding = "async";
            image.loading = "lazy";
            image.style.cssText = `width:${10000 / width}%;height:${10000 / height}%;left:${-100 * x / width}%;top:${-100 * y / height}%;`;
            crop.append(image);
            piece.append(crop);
            pieces.append(piece);
          });
          scene.append(pieces);
          figure.classList.add("has-art-motion");
        } catch {
          // An invalid optional profile leaves the original color interaction.
        }
      }
      const setColor = (enabled) => {
        figure.classList.toggle("is-color", enabled);
        controls.forEach((control) => {
          control.setAttribute("aria-pressed", String(enabled));
          if (control.classList.contains("project-figure__pin")) {
            control.textContent = enabled ? "恢复灰阶" : "保持蓝色";
          }
        });
        syncActive();
      };
      controls.forEach((control) => control.addEventListener("click", () => {
        setColor(!figure.classList.contains("is-color"));
      }));
      figure.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setColor(false);
      });
      art?.addEventListener("pointerenter", () => {
        hovered = finePointer.matches;
        syncActive();
      });
      art?.addEventListener("pointerleave", () => {
        hovered = false;
        resetPointer();
        syncActive();
      });
      art?.addEventListener("focus", () => {
        keyboardFocus = art.matches(":focus-visible");
        syncActive();
      });
      art?.addEventListener("blur", () => {
        keyboardFocus = false;
        syncActive();
      });
      art?.addEventListener("pointermove", (event) => {
        if (!hovered || reducedMotion.matches) return;
        const rect = art.getBoundingClientRect();
        pointerX = (event.clientX - rect.left) / rect.width - .5;
        pointerY = (event.clientY - rect.top) / rect.height - .5;
        if (pointerFrame) return;
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          art.style.setProperty("--art-x", `${(pointerX * depth).toFixed(2)}px`);
          art.style.setProperty("--art-y", `${(pointerY * depth).toFixed(2)}px`);
          art.style.setProperty("--art-rotate-x", `${(-pointerY * .65).toFixed(2)}deg`);
          art.style.setProperty("--art-rotate-y", `${(pointerX * .65).toFixed(2)}deg`);
        });
      }, { passive: true });
      reducedMotion.addEventListener("change", resetPointer);
    });

    const sections = [...document.querySelectorAll(".project-section[id]")];
    const tocLinks = [...document.querySelectorAll("[data-section-link]")];
    const article = document.querySelector(".project-article");
    const progress = document.querySelector("[data-reading-progress]");
    let queued = false;
    const updateReading = () => {
      queued = false;
      const headerHeight = Math.max(0, document.querySelector(".portfolio-header")?.getBoundingClientRect().bottom || 0);
      const threshold = headerHeight + 70;
      let active = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) active = section;
      }
      // At the page bottom the final short section should still become current.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) active = sections.at(-1);
      tocLinks.forEach((link) => {
        if (active && link.hash === `#${active.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      if (article && progress) {
        const rect = article.getBoundingClientRect();
        const readable = Math.max(1, rect.height - (window.innerHeight - headerHeight));
        const value = Math.max(0, Math.min(1, (headerHeight - rect.top) / readable));
        progress.style.transform = `scaleX(${value})`;
      }
    };
    const scheduleReading = () => {
      if (!queued) { queued = true; requestAnimationFrame(updateReading); }
    };
    window.addEventListener("scroll", scheduleReading, { passive: true });
    window.addEventListener("resize", scheduleReading);
    window.addEventListener("load", scheduleReading, { once: true });
    updateReading();
  }

  const revealNodes = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }
})();

// Architectural daylight pauses when the document is hidden.
const syncGalleryVisibility=()=>document.documentElement.classList.toggle("gallery-paused",document.hidden);
document.addEventListener("visibilitychange",syncGalleryVisibility);
syncGalleryVisibility();
