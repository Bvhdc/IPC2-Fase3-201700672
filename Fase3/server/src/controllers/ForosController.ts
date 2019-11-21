import {Request,Response } from 'express'
import pool from '../database'
class ForosController{

    public async listall (req:Request,res:Response)  {
       
       const users= await pool.query('SELECT Curso.CodigoCurso,Foro.Titulo,comentario.comentario,estudiante.Nombre FROM Foro,estudiante,Curso,comentario where Foro.CodigoCurso=Curso.CodigoCurso and comentario.idForo=Foro.idForo and estudiante.CarnetEstudiante=comentario.CarnetEstudiante');
       res.json(users);
    }
    public async list (req:Request,res:Response)  {
        const { id }=req.params;
       const users= await pool.query('SELECT Curso.CodigoCurso,Foro.Titulo,Foro.fecha,Foro.idForo FROM Foro,Curso where Foro.CodigoCurso=Curso.CodigoCurso and Curso.CodigoCurso= ?',[id]);
        res.json(users);
     }
    

    public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT comentario.comentario,estudiante.Nombre FROM comentario,estudiante WHERE estudiante.CarnetEstudiante=comentario.CarnetEstudiante and comentario.idForo= ?',[id]);
       
            res.json(users);
       
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Foro set ?',[req.body]);
        
        res.json({message:'Foro Saved'});
    }
    public async createmessage(req:Request,res:Response){
        await pool.query('INSERT INTO comentario set ?',[req.body]);
        
        res.json({message:'comentario Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Foro WHERE CodigoCurso=?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Foro set ? WHERE CodigoCurso= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }
}
const forosController= new ForosController();
export default forosController;