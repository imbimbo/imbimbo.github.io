const translations = {
  en: {
    pageTitle: "Felipe Imbimbo | Full-stack Developer",
    pageDescription: "Felipe Imbimbo is a full-stack developer building web products with Ruby on Rails. Open to freelance work.",
    openMenu: "Open menu",
    backToTop: "Back to top",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    heroKicker: "Full-stack developer",
    heroPitch: "I build web products with Ruby on Rails, from SaaS platforms to betting sites among friends.",
    viewProjects: "View projects",
    contactMe: "WhatsApp",
    aboutTitle: "About",
    aboutBody: "Former <b>mobile developer</b> turned full-stack. I help teams ship reliable web products and <b>SaaS</b> platforms like political ops tools, brand sites, and product experiments, with <b>Ruby on Rails</b> and modern JavaScript.",
    skillsLabel: "Skills",
    projectsTitle: "Projects",
    projectMyGabinete: "Platform for political offices: track demands, generate official letters, and follow budget amendments in one place.",
    projectZeus: "Marketing site for a strategic communication agency focused on political branding and reputation.",
    projectP1grid: "App where friends bet on Formula 1 races against each other, with calendar, live races, rankings, and chat.",
    visitSite: "Visit site",
    contactTitle: "Contact",
    availability: "Open to freelance",
    contactBody: "Have a product idea or need a Rails developer? Send a message, reach me on <a href=\"https://linkedin.com/in/felipe-imbimbo-575b4911b\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>, or chat on <a href=\"https://wa.me/5511915836025\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
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
    pageDescription: "Felipe Imbimbo é um desenvolvedor full-stack que cria produtos web com Ruby on Rails. Aberto a trabalhos freelance.",
    openMenu: "Abrir menu",
    backToTop: "Voltar ao topo",
    navHome: "Início",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navContact: "Contato",
    heroKicker: "Desenvolvedor full-stack",
    heroPitch: "Eu construo produtos web com Ruby on Rails, de plataformas SaaS a sites de apostas entre amigos.",
    viewProjects: "Ver projetos",
    contactMe: "WhatsApp",
    aboutTitle: "Sobre",
    aboutBody: "Ex-<b>desenvolvedor mobile</b> que virou full-stack. Ajudo times a entregar produtos web e plataformas <b>SaaS</b> confiáveis, como ferramentas para gabinetes políticos, sites de marca e experimentos de produto, com <b>Ruby on Rails</b> e JavaScript moderno.",
    skillsLabel: "Habilidades",
    projectsTitle: "Projetos",
    projectMyGabinete: "Plataforma para gabinetes políticos: acompanhe demandas, gere ofícios e acompanhe emendas em um só lugar.",
    projectZeus: "Site de marketing para uma agência de comunicação estratégica focada em branding político e reputação.",
    projectP1grid: "App onde amigos apostam em corridas de Fórmula 1 entre si, com calendário, ao vivo, ranking e chat.",
    visitSite: "Visitar site",
    contactTitle: "Contato",
    availability: "Aberto a freelance",
    contactBody: "Tem uma ideia de produto ou precisa de um desenvolvedor Rails? Envie uma mensagem, me encontre no <a href=\"https://linkedin.com/in/felipe-imbimbo-575b4911b\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a>, ou fale no <a href=\"https://wa.me/5511915836025\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
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
