from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Usuario, Rol ,TipoAlojamiento,PerfilUsuario,Actividades,Ubicacion,Servicios,Alojamiento,Reserva
from .serializers import UsuarioSerializers,RolesSerializers,TipoAlojamientoSerializers, PerfilUsuarioSerializers
from .serializers import UbicacionSerializers,ActividadSerializers,ServiciosSerializers,AlojamientoSerializers
from .serializers import GetPerfilUsuarioSerializers, GetAlojamientoSerializers, GetDetailsAlojamientoSerializers,ReservaSerializers,ReservaListSerializers


# Create your views here.

#------------------------Register--Login-------------------------------------------
class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UsuarioSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful', 'user_id': user.id}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

#----------------------SERVICIOS--------------------------

class ServiciosList(generics.ListAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializers

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

class GetDetailsAlojamiento(generics.RetrieveAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = GetDetailsAlojamientoSerializers

#----------------------------------------------------------------------------

class ReservaCreateView(generics.CreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializers

class ReservaListUser(generics.ListAPIView):
    queryset = Reserva
    serializer_class = ReservaListSerializers

    def get_queryset(self):
        usuario_id = self.kwargs['usuario_id']
        return Reserva.objects.filter(usuario__id=usuario_id)
