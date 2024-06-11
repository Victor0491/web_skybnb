from rest_framework import serializers
from .models import Usuario, Rol, TipoAlojamiento,Actividades,Ubicacion, PerfilUsuario, Servicios, Alojamiento,Reserva


class ServiciosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Servicios
        fields = '__all__'

class UbicacionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = '__all__'

class ActividadSerializers(serializers.ModelSerializer):
    class Meta:
        model = Actividades
        fields = '__all__'

class TipoAlojamientoSerializers(serializers.ModelSerializer):
    class Meta:
        model = TipoAlojamiento
        fields = ['id','nombre','image']

class RolesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class UsuarioSerializers(serializers.ModelSerializer):
    roles = serializers.PrimaryKeyRelatedField(queryset=Rol.objects.all(), many=True)

    class Meta:
        model = Usuario
        fields = ['email', 'password','roles']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        roles_data = validated_data.pop('roles', [])
        usuario = Usuario.objects.create(**validated_data)
        if 'password' in validated_data:
            usuario.set_password(validated_data['password'])    
        usuario.roles.clear()
        for rol in roles_data:
            usuario.roles.add(rol)
        usuario.save()
        return usuario

    def update(self, instance, validated_data):
        roles_data = validated_data.pop('roles', [])
        instance.email = validated_data.get('email', instance.email)
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        instance.save()

        instance.roles.clear()
        for rol in roles_data:
            instance.roles.add(rol)
       
        return instance


class PerfilUsuarioSerializers(serializers.ModelSerializer):
    usuario = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all())
    actividades = serializers.PrimaryKeyRelatedField(queryset=Actividades.objects.all(), many=True)
    ubicacion = serializers.PrimaryKeyRelatedField(queryset=Ubicacion.objects.all(), many=True)
    tipoalojamiento = serializers.PrimaryKeyRelatedField(queryset=TipoAlojamiento.objects.all(), many=True)

    class Meta:
        model = PerfilUsuario
        fields = ['nombreCompleto','fecha_nacimiento', 'usuario', 'telefono','actividades','ubicacion','tipoalojamiento']

    def create(self, validated_data):
        usuario_data = validated_data.pop('usuario')
        actividades_data = validated_data.pop('actividades', [])
        ubicacion_data = validated_data.pop('ubicacion', [])
        tipoalojamiento_data = validated_data.pop('tipoalojamiento', [])
        perfilusuario = PerfilUsuario.objects.create(**validated_data)
        perfilusuario.usuario = usuario_data
        perfilusuario.actividades.clear()
        perfilusuario.ubicacion.clear()
        perfilusuario.tipoalojamiento.clear()
        for actividad in actividades_data:
            perfilusuario.actividades.add(actividad)
        for ubicacion in ubicacion_data:
            perfilusuario.ubicacion.add(ubicacion)
        for tipoalojamiento in tipoalojamiento_data:
            perfilusuario.tipoalojamiento.add(tipoalojamiento)
        perfilusuario.save()
        return perfilusuario


class AlojamientoSerializers(serializers.ModelSerializer):
    usuario = serializers.PrimaryKeyRelatedField(queryset=PerfilUsuario.objects.all())
    tipoalojamiento = serializers.PrimaryKeyRelatedField(queryset=TipoAlojamiento.objects.all())
    actividades = serializers.PrimaryKeyRelatedField(queryset=Actividades.objects.all(), many=True)
    servicios = serializers.PrimaryKeyRelatedField(queryset=Servicios.objects.all(), many=True)
    ubicacion = serializers.PrimaryKeyRelatedField(queryset=Ubicacion.objects.all())
    

    class Meta:
        model = Alojamiento
        fields = ['nombre','direccion','dormitorios','banos','huespedes','mascotas','usuario','precio','estado_destacado','tipoalojamiento','ubicacion','actividades','servicios']
    
    def create(self, validated_data):
        usuario_data = validated_data.pop('usuario')
        ubicacion_data = validated_data.pop('ubicacion')
        tipoalojamiento_data = validated_data.pop('tipoalojamiento')
        actividades_data = validated_data.pop('actividades', [])
        servicios_data = validated_data.pop('servicios', [])
        alojamiento = Alojamiento.objects.create(**validated_data)
        alojamiento.usuario = usuario_data
        alojamiento.ubicacion = ubicacion_data
        alojamiento.tipoalojamiento = tipoalojamiento_data
        alojamiento.actividades.clear()
        alojamiento.servicios.clear()
        for actividad in actividades_data:
            alojamiento.actividades.add(actividad)
        for servicio in servicios_data:
            alojamiento.servicios.add(servicio)
        alojamiento.save()
        return alojamiento
    
class GetAlojamientoSerializers(serializers.ModelSerializer):
    tipoalojamiento = TipoAlojamientoSerializers()

    
    class Meta:
        model = Alojamiento
        fields = ['nombre','precio','estado_destacado','tipoalojamiento']


class GetDetailsAlojamientoSerializers(serializers.ModelSerializer):
    usuario = PerfilUsuarioSerializers(read_only='True')
    ubicacion = UbicacionSerializers(read_only='True')
    actividades = ActividadSerializers(many=True)
    servicios = ServiciosSerializers(many=True)
    tipoalojamiento = TipoAlojamientoSerializers(read_only='True')
 
    class Meta:
        model = Alojamiento
        fields = ['nombre','direccion','dormitorios','banos','huespedes','mascotas','usuario','precio','estado_destacado','tipoalojamiento','ubicacion','actividades','servicios']


class ReservaSerializers(serializers.ModelSerializer):
    usuario = serializers.PrimaryKeyRelatedField(queryset=PerfilUsuario.objects.all())
    alojamiento = serializers.PrimaryKeyRelatedField(queryset=Alojamiento.objects.all())

    class Meta:
        model = Reserva
        fields = ['usuario','alojamiento','fecha_inicio','fecha_fin','total']

    def create(self, validated_data):
        usuario_data = validated_data.pop('usuario')
        alojamiento_data = validated_data.pop('alojamiento')
        reserva = Reserva.objects.create(**validated_data)
        reserva.usuario = usuario_data
        reserva.alojamiento = alojamiento_data
        reserva.save()
        return reserva
    
class ReservaListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['id', 'usuario', 'alojamiento', 'fecha_inicio', 'fecha_fin', 'total']
    
class GetPerfilUsuarioSerializers(serializers.ModelSerializer):

    cuenta = UsuarioSerializers(source='usuario')
    actividades = ActividadSerializers(many=True)
    ubicacion = UbicacionSerializers(many=True)
    tipoalojamiento = TipoAlojamientoSerializers(many=True)
    alojamientos = AlojamientoSerializers(many=True)
    reservas = ReservaListSerializers(many=True)
    

    class Meta:
        model = PerfilUsuario
        fields = ['nombreCompleto','fecha_nacimiento','cuenta', 'telefono','actividades', 'ubicacion', 'tipoalojamiento','alojamientos','reservas']

