import { Router} from 'express';
import actividadesController from '../controllers/actividadesController'
class ActividadesRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',actividadesController.listall);
        this.router.get('/auxiliar/:id',actividadesController.listAux);
        this.router.get('/user/:id',actividadesController.listUser);
        this.router.post('/',actividadesController.create)
        this.router.delete('/:id',actividadesController.delete)
        this.router.put('/:id',actividadesController.update)
    }
}
const actividadesRoutes=new ActividadesRoutes();
export default actividadesRoutes.router;