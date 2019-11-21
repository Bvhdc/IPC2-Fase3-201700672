import {Request,Response } from 'express'
import pool from '../database'
class ActividadesController{

    public async listall (req:Request,res:Response)  {
       const actividades= await pool.query('select * From Actividad');
       res.json(actividades);
    }

    public async listAux (req:Request,res:Response)  {
        const { id }=req.params;
        
        const users=await pool.query('SELECT Actividad.Nombre,Actividad.tipo,Actividad.Descripcion,Actividad.nota,Curso.NombreCurso FROM Actividad,Curso,asignacionauxiliar WHERE Actividad.CodigoCurso=Curso.CodigoCurso and Actividad.estado !="Vencido" and asignacionauxiliar.CodigoCurso=Curso.CodigoCurso and asignacionauxiliar.CarnetAuxiliar= ?',[id]);
       
            res.json(users);
        
     }
     public async listUser (req:Request,res:Response)  {
        const { id }=req.params;
        
        const users=await pool.query('SELECT Actividad.Nombre,Actividad.tipo,Actividad.Descripcion,Actividad.nota,Curso.NombreCurso FROM Actividad,Curso,asignacionestudiante WHERE Actividad.CodigoCurso=Curso.CodigoCurso and Actividad.estado !="Vencido" and asignacionestudiante.CodigoCurso=Curso.CodigoCurso and asignacionestudiante.CarnetEstudiante= ?',[id]);
       
            res.json(users);
        
     }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Actividad set ?',[req.body]);
        
        res.json({message:'Actividad Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Actividad WHERE CodigoActividad= ?',[id]);
        
        res.json({message:'Actividad deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Actividad set ? WHERE Actividad= ?',[req.body,id]);
        res.json({text: 'Actividad Updated'})
    }
}
const actividadesController= new ActividadesController();
export default actividadesController;