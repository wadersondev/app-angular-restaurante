import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about.component'

// Criando as rotas padrão
const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations:[AboutComponent],
  imports: [RouterModule, RouterModule.forChild(ROUTES)]
  //imports: [RouterModule.forChild(ROUTES)]
})

export class AboutModule{}
