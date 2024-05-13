const mongoose = require('mongoose');

const uri = "mongodb+srv://matiascalisto:Sca2021-@skybnb.zg9b7ug.mongodb.net/?retryWrites=true&w=majority&appName=Skybnb";

mongoose.connect(uri);

const alojamientoSchema = new mongoose.Schema({
  uid_alojamiento: String,
  nombre: String,
  tipo_alojamiento: String,
  servicios: [String],
  dormitorio: Number,
  baño: Number,
  cantidad_huespedes: Number,
  mascotas: Boolean,
  precios: Number,
  ubicacion: String,
  tipo_espacio: String,
  imagen: String
});

const Alojamiento = mongoose.model('Alojamiento', alojamientoSchema);

module.exports = Alojamiento;

async function run() {
  try {
    // Create a new document of Alojamiento
    const nuevoAlojamiento = new Alojamiento({
        uid_alojamiento: '12345',
        nombre: 'Ejemplo de Alojamiento',
        tipo_alojamiento: 'Casa',
        servicios: ['Wifi', 'TV'],
        dormitorio: 3,
        baño: 2,
        cantidad_huespedes: 6,
        mascotas: true,
        precios: 100,
        ubicacion: 'Ciudad',
        tipo_espacio: 'Urbano',
        imagen: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/03/20/Recortada/img_lbernaus_20190320-133634_imagenes_lv_terceros_istock-674909778-kU5B-U461144690840pUE-992x558@LaVanguardia-Web.jpg'
    });

    // Save the new alojamiento document to the database
    await nuevoAlojamiento.save();

    console.log('Alojamiento creado correctamente:', nuevoAlojamiento);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}
run().catch(console.dir);
