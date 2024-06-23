from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Usuario, Rol ,TipoAlojamiento,PerfilUsuario,Actividades,Ubicacion,Servicios,Alojamiento,Reserva
from .serializers import UsuarioSerializers,RolesSerializers,TipoAlojamientoSerializers, PerfilUsuarioSerializers
from .serializers import UbicacionSerializers,ActividadSerializers,ServiciosSerializers,AlojamientoSerializers,ImagenAlojamientoSerializer
from .serializers import GetPerfilUsuarioSerializers, GetAlojamientoSerializers, GetDetailsAlojamientoSerializers,ReservaSerializers,ReservaListSerializers


# Create your views here.

#------------------------Register--Login-------------------------------------------
class RegisterAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UsuarioSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            refresh['roles'] = [role.id for role in user.roles.all()]

            return Response({
                'message': 'User registered successfully',
                'accessToken': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

#----------------------SERVICIOS--------------------------

class ServiciosList(generics.ListAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializers
    permission_classes = [AllowAny]

class ServiciosCreateView(generics.CreateAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializers
    permission_classes = [AllowAny]

#---------------------ACTIVIDAD----------------------------
class ActividadCreateView(generics.CreateAPIView):
    queryset = Actividades.objects.all()
    serializer_class = ActividadSerializers
    permission_classes = [AllowAny]

class ActividadList(generics.ListAPIView):
    queryset = Actividades.objects.all()
    serializer_class = ActividadSerializers
    permission_classes = [AllowAny]



#--------------------UBICACION---------------------------------------

class UbicacionCreateView(generics.CreateAPIView):
    queryset = Ubicacion.objects.all()
    serializer_class = UbicacionSerializers
    permission_classes = [AllowAny]

class UbicacionList(generics.ListAPIView):
    queryset = Ubicacion.objects.all()
    serializer_class = UbicacionSerializers
    permission_classes = [AllowAny]


#------------------------TIPO-ALOJAMIENTO--------------------------------

class TipoAlojamientoCreateView(generics.CreateAPIView):
    queryset = TipoAlojamiento.objects.all()
    serializer_class = TipoAlojamientoSerializers
    permission_classes = [AllowAny]

class TipoAlojamientoList(generics.ListAPIView):
    queryset = TipoAlojamiento.objects.all()
    serializer_class = TipoAlojamientoSerializers
    permission_classes = [AllowAny]


#-----------------------ROL CREATE-------------------------------

class RolCreateView(generics.CreateAPIView):
    queryset = Rol.objects.all()
    serializer_class = RolesSerializers
    permission_classes = [AllowAny]


#-----------------------USUARIO----------------------


class UsuarioCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers
    permission_classes = [AllowAny]

#------------------------PERFIL USUARIO--------------------------------

class PerfilUsuarioCreateView(generics.CreateAPIView):
    queryset = PerfilUsuario.objects.all()
    serializer_class = PerfilUsuarioSerializers
    permission_classes = [AllowAny]

#GET ID
class PerfilUsuarioDetail(generics.RetrieveAPIView):
    queryset = PerfilUsuario.objects.all()
    serializer_class = GetPerfilUsuarioSerializers
    lookup_field = 'usuario_id'
    permission_classes = [IsAuthenticated]

class PerfilUsuarioUpdateAPIView(generics.UpdateAPIView):
    queryset = PerfilUsuario.objects.all()
    serializer_class = PerfilUsuarioSerializers
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Asume que el perfil pertenece al usuario autenticado
        return self.request.user.perfil
#----------------------Alojamiento----------------------------------------

class AlojamientoCreateView(generics.CreateAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = AlojamientoSerializers
    permission_classes = [AllowAny]

class GetAlojamiento(generics.ListAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = GetAlojamientoSerializers
    permission_classes = [AllowAny]

class GetDetailsAlojamiento(generics.RetrieveAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = GetDetailsAlojamientoSerializers
    permission_classes = [AllowAny]


class AlojamientoViewSet(generics.CreateAPIView):
    queryset = Alojamiento.objects.all()
    serializer_class = ImagenAlojamientoSerializer
    permission_classes = [AllowAny]
#----------------------------------------------------------------------------

class ReservaCreateView(generics.CreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializers
    permission_classes = [AllowAny]

class ReservaListUser(generics.ListAPIView):
    queryset = Reserva
    serializer_class = ReservaListSerializers
    permission_classes = [AllowAny]

    def get_queryset(self):
        usuario_id = self.kwargs['usuario_id']
        return Reserva.objects.filter(usuario__id=usuario_id)
