---
layout: about
title: Sobre mi
permalink: /
subtitle: Catedrático de Filosofía, Facultad de Humanidades de Toledo (UCLM)

profile:
  align: right
  image: gerardo_lopez_sastre.jpg
  image_circular: true # crops the image to make it circular

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 5 # leave blank to include all the blog posts
---

Mi trabajo se centra en el estudio la filosofía moderna, filosofía moral y política, y de la filosofía comparada. Dentro de estos campos he prestado especial atención al pensamiento británico (con énfasis en David Hume y John Stuart Mill), a la obra de Ortega y Gasset, y al diálogo con las tradiciones de la China clásica.

Me doctoré en la Universidad Complutense de Madrid (1990), habiendo desarollado estancias de investigación y enseñanza en Reino Unido, Italia, Estados Unidos, Argentina y Hong Kong.

### Libros

Soy autor de [Hume. Saber ser escéptico](https://shackletonbooks.com/libros/pensadores/hume/) y de [John Stuart Mill. El utilitarismo que cambiaría el mundo](https://shackletonbooks.com/libros/pensadores/john-stuart-mill/). Estas obras se han traducido al italiano, al portugués, al polaco, al hungaro, al rumano y al griego.

Entre mis trabajos académicos, he coordinado [David Hume: nuevas perspectivas sobre su obra](https://dialnet.unirioja.es/servlet/libro?codigo=7734); he coeditado junto a Vicente Sanfélix [Cosmopolitismo y nacionalismo. De la Ilustración al mundo contemporáneo](https://dialnet.unirioja.es/servlet/libro?codigo=438961); con María José Villaverde, [Civilizados y salvajes. La mirada de los ilustrados sobre el mundo no europeo](https://dialnet.unirioja.es/servlet/libro?codigo=751362); y con otros compañeros [Las luces del progreso y la conciencia de la Modernidad](https://www.tecnos.es/libro/biblioteca-de-historia-y-pensamiento-politico/las-luces-del-progreso-y-la-conciencia-de-la-modernidad-gerardo-lopez-sastre-9788430986712/). Asimismo, he traducido [Tres ensayos sobre la religión](https://dialnet.unirioja.es/servlet/libro?codigo=755961) (John Stuart Mill), [Investigación sobre los principios de la moral](https://dialnet.unirioja.es/servlet/libro?codigo=323447) (David Hume), y [Tres diálogos entre Hilas y Filonús](https://dialnet.unirioja.es/servlet/libro?codigo=182666) (George Berkeley).


<div class="projects">
  {% assign selected_projects = site.projects | where_exp: 'p', 'p.title == "Hume. Saber ser escéptico" or p.title == "John Stuart Mill. El utilitarismo que cambiaría el mundo" or p.title == "Las luces del progreso y la conciencia de la Modernidad (ed.)" or p.title == "Cosmopolitismo y nacionalismo: De la Ilustración al mundo contemporáneo (ed.)"' %}
  {% assign sorted_projects = selected_projects | sort: 'importance' %}
  <div class="row row-cols-1 row-cols-md-4">
    {% for project in sorted_projects %}
      {% include projects.liquid only_image=true sizes="180px" %}
    {% endfor %}
  </div>
</div>

