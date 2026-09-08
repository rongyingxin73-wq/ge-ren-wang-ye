(() => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = mobileNav?.querySelectorAll("a");
  const pillNav = document.querySelector(".pill-nav");
  const pillItems = pillNav?.querySelectorAll(".pill-nav-item");
  const pillBg = pillNav?.querySelector(".pill-bg");
  const grid = document.querySelector(".works-grid");
  const lightbox = document.querySelector(".lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxCaption = document.querySelector(".lightbox-caption");

  const works = [
    {
      title: "小熊咖啡机 · 电商视觉设计",
      category: "domestic",
      type: "image",
      src: "国内电商套图/小熊咖啡机淘宝电商图/主图1.png",
      tag: "国内电商套图",
      detail: "project-xiaoxiong-coffee.html?v=25",
    },
    {
      title: "3CE 口红 · 电商视觉设计",
      category: "domestic",
      type: "image",
      src: "国内电商套图/3CE口红淘宝电商图/主图1.png",
      tag: "国内电商套图",
      detail: "project-3ce-lipstick.html?v=25",
    },
    {
      title: "AirPods Max 头戴式耳机 · 电商视觉设计",
      category: "domestic",
      type: "image",
      src: "国内电商套图/AirPods Max头戴式耳机/主图1.png",
      tag: "国内电商套图",
      detail: "project-airpods-max.html?v=25",
    },
    {
      title: "lululemon 瑜伽服 · 亚马逊电商视觉设计",
      category: "amazon",
      type: "image",
      src: "亚马逊电商套图/lululemon瑜伽服 亚马逊电商图/主图.png",
      tag: "亚马逊电商套图",
      detail: "project-lululemon-yoga.html?v=25",
    },
    {
      title: "宠物玩具球 · 亚马逊电商视觉设计",
      category: "amazon",
      type: "image",
      src: "亚马逊电商套图/亚马逊宠物玩具球电商图/宠物玩具球亚马逊主副图，A+图/主图.png",
      tag: "亚马逊电商套图",
      detail: "project-pet-toy-ball.html?v=25",
    },
    {
      title: "卡诗洗发水 · 亚马逊电商视觉设计",
      category: "amazon",
      type: "image",
      src: "亚马逊电商套图/卡诗洗发水亚马逊电商图/主图.png",
      tag: "亚马逊电商套图",
      detail: "project-kerastase-shampoo.html?v=25",
    },
    {
      title: "《归》",
      category: "aivideo",
      type: "video",
      src: "AI视频精选/《归》/《归》.mp4",
      poster: "assets/归-封面.jpg",
      tag: "AI 视频精选",
      feature: true,
      description:
        "26 岁的工地工人林舟自幼被拐，一直以为自己是孤儿，养父母离世后独自生活，后因救人在工地事故中丧生。魂魄入地府后，阎王因其善举允许他借往生镜再见一位亲人，判官这时揭开身世秘密：他的生母周秀兰二十三年从未停止寻子，因记得儿子爱吃红薯干，十九年间不断向各地工地寄晒好的红薯干，多数包裹被退回，林舟去世前偶然收到过母亲寄来的最后一袋，却并不知晓来源。林舟以魂魄回到故土，见到苦苦守候的母亲，可阴阳殊途无法相认，母亲也接到警方通知，得知儿子已经死亡。相见时限结束，林舟消散，周秀兰依旧虚掩家门、年年晒制红薯干，执着等候一场不可能实现的团圆。",
    },
    {
      title: "《交换的影子》",
      category: "aivideo",
      type: "video",
      src: "AI视频精选/《交换的影子》/《交换的影子》.mp4",
      poster: "assets/交换的影子-封面.jpg",
      tag: "AI 视频精选",
      feature: true,
      description:
        "傍晚的美式小镇后院，两个孩子 Alex 和 Sam 在玩手电筒时，意外发现彼此的影子可以互相交换。交换后，他们看见了对方藏起来的秘密：Alex 其实不想搬家，Sam 夜里必须开着灯才能入睡。随着交换次数增加，影子开始出现延迟、抖动，甚至短暂消失。最后，两人决定把一块分不清归属的影子一起藏进树洞，然后牵着手走回黑暗中。\n\n核心主题：以小孩视角书写友谊——在温暖的陪伴中正视彼此的脆弱与秘密，并选择一起守护那些说不清、藏不住的“阴影”。温情与轻微诡异并存，强调理解、信任与共同承担。",
    },
    {
      title: "《圆豹豹：北极抢宝大乌龙》",
      category: "aivideo",
      type: "video",
      src: "AI视频精选/动画短片/《圆豹豹：北极抢宝大乌龙》.mp4",
      poster: "assets/圆豹豹-封面.jpg",
      tag: "AI 视频精选",
      description:
        "圆滚滚小海豹「圆豹豹」在北极冰原百无聊赖晒太阳，一眼盯上海上飘来一块封着闪光珍珠的冰块，把它当成绝世宝贝。它斗志满满冲过去想要拿下宝物，一路上疯狂翻车：打滑摔雪坑、差点被浪拍飞、原地滚圈圈。好不容易快够到，结果宝物被路过海鸟一口叼走。圆豹豹大受打击原地 emo，追过去才发现珍珠冰块是别的小海豹弄丢的玩具。\n\n它虽然没能拿到心心念念的珍珠，却因为仗义归还，收获了一颗热乎乎的太阳石。结局搞笑又治愈：宝贝不是抢到的，是乌龙撞来的小幸运。",
    },
    {
      title: "《愚公移山》",
      category: "aivideo",
      type: "video",
      src: "AI视频精选/寓言故事短片/《愚公移山》.mp4",
      poster: "assets/愚公移山-封面.jpg",
      tag: "AI 视频精选",
      description:
        "巍峨大山阻隔出行，年近九旬的愚公不甘心世代被大山困住，带领家人日复一日挥镐挖土，决心挖平挡路的大山。面对智叟的嘲笑劝阻，愚公坚信子子孙孙世代接续，终能铲平高山。他的执着信念感动天地，天神派遣大力神将两座大山搬走，最终通路敞开，家族得以畅通出入。",
    },
    {
      title: "《罪女的半壁江山》短剧 1-2集",
      category: "aivideo",
      type: "video",
      src: "AI视频精选/绝地开荒：《罪女的半壁江山》短剧1-2集/1c7e0f940061dd88d0aaafa427231162_raw.mp4",
      poster: "assets/罪女-封面.jpg",
      tag: "AI 视频精选",
      description:
        "现代农业科学家顾清禾在实验室爆炸中身亡，穿越成西北边关罪女。面对盐碱绝地与死亡威胁，她凭借专业农学知识开荒求生，从最差的盐碱地种出第一批绿芽，逐步聚集罪奴与流民，把死地建成能养活数百人的粮仓。在贪官、豪强与旧怨的压迫下，她始终以土地和粮食为根基，最终在边关危机中成为不可忽视的力量，完成从个人求生到集体自立的蜕变。\n\n核心主题：死过一次的人，更懂如何从零开始把命种出来。大女主不靠男人救赎，靠自己的手和脑子，把绝地变成生路。",
    },
    {
      title: "AirPods Max头戴式耳机TVC广告",
      category: "tvc",
      type: "video",
      src: "TVC广告/AirPods Max头戴耳机TVC广告.mp4",
      poster: "assets/airpods-max-tvc-封面.jpg",
      tag: "TVC 广告",
      wide: true,
    },
    {
      title: "lululemon 瑜伽服 TVC",
      category: "tvc",
      type: "video",
      src: "TVC广告/lululemon瑜伽服TVC广告.mp4",
      tag: "TVC 广告",
      wide: true,
    },
    {
      title: "汉堡 TVC 广告",
      category: "tvc",
      type: "video",
      src: "TVC广告/汉堡TVC广告.mp4",
      tag: "TVC 广告",
    },
    {
      title: "华洋汽水广告",
      category: "tvc",
      type: "video",
      src: "TVC广告/华洋汽水广告.mp4",
      tag: "TVC 广告",
    },
    {
      title: "娃哈哈 TVC 广告",
      category: "tvc",
      type: "video",
      src: "TVC广告/娃哈哈TVC广告视频.mp4",
      tag: "TVC 广告",
      wide: true,
    },
    {
      title: "斑斑 BANBAN 海豹 · 品牌 IP 形象设计",
      category: "brandip",
      type: "video",
      src: "品牌IP/斑斑BANBAN海豹/BANBAN斑斑自我介绍视频.mp4",
      poster: "品牌IP/斑斑BANBAN海豹/banban 自我介绍封面.png",
      tag: "品牌 IP",
      detail: "project-banban-seal-ip.html?v=25",
      description:
        "一只圆滚滚、爱打盹的小海豹「斑斑 BANBAN」。围绕主形象延展了表情包、三视图、不同造型、实体周边与扁平插画海报，搭起一整套适合社交媒体与品牌传播的 IP 资产。\n\n核心主题：把「软糯、治愈、爱打盹」的情绪拆解成可被反复使用的视觉符号，让斑斑在不同场景与媒介中都能保持一致的辨识度与温度感。",
    },
  ];

  // Header background / mode
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const hero = document.querySelector(".hero");
  if (header && hero) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.remove("light");
          } else {
            header.classList.add("light");
          }
        });
      },
      { threshold: 0.1 }
    );
    heroObserver.observe(hero);
  }

  // Mobile menu
  menuToggle?.addEventListener("click", () => {
    const isActive = mobileNav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  mobileLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Render works grid
  function renderWorks(filter = "all") {
    if (!grid) return;
    grid.innerHTML = "";
    const filtered =
      filter === "all" ? works : works.filter((w) => w.category === filter);

    const categoryMeta = {
      domestic: ["AI + Photoshop 合成", "AI 生成"],
      amazon: ["亚马逊主图", "A+ 详情页"],
      aivideo: ["AI 视频", "动态叙事"],
      tvc: ["TVC 广告", "品牌传播"],
      brandip: ["IP 形象", "品牌延展"],
    };

    function getDesc(item) {
      if (item.description) {
        return item.description;
      }
      if (item.category === "domestic") {
        return `${item.title} 全套国内电商视觉方案 —— 从概念策划到视觉落地，突出产品卖点与品牌调性。`;
      }
      if (item.category === "amazon") {
        return `${item.title} 全套亚马逊电商视觉方案 —— 覆盖主图、副图与 A+ 详情页内容版面。`;
      }
      if (item.category === "aivideo") {
        return `AI 驱动的动态叙事作品，从分镜构思到成片输出的一体化创作探索。`;
      }
      if (item.category === "brandip") {
        return `品牌 IP 形象设计项目，包含角色设定、视觉延展与场景应用探索。`;
      }
      return `品牌 TVC 动态广告，整合 AI 生成与传统剪辑，打造具有记忆点的传播内容。`;
    }

    filtered.forEach((item, i) => {
      const tagName = item.detail ? "a" : "article";
      const card = document.createElement(tagName);
      card.className = "card";
      if (item.detail) {
        card.href = item.detail;
        card.dataset.detail = "true";
      }
      card.dataset.type = item.type;
      if (item.src) card.dataset.src = item.src;
      card.dataset.title = item.title;
      card.dataset.tag = item.tag;
      card.style.animationDelay = `${(i % 16) * 0.05}s`;

      let media = "";
      if (item.type === "video") {
        const poster = item.poster ? ` poster="${item.poster}"` : "";
        const playIcon = item.detail
          ? ""
          : `<div class="play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>`;
        media = `<video src="${item.src}"${poster} muted loop preload="metadata" playsinline></video>${playIcon}`;
      } else if (item.type === "placeholder") {
        media = `<div class="placeholder-media"><span>IP</span></div>`;
      } else if (item.type === "gallery") {
        const first = Array.isArray(item.src) ? item.src[0] : item.src;
        const total = Array.isArray(item.src) ? item.src.length : 1;
        media = `<img src="${first}" alt="${item.title}" loading="lazy" />
                 <div class="gallery-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h3v14H4zm6.5 0h3v14h-3zm6.5 0h3v14h-3z"/></svg><span>共 ${total} 张</span></div>`;
      } else {
        media = `<img src="${item.src}" alt="${item.title}" loading="lazy" />`;
      }

      const meta = categoryMeta[item.category] || ["AIGC", "视觉设计"];
      const actionText = item.detail
        ? "查看完整作品 →"
        : item.type === "placeholder"
        ? "敬请期待"
        : "查看完整作品 →";
      const action = item.detail
        ? `<span class="card-action">${actionText}</span>`
        : `<button class="card-action" type="button">${actionText}</button>`;
      const descHtml = getDesc(item).replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");

      card.innerHTML = `
        <div class="card-media">
          ${media}
        </div>
        <div class="card-body">
          <span class="card-tag">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${descHtml}</p>
          <div class="card-meta">
            ${meta.map((m) => `<span>${m}</span>`).join("")}
          </div>
          ${action}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // PillNav
  function initPillNav() {
    if (!pillNav || !pillBg || !pillItems?.length) return;

    // Set CSS custom properties from data attributes
    pillNav.style.setProperty("--pill-nav-base-color", pillNav.dataset.baseColor || "#000000");
    pillNav.style.setProperty("--pill-nav-pill-color", pillNav.dataset.pillColor || "#111613");
    pillNav.style.setProperty("--pill-nav-pill-text-color", pillNav.dataset.pillTextColor || "#ffffff");
    pillNav.style.setProperty(
      "--pill-nav-hovered-pill-text-color",
      pillNav.dataset.hoveredPillTextColor || "#ffffff"
    );

    const ease = pillNav.dataset.ease || "power2.out";

    function updatePillColors(hoveredItem = null) {
      pillItems.forEach((item) => {
        if (hoveredItem && item === hoveredItem) {
          item.style.color = getComputedStyle(pillNav).getPropertyValue("--pill-nav-hovered-pill-text-color").trim();
        } else if (item.classList.contains("active")) {
          item.style.color = getComputedStyle(pillNav).getPropertyValue("--pill-nav-pill-text-color").trim();
        } else {
          item.style.color = getComputedStyle(pillNav).getPropertyValue("--pill-nav-base-color").trim();
        }
      });
    }

    function movePillTo(item, animate = true) {
      const left = item.offsetLeft;
      const width = item.offsetWidth;
      if (animate && typeof gsap !== "undefined") {
        gsap.to(pillBg, { left, width, duration: 0.35, ease });
      } else {
        pillBg.style.left = `${left}px`;
        pillBg.style.width = `${width}px`;
      }
    }

    function setActivePill(item) {
      pillItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      movePillTo(item);
      updatePillColors();
      renderWorks(item.dataset.filter);
    }

    pillItems.forEach((item) => {
      item.addEventListener("click", () => setActivePill(item));
      item.addEventListener("mouseenter", () => {
        movePillTo(item);
        updatePillColors(item);
      });
    });

    pillNav.addEventListener("mouseleave", () => {
      const active = pillNav.querySelector(".pill-nav-item.active");
      if (active) {
        movePillTo(active);
        updatePillColors();
      }
    });

    // Position pill on the active item without animation on load
    const active = pillNav.querySelector(".pill-nav-item.active");
    if (active) {
      movePillTo(active, false);
      updatePillColors();
      renderWorks(active.dataset.filter);
    }
  }

  initPillNav();

  // Lightbox
  function openLightbox(type, src, title) {
    lightboxContent.innerHTML = "";
    lightboxCaption.textContent = title;

    if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.setAttribute("playsinline", "");
      lightboxContent.appendChild(video);
    } else if (type === "gallery") {
      const images = Array.isArray(src) ? src : [src];
      const wrap = document.createElement("div");
      wrap.className = "lightbox-gallery";
      images.forEach((s) => {
        const img = document.createElement("img");
        img.src = s;
        img.alt = title;
        img.loading = "lazy";
        wrap.appendChild(img);
      });
      lightboxContent.appendChild(wrap);
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = title;
      lightboxContent.appendChild(img);
    }

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    const video = lightboxContent.querySelector("video");
    if (video) {
      video.pause();
      video.src = "";
    }
  }

  grid?.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card || card.dataset.detail || card.dataset.type === "placeholder") return;
    openLightbox(card.dataset.type, card.dataset.src, card.dataset.title);
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxContent) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // Other works marquee
  function initOtherWorksMarquee() {
    document.querySelectorAll(".other-scroll").forEach((scroll) => {
      const cards = Array.from(scroll.children);
      if (!cards.length) return;

      const track = document.createElement("div");
      track.className = "other-track";
      cards.forEach((card) => track.appendChild(card));
      scroll.appendChild(track);

      const setWidth = track.scrollWidth;
      const originalHTML = track.innerHTML;

      // Duplicate the set until the track is at least twice the container width
      while (track.scrollWidth < scroll.clientWidth * 2) {
        track.insertAdjacentHTML("beforeend", originalHTML);
      }

      track.style.setProperty("--set-width", `${setWidth}px`);
      // Speed: ~60px per second, minimum 12s
      const duration = Math.max(12, setWidth / 60);
      track.style.animationDuration = `${duration}s`;
    });
  }

  initOtherWorksMarquee();

  // Contact media lightbox
  const contactFrame = document.querySelector("[data-contact-lightbox]");
  if (contactFrame && lightbox && lightboxContent && lightboxCaption) {
    contactFrame.addEventListener("click", () => {
      const img = contactFrame.querySelector(".qr-code");
      if (!img) return;
      lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
      lightboxCaption.textContent = "扫码添加微信 · 点击图片可放大";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
})();
