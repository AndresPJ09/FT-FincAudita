import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { RoleComponent } from './pages/role/role.component';
import { UserComponent } from './pages/user/user.component';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { ViewComponent } from './pages/view/view.component';
import { PersonComponent } from './pages/person/person.component';
import { SecurityComponent } from './pages/security/security.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },

    {
        path: 'menu',
        component: MenuComponent,
    },
 
    {
        path: 'role',
        component: RoleComponent,
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'modulo',
        component: ModuloComponent,
    },
    {
        path: 'view',
        component: ViewComponent,
    },
    {
        path: 'person',
        component: PersonComponent,
    },
    {
        path: 'security',
        component: SecurityComponent,
    },


];
