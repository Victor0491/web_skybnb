from djongo import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Servicios(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Actividades(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Ubicacion(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class TipoAlojamiento(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Rol(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    
class Usuario(AbstractUser):
    email = models.EmailField(unique=True)
    roles = models.ArrayReferenceField(
        to='Rol',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.email

class PerfilUsuario(models.Model):
    nombreCompleto = models.CharField(max_length=255)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='perfil')
    telefono = models.CharField(max_length=20)
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
        return self.usuario.nombreCompleto

class Alojamiento(models.Model):
    nombre = models.CharField(max_length=255)
    dormitorios = models.IntegerField()
    banos = models.IntegerField()
    huespedes = models.IntegerField()
    mascotas = models.BooleanField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    precio = models.IntegerField()
    estado_destacado = models.BooleanField()
    tipoalojamiento = models.OneToOneField(TipoAlojamiento, on_delete=models.CASCADE, related_name='tipo')
    ubicacion = models.OneToOneField(Ubicacion, on_delete=models.CASCADE, related_name='ubicacion')
    actividades = models.ArrayReferenceField(
        to='Actividades',
        on_delete=models.CASCADE
    )
    servicios = models.ArrayReferenceField(
        to='Servicios',
        on_delete=models.CASCADE
    )


    def str(self):
        return self.nombre