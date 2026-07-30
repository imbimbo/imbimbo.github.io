const translations = {
  en: {
    pageTitle: "Felipe Imbimbo | Full-stack Developer",
    pageDescription: "Felipe Imbimbo is a full-stack developer building web products with Ruby on Rails, including banking integrations. Open to freelance work.",
    openMenu: "Open menu",
    backToTop: "Back to top",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    heroKicker: "Full-stack developer",
    heroPitch: "I build production-ready web applications with Ruby on Rails, focused on SaaS, business automation, APIs, and scalable back-end systems.",
    viewProjects: "View projects",
    contactMe: "WhatsApp",
    aboutTitle: "About",
    aboutBody: "Former <b>mobile developer</b> turned full-stack. I build web products and <b>SaaS</b> platforms from scratch with <b>Ruby on Rails</b>, Hotwire, and modern JavaScript. I have experience with <b>banking</b> integrations, invoicing, APIs, and management systems, always focused on robust, scalable solutions delivered quickly.",
    skillsLabel: "Skills",
    projectsTitle: "Projects",
    projectMyGabinete: "Platform for political offices: track demands, generate official letters, and follow budget amendments in one place.",
    projectZeus: "Marketing site for a strategic communication agency focused on political branding and reputation.",
    projectP1grid: "App where friends bet on Formula 1 races against each other, with calendar, live races, rankings, and chat.",
    visitSite: "Visit site",
    contactTitle: "Contact",
    availability: "Open to freelance",
    contactBody: "Have a product idea or need a Rails developer? Send a message, reach me on <a href=\"https://www.linkedin.com/in/felipe-imbimbo-og/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>, or chat on <a href=\"https://wa.me/5511915836025\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    placeholderName: "Your name...",
    placeholderEmail: "Your email...",
    placeholderMessage: "Write something...",
    sendMessage: "Send message"
  },
  pt: {
    pageTitle: "Felipe Imbimbo | Desenvolvedor full-stack",
    pageDescription: "Felipe Imbimbo é um desenvolvedor full-stack que cria produtos web com Ruby on Rails, inclusive integrações bancárias. Aberto a trabalhos freelance.",
    openMenu: "Abrir menu",
    backToTop: "Voltar ao topo",
    navHome: "Início",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navContact: "Contato",
    heroKicker: "Desenvolvedor full-stack",
    heroPitch: "Desenvolvo aplicações web prontas para produção com Ruby on Rails, com foco em plataformas SaaS, automação de processos, APIs e back-ends escaláveis.",
    viewProjects: "Ver projetos",
    contactMe: "WhatsApp",
    aboutTitle: "Sobre",
    aboutBody: "Ex-<b>desenvolvedor mobile</b> que virou full-stack. Desenvolvo produtos web e plataformas <b>SaaS</b> do zero, usando <b>Ruby on Rails</b>, Hotwire e JavaScript moderno. Tenho experiência com integrações <b>bancárias</b>, emissão de notas fiscais, APIs e sistemas de gestão, sempre com foco em soluções robustas, escaláveis e de rápida entrega.",
    skillsLabel: "Habilidades",
    projectsTitle: "Projetos",
    projectMyGabinete: "Plataforma para gabinetes políticos: acompanhe demandas, gere ofícios e acompanhe emendas em um só lugar.",
    projectZeus: "Site de marketing para uma agência de comunicação estratégica focada em branding político e reputação.",
    projectP1grid: "App onde amigos apostam em corridas de Fórmula 1 entre si, com calendário, ao vivo, ranking e chat.",
    visitSite: "Visitar site",
    contactTitle: "Contato",
    availability: "Aberto a freelance",
    contactBody: "Tem uma ideia de produto ou precisa de um desenvolvedor Rails? Envie uma mensagem, me encontre no <a href=\"https://www.linkedin.com/in/felipe-imbimbo-og/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>, ou fale no <a href=\"https://wa.me/5511915836025\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
    labelName: "Nome",
    labelEmail: "E-mail",
    labelMessage: "Mensagem",
    placeholderName: "Seu nome...",
    placeholderEmail: "Seu e-mail...",
    placeholderMessage: "Escreva algo...",
    sendMessage: "Enviar mensagem"
  }
};

function getPreferredLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "pt") return saved;
  const browser = (navigator.language || "en").toLowerCase();
  return browser.startsWith("pt") ? "pt" : "en";
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.title = dict.pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key] != null) el.setAttribute("value", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const lang = getPreferredLang();
  setLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
