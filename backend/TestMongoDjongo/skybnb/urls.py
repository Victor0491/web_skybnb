from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
   path('register', views.UsuarioCreateView.as_view(), name='usuario-create'),

   path('create-rol', views.RolCreateView.as_view(), name='rol-create'),
   path('create-tipo-alojamiento', views.TipoAlojamientoCreateView.as_view(), name='rol-tipo-alojamiento'),
   path('create-perfil-usuario', views.PerfilUsuarioCreateView.as_view(), name='perfil-usuario'),
   path('create-actividad', views.ActividadCreateView.as_view(), name='actividad-create'),
   path('create-ubicacion', views.UbicacionCreateView.as_view(), name='ubicacion-create'),
   path('create-servicios', views.ServiciosCreateView.as_view(), name='servicios-create'),
   path('create-alojamiento', views.AlojamientoCreateView.as_view(), name='alojamiento-create'),


   path('perfilusuario/<int:usuario_id>/', views.PerfilUsuarioDetail.as_view(), name='detail-user'),

   path('list-actividades', views.ActividadList.as_view(), name='list-actividad'),
   path('list-ubicacion', views.UbicacionList.as_view(), name='list-ubicacion'),
   path('list-tipo-alojamiento', views.TipoAlojamientoList.as_view(), name='list-tipo-alojamiento'),
   path('list-alojamiento', views.GetAlojamiento.as_view(), name='list-alojamiento'),

]