page.base('');

page('/', homeController.index);
page('/projects', projectsController.index);
page('/about', aboutController.index);
page('/contact', contactController.index);

page();
