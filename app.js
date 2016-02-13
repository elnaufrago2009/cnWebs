var app = angular.module('cnWebs', [
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'infinite-scroll'
  ]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider

  //  inicio
  // =======================================================================================
  .state('inicio', {
    url: '/',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'inicio/index.html', controller: 'inicioCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('inicio_admin', {
    url: '/inicio_admin',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'inicio/inicio_admin/index.html', controller: 'inicioIndexAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('inicio_admin_editar', {
    url: '/inicio_admin/editar',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'inicio/inicio_admin/editar.html', controller: 'inicioEditarAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  // BLOG
  // =======================================================================================
  .state('blog', {
    url: '/blog',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/index.html', controller: 'blogCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('blog_ver', {
    url: '/blog/:id',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/ver.html', controller: 'blogVerCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('blog_admin', {
    url: '/blog_admin',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/blog_admin/index.html', controller: 'blogsIndexAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('blog_admin_nuevo', {
    url: '/blog_admin/nuevo',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/blog_admin/nuevo.html', controller: 'blogsNuevoAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('blog_admin_ver', {
    url: '/blog_admin/ver/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/blog_admin/ver.html', controller: 'blogsVerAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('blog_admin_editar', {
    url: '/blog_admin/editar/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'blog/blog_admin/editar.html', controller: 'blogsEditarAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })



  // PRECIOS
  // =======================================================================================
  .state('precios', {
    url: '/precios',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'precios/index.html', controller: 'preciosCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('precios_admin', {
    url: '/precios_admin',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'precios/precios_admin/index.html', controller: 'preciosIndexAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('precios_admin_nuevo', {
    url: '/precios_admin/nuevo',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'precios/precios_admin/nuevo.html', controller: 'preciosNuevoAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('precios_admin_ver', {
    url: '/precios_admin/ver/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'precios/precios_admin/ver.html', controller: 'preciosVerAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('precios_admin_editar', {
    url: '/precios_admin/editar/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'precios/precios_admin/editar.html', controller: 'preciosEditarAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  // PORTAFOLIO
  // =======================================================================================
  .state('portafolio', {
    url: '/portafolio',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/index.html', controller: 'portafolioCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })  
  .state('portafolio_ver', {
    url: '/portafolio/:id',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/ver.html', controller: 'portafolioVerCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('portafolio_admin_index', {
    url: '/portafolio_admin',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/portafolio_admin/index.html', controller: 'portafolioIndexAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('portafolio_admin_nuevo', {
    url: '/portafolio_admin/nuevo',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/portafolio_admin/nuevo.html', controller: 'portafolioNuevoAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('portafolio_admin_ver', {
    url: '/portafolio_admin/ver/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/portafolio_admin/ver.html', controller: 'portafolioVerAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }
    }
  })
  .state('portafolio_admin_editar', {
    url: '/portafolio_admin/editar/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'portafolio/portafolio_admin/editar.html', controller: 'portafolioEditarAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }
    }
  })


  // EQUIPO
  // =======================================================================================
  .state('equipo', {
    url: '/equipo',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/index.html', controller: 'equipoCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })  
  .state('equipo_ver', {
    url: '/equipo/:id',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/ver.html', controller: 'equipoVerCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('quienes_somos', {
    url: '/quienes_somos',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/quienes_somos.html', controller: 'quienesSomosIndexCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  .state('login', {
    url: '/login',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'login/index.html', controller: 'loginCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  .state('registrar', {
    url: '/registrar',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'login/registrar.html', controller: 'registrarCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  .state('mensajes', {
    url: '/mensajes',
    views: {
      'header': { templateUrl: 'layout/header.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'mensajes/index.html', controller: 'mensajesCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  

  

  

  .state('equipo_admin', {
    url: '/equipo_admin',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/equipo_admin/index.html', controller: 'equipoIndexAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('equipo_admin_nuevo', {
    url: '/equipo_admin/nuevo',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/equipo_admin/nuevo.html', controller: 'equipoNuevoAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('equipo_admin_editar', {
    url: '/equipo_admin/editar/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/equipo_admin/editar.html', controller: 'equipoEditarAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })
  .state('equipo_admin_ver', {
    url: '/equipo_admin/ver/:id',
    views: {
      'header': { templateUrl: 'layout/header_admin.html', controller: 'menuCtrl' },
      'contenido': { templateUrl: 'equipo/equipo_admin/ver.html', controller: 'equipoVerAdminCtrl' },
      'footer': { templateUrl: 'layout/footer.html' }      
    }
  })

  


});