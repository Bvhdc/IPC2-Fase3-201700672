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
class ForosController {
    listall(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT Curso.CodigoCurso,Foro.Titulo,comentario.comentario,estudiante.Nombre FROM Foro,estudiante,Curso,comentario where Foro.CodigoCurso=Curso.CodigoCurso and comentario.idForo=Foro.idForo and estudiante.CarnetEstudiante=comentario.CarnetEstudiante');
            res.json(users);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT Curso.CodigoCurso,Foro.Titulo,Foro.fecha,Foro.idForo FROM Foro,Curso where Foro.CodigoCurso=Curso.CodigoCurso and Curso.CodigoCurso= ?', [id]);
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT comentario.comentario,estudiante.Nombre FROM comentario,estudiante WHERE estudiante.CarnetEstudiante=comentario.CarnetEstudiante and comentario.idForo= ?', [id]);
            res.json(users);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Foro set ?', [req.body]);
            res.json({ message: 'Foro Saved' });
        });
    }
    createmessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO comentario set ?', [req.body]);
            res.json({ message: 'comentario Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('Delete FROM Foro WHERE CodigoCurso=?', [id]);
            res.json({ message: 'User deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Foro set ? WHERE CodigoCurso= ?', [req.body, id]);
            res.json({ text: 'User Updated' });
        });
    }
}
const forosController = new ForosController();
exports.default = forosController;
