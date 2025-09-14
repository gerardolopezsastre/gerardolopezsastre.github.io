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

Mi trabajo se centra en historia de la filosofía moderna, filosofía moral y política, y filosofía comparada. Dentro de estos campos he prestado especial atención al pensamiento escocés y británico (con énfasis en David Hume y John Stuart Mill), a la obra de Ortega y Gasset, y a los diálogos comparados con tradiciones de la China clásica.

Me doctore en la Universidad Complutense de Madrid (1990), habiendo completado estancias de investigacion y ensenaza en Reino Unido, Italia, Estados Unidos y en el Centro de Estudios Asiáticos de la Universidad de Hong Kong.

### Libros

En el ámbito de la divulgación filosófica, soy autor de [Hume: Saber ser escéptico](https://shackletonbooks.com/libros/pensadores/hume/) y de [John Stuart Mill: El utilitarismo que cambiaría el mundo](https://shackletonbooks.com/libros/pensadores/john-stuart-mill/). Estas obras se han traducido al italiano, polaco, rumano y griego. 

Entre mis trabajos académicos, he coordinado [David Hume: nuevas perspectivas sobre su obra](https://dialnet.unirioja.es/servlet/libro?codigo=7734); he coeditado junto a Vicente Sanfélix [Cosmopolitismo y nacionalismo. De la Ilustración al mundo contemporáneo](https://dialnet.unirioja.es/servlet/libro?codigo=438961); y, con María José Villaverde, [Civilizados y salvajes. La mirada de los ilustrados sobre el mundo no europeo](https://dialnet.unirioja.es/servlet/libro?codigo=751362). Asimismo, he traducido [Tres ensayos sobre la religión](https://dialnet.unirioja.es/servlet/libro?codigo=755961) (John Stuart Mill), [Investigación sobre los principios de la moral](https://dialnet.unirioja.es/servlet/libro?codigo=323447) (David Hume), y [Tres diálogos entre Hilas y Filonús](https://dialnet.unirioja.es/servlet/libro?codigo=182666) (George Berkeley).


<div class="projects">
  {% assign selected_projects = site.projects | where_exp: 'p', 'p.title == "Hume: Saber ser escéptico" or p.title == "John Stuart Mill: El utilitarismo que cambiaría el mundo" or p.title == "Las luces del progreso y la conciencia de la Modernidad (ed.)" or p.title == "Cosmopolitismo y nacionalismo: De la Ilustración al mundo contemporáneo (ed.)"' %}
  {% assign sorted_projects = selected_projects | sort: 'importance' %}
  <div class="row row-cols-1 row-cols-md-4">
    {% for project in sorted_projects %}
      {% include projects.liquid only_image=true sizes="180px" %}
    {% endfor %}
  </div>
</div>


bundle exec jekyll serve --lsi
