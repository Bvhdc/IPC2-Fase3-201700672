"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ActividadesController {
    listall(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const actividades = yield database_1.default.query('select * From Actividad');
            res.json(actividades);
        });
    }
    listAux(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT Actividad.Nombre,Actividad.tipo,Actividad.Descripcion,Actividad.nota,Curso.NombreCurso FROM Actividad,Curso,asignacionauxiliar WHERE Actividad.CodigoCurso=Curso.CodigoCurso and Actividad.estado !="Vencido" and asignacionauxiliar.CodigoCurso=Curso.CodigoCurso and asignacionauxiliar.CarnetAuxiliar= ?', [id]);
            res.json(users);
        });
    }
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT Actividad.Nombre,Actividad.tipo,Actividad.Descripcion,Actividad.nota,Curso.NombreCurso FROM Actividad,Curso,asignacionestudiante WHERE Actividad.CodigoCurso=Curso.CodigoCurso and Actividad.estado !="Vencido" and asignacionestudiante.CodigoCurso=Curso.CodigoCurso and asignacionestudiante.CarnetEstudiante= ?', [id]);
            res.json(users);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Actividad set ?', [req.body]);
            res.json({ message: 'Actividad Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete FROM Actividad WHERE CodigoActividad= ?', [id]);
            res.json({ message: 'Actividad deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Actividad set ? WHERE Actividad= ?', [req.body, id]);
            res.json({ text: 'Actividad Updated' });
        });
    }
}
const actividadesController = new ActividadesController();
exports.default = actividadesController;
