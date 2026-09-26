import { Component, inject } from '@angular/core';
import { StaffService } from '../../services/staff-service';

@Component({
  selector: 'app-staff',
  imports: [],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff {

  private staffService = inject(StaffService);

  personajes:any[] = [];

  ngOnInit(){

    this.staffService.getPersonajes().subscribe({

      next: (data) => {

        console.log(data);

        this.personajes = data.items;

      },

      error: (error) => {

        console.log('Error al consumir API');
        console.log(error);

      }

    });

  }
}