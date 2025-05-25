import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login Page',
    },
    {
        path: 'taskManager/:id',
        component: TaskManagerComponent, 
        title: 'Task Manager Pro',
        //problema: es appcomponent, y appcomponent lo estoy usando para hacer display de todo, crear nuevo componente para pagina principal
    }
];
