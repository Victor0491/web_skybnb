from django.shortcuts import render
from rest_framework import generics
from .models import Usuario, Rol ,TipoAlojamiento,PerfilUsuario,Actividades,Ubicacion,Servicios,Alojamiento
from .serializers import UsuarioSerializers,RolesSerializers,TipoAlojamientoSerializers, PerfilUsuarioSerializers
from .serializers import UbicacionSerializers,ActividadSerializers,ServiciosSerializers,AlojamientoSerializers
from .serializers import GetPerfilUsuarioSerializers, GetAlojamientoSerializers


# Create your views here.

#----------------------SERVICIOS--------------------------

class ServiciosCreateView(generics.CreateAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializers

#---------------------ACTIVIDAD----------------------------
class ActividadCreateView(generics.CreateAPIView):
    queryset = Actividades.objects.all()
    serializer_class = ActividadSerializers

class ActividadList(generics.ListAPIView):
    queryset = Actividades.objects.all()
    serializer_class = ActividadSerializers



#--------------------UBICACION---------------------------------------

class UbicacionCreateView(generics.CreateAPIView):
    queryset = Ubicacion.objects.all()
    serializer_class = UbicacionSerializers

class UbicacionList(generics.ListAPIView):
    queryset = Ubicacion.objects.all()
    serializer_class = UbicacionSerializers


#------------------------TIPO-ALOJAMIENTO--------------------------------

class TipoAlojamientoCreateView(generics.CreateAPIView):
    queryset = TipoAlojamiento.objects.all()
    serializer_class = TipoAlojamientoSerializers

class TipoAlojamientoList(generics.ListAPIView):
    queryset = TipoAlojamiento.objects.all()
    serializer_class = TipoAlojamientoSerializers


#-----------------------ROL CREATE-------------------------------

class RolCreateView(generics.CreateAPIView):
    queryset = Rol.objects.all()
    serializer_class = RolesSerializers


#-----------------------USUARIO----------------------


class UsuarioCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers

#------------------------PERFIL USUARIO--------------------------------

class PerfilUsuarioCreateView(generics.CreateAPIView):
    queryset = PerfilUsuario.objects.all()
    serializer_class = PerfilUsuarioSerializers

#GET ID
class PerfilUsuarioDetail(generics.RetrieveAPIView):
    queryset = PerfilUsuario.objects.all()
    serializer_class = GetPerfilUsuarioSerializers
    lookup_field = 'usuario_id'

#----------------------Alojamiento----------------------------------------

class AlojamientoCreateView(generics.CreateAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = AlojamientoSerializers

class GetAlojamiento(generics.ListAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = GetAlojamientoSerializers