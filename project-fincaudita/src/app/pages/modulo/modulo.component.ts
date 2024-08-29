import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent implements OnInit {
  modulos: any[] = [];
  modulo: any = { id: 0, name: '', description: '', position: 0, state: false };
  isModalOpen = false;

  private apiUrl = 'http://localhost:5019/api/Modulo';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getModulos();
  }

  getModulos(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (modulos) => {
        this.modulos = modulos;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  onSubmit(form: NgForm): void {
    if (this.modulo.id === 0) {
      this.http.post(this.apiUrl, this.modulo).subscribe(() => {
        this.getModulos();
        this.closeModal();
        Swal.fire('Success', 'Modules created successfully!', 'success');
      });
    } else {
      this.http.put(this.apiUrl, this.modulos).subscribe(() => {
        this.getModulos();
        this.closeModal();
        Swal.fire('Success', 'Module updated successfully!', 'success');
      });
    }
  }

  editModulo(modulo: any): void {
    this.modulo = { ...modulo };
    this.openModal();
  }

  deleteModulo(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
          this.getModulos();
          Swal.fire(
            'Deleted!',
            'Your role has been deleted.',
            'success'
          );
        });
      }
    });
  }

  resetForm(): void {
    this.modulo = { id: 0, name: '', description: '', position: 0, state: false };
  }
}

