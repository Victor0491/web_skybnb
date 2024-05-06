var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var mongoose = require('mongoose');
var uri = "mongodb+srv://matiascalisto:Sca2021-@skybnb.zg9b7ug.mongodb.net/?retryWrites=true&w=majority&appName=Skybnb";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var alojamientoSchema = new mongoose.Schema({
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
var Alojamiento = mongoose.model('Alojamiento', alojamientoSchema);
module.exports = Alojamiento;
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var nuevoAlojamiento, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    nuevoAlojamiento = new Alojamiento({
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
                    return [4 /*yield*/, nuevoAlojamiento.save()];
                case 1:
                    // Save the new alojamiento document to the database
                    _a.sent();
                    console.log('Alojamiento creado correctamente:', nuevoAlojamiento);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error al conectar a MongoDB:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
run().catch(console.dir);
