from djongo import models
from django.contrib.auth.models import AbstractUser
from .managers import UsuarioManager


# Create your models here.

class Servicios(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Actividades(models.Model):
    nombre = models.CharField(max_length=100)
    image = models.CharField(max_length=250)

    def __str__(self):
        return self.nombre

class Ubicacion(models.Model):
    nombre = models.CharField(max_length=100)
    image = models.CharField(max_length=250)

    def __str__(self):
        return self.nombre

class TipoAlojamiento(models.Model):
    nombre = models.CharField(max_length=100)
    image = models.CharField(max_length=250)

    def __str__(self):
        return self.nombre

class Rol(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    
class Usuario(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    roles = models.ArrayReferenceField(
        to='Rol',
        on_delete=models.CASCADE
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UsuarioManager()

    def __str__(self):
        return self.email


class PerfilUsuario(models.Model):
    nombreCompleto = models.CharField(max_length=255,blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='perfil')
    telefono = models.CharField(max_length=20,blank=True, null=True)
    actividades = models.ArrayReferenceField(
        to='Actividades',
        on_delete=models.CASCADE
    )
    ubicacion = models.ArrayReferenceField(
        to='Ubicacion',
        on_delete=models.CASCADE
    )
    tipoalojamiento = models.ArrayReferenceField(
        to='TipoAlojamiento',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.nombreCompleto

class imagenAlojamiento(models.Model):
    alojamiento = models.OneToOneField('Alojamiento', on_delete=models.CASCADE, related_name='imagenes')
    image1 = models.TextField(blank=True, null=True)
    image2 = models.TextField(blank=True, null=True)
    image3 = models.TextField(blank=True, null=True)
    image4 = models.TextField(blank=True, null=True)
    image5 = models.TextField(blank=True, null=True)
    image6 = models.TextField(blank=True, null=True)
    image7 = models.TextField(blank=True, null=True)
    image8 = models.TextField(blank=True, null=True)
    image9 = models.TextField(blank=True, null=True)
    image10 = models.TextField(blank=True, null=True)
    image11 = models.TextField(blank=True, null=True)
    image12 = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Imagen de {self.alojamiento.nombre}"


class Alojamiento(models.Model):
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    descripcion = models.TextField()
    dormitorios = models.IntegerField()
    banos = models.IntegerField()
    huespedes = models.IntegerField()
    mascotas = models.BooleanField()
    precio = models.IntegerField()
    estado_destacado = models.BooleanField()
    usuario = models.ForeignKey(PerfilUsuario, on_delete=models.CASCADE,  related_name='alojamientos' )
    tipoalojamiento = models.ForeignKey(TipoAlojamiento, on_delete=models.CASCADE, related_name='tipo')
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.CASCADE, related_name='ubicacion')
    actividades = models.ArrayReferenceField(
        to='Actividades',
        on_delete=models.CASCADE
    )
    servicios = models.ArrayReferenceField(
        to='Servicios',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.nombre
    

class Reserva(models.Model):
    usuario = models.ForeignKey(PerfilUsuario, on_delete=models.CASCADE, related_name='reservas')
    alojamiento = models.ForeignKey(Alojamiento, on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    total = models.IntegerField()

    def __str__(self):
        return f'Reserva de {self.usuario} en {self.alojamiento.nombre}'

class Comentario(models.Model):
    reserva = models.ForeignKey(Reserva, on_delete=models.CASCADE, related_name='reservas')
    descripcion = models.TextField()
