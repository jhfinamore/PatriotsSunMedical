import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

// Purely Decorative Components for fleshing out site interface
import { MissionStatementComponent } from './components/mission-statement/mission-statement.component';
import { ServicesComponent } from './components/services/services.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

// Handling of the patients (previously './issue.service')
import { PatientService } from './patient.service';

// Added routes for home, mission statement, staff_login
const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: 'mission', component: MissionStatementComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'staff_login', component: StaffLoginComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    MissionStatementComponent,
    ServicesComponent,
    StaffLoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
