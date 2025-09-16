// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre-mi",
    title: "Sobre mi",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-libros",
          title: "Libros",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/libros/";
          },
        },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publicaciones/";
          },
        },{id: "post-reflexiones-filosoficas",
        
          title: "Reflexiones filosoficas",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/blog-prueba/";
          
        },
      },{id: "post-este-es-mi-primer-post",
        
          title: "Este es mi primer post",
        
        description: "buenas tardes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hola/";
          
        },
      },{id: "projects-hume-investigación-sobre-los-principios-de-la-moral-trad",
          title: 'Hume: Investigación sobre los principios de la moral (trad.)',
          description: "Espasa Calpe",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_investigacion_moral_portada/";
            },},{id: "projects-hume-saber-ser-escéptico",
          title: 'Hume. Saber ser escéptico',
          description: "Shackleton Books",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_hume_shackleton/";
            },},{id: "projects-john-stuart-mill-el-utilitarismo-que-cambiaría-el-mundo",
          title: 'John Stuart Mill. El utilitarismo que cambiaría el mundo',
          description: "Shackleton Books",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_mill_shackleton/";
            },},{id: "projects-las-luces-del-progreso-y-la-conciencia-de-la-modernidad-ed",
          title: 'Las luces del progreso y la conciencia de la Modernidad (ed.)',
          description: "Tecnos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_luces/";
            },},{id: "projects-cosmopolitismo-y-nacionalismo-de-la-ilustración-al-mundo-contemporáneo-ed",
          title: 'Cosmopolitismo y nacionalismo: De la Ilustración al mundo contemporáneo (ed.)',
          description: "PUV",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_cosmopolitismo/";
            },},{id: "projects-civilizados-y-salvajes-la-mirada-de-los-ilustrados-sobre-el-mundo-no-europeo-ed",
          title: 'Civilizados y salvajes. La mirada de los ilustrados sobre el mundo no europeo...',
          description: "CEPC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_civilizados/";
            },},{id: "projects-hume-investigación-sobre-el-conocimiento-humano-investigación-sobre-los-principios-de-la-moral-trad",
          title: 'Hume: Investigación sobre el conocimiento humano. Investigación sobre los principios de la moral...',
          description: "Tecnos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_hume_investigacion/";
            },},{id: "projects-js-mill-tres-ensayos-sobre-la-religión-trad",
          title: 'JS Mill: Tres ensayos sobre la religión (trad.)',
          description: "Trotta",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_mill_tres/";
            },},{id: "projects-hume-nuevas-perspectivas",
          title: 'Hume: Nuevas perspectivas',
          description: "UCLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_hume_obra%20copy/";
            },},{id: "projects-hume-nuevas-perspectivas",
          title: 'Hume: Nuevas perspectivas',
          description: "UCLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_hume_obra/";
            },},{id: "projects-berkeley-tres-diálogos-entre-hilas-y-filonús",
          title: 'Berkeley: Tres diálogos entre Hilas y Filonús',
          description: "Espasa Calpe",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_tres_dialogos_portada/";
            },},{
        id: 'social-academia_edu',
        title: 'Academia_edu',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%65%72%61%72%64%6F.%6C%6F%70%65%7A@%75%63%6C%6D.%65%73", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1bR-JeEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
