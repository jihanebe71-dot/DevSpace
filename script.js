// DevSpace — language switcher and mobile navigation
const translations = {
  en: {
    navHome:"Home", navAbout:"About", navSkills:"Skills", navProjects:"Projects", navContact:"Contact", letsTalk:"Let's talk",
    available:"AVAILABLE FOR OPPORTUNITIES", hello:"Hello, I'm", role:"Full-Stack Developer",
    heroDescription:"I build clean, responsive and user-friendly digital experiences. I turn ideas into useful products with code and creativity.",
    viewWork:"Explore my work", contactMe:"Contact me", yearsLearning:"Years learning", projectsBuilt:"Projects to build", languages:"Languages",
    aboutLabel:"GET TO KNOW ME", aboutTitle:"A little about me.", aboutCardTitle:"Curious by nature. Developer by passion.",
    aboutText:"I'm a passionate developer who enjoys learning, solving problems and creating digital experiences. I focus on writing understandable code and building interfaces that work smoothly on every screen.",
    quote:"Every great product starts with a simple idea and the courage to build it.", quoteAuthor:"MY DEVELOPMENT PHILOSOPHY",
    skillsLabel:"WHAT I WORK WITH", skillsTitle:"My toolbox.", skillsSubtitle:"The technologies and tools I use to bring ideas to life.",
    htmlDesc:"Semantic structure", cssDesc:"Responsive styling", jsDesc:"Interactive experiences", gitDesc:"Version control",
    projectsLabel:"SELECTED WORK", projectsTitle:"Featured projects.", projectOne:"Personal Portfolio", projectOneDesc:"A responsive space to introduce myself and showcase my work.",
    projectTwo:"Analytics Dashboard", projectTwoDesc:"A clean dashboard concept focused on layout and readability.",
    projectThree:"Weather Widget", projectThreeDesc:"A small interface concept exploring interactive components.",
    projectLink:"Discuss a similar project ↗", projectDisclaimer:"Note: These are portfolio concepts. Replace them with your completed projects and real GitHub links before publishing.",
    contactLabel:"HAVE A PROJECT IN MIND?", contactTitle:"Let's create something meaningful.",
    contactDescription:"Have an idea, a question or an opportunity? I'd be happy to hear from you.",
    footer:"Built with curiosity and code.", backTop:"Back to top ↑"
  },
  fr: {
    navHome:"Accueil", navAbout:"À propos", navSkills:"Compétences", navProjects:"Projets", navContact:"Contact", letsTalk:"Discutons",
    available:"DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS", hello:"Bonjour, je suis", role:"Développeur Full-Stack",
    heroDescription:"Je crée des expériences numériques propres, responsives et faciles à utiliser. Je transforme les idées en produits utiles grâce au code et à la créativité.",
    viewWork:"Découvrir mes projets", contactMe:"Me contacter", yearsLearning:"Année d'apprentissage", projectsBuilt:"Projets à réaliser", languages:"Langues",
    aboutLabel:"APPRENEZ À ME CONNAÎTRE", aboutTitle:"Un peu à propos de moi.", aboutCardTitle:"Curieux par nature. Développeur par passion.",
    aboutText:"Je suis un développeur passionné par l'apprentissage, la résolution de problèmes et la création d'expériences numériques. Je privilégie un code clair et des interfaces fluides sur tous les écrans.",
    quote:"Chaque grand produit commence par une idée simple et le courage de la réaliser.", quoteAuthor:"MA PHILOSOPHIE DE DÉVELOPPEMENT",
    skillsLabel:"MES OUTILS", skillsTitle:"Ma boîte à outils.", skillsSubtitle:"Les technologies et outils que j'utilise pour donner vie aux idées.",
    htmlDesc:"Structure sémantique", cssDesc:"Styles responsives", jsDesc:"Expériences interactives", gitDesc:"Gestion de versions",
    projectsLabel:"TRAVAUX SÉLECTIONNÉS", projectsTitle:"Projets à la une.", projectOne:"Portfolio personnel", projectOneDesc:"Un espace responsive pour me présenter et montrer mes réalisations.",
    projectTwo:"Tableau de bord analytique", projectTwoDesc:"Un concept de tableau de bord clair, axé sur la mise en page et la lisibilité.",
    projectThree:"Widget météo", projectThreeDesc:"Un petit concept d'interface pour explorer les composants interactifs.",
    projectLink:"Parlons d'un projet similaire ↗", projectDisclaimer:"Remarque : ce sont des concepts de portfolio. Remplacez-les par vos projets terminés et vos vrais liens GitHub avant publication.",
    contactLabel:"UN PROJET EN TÊTE ?", contactTitle:"Créons quelque chose qui a du sens.",
    contactDescription:"Une idée, une question ou une opportunité ? Je serais ravi d'en discuter.",
    footer:"Créé avec curiosité et du code.", backTop:"Retour en haut ↑"
  }
};

const languageToggle = document.querySelector("#languageToggle");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  languageToggle.textContent = language === "en" ? "FR" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "Passer en français" : "Switch to English");
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "fr" : "en");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage("en");
