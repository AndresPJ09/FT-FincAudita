import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],  // Asegúrate de que esté importado aquí
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[] = [];
  role: any = { id: 0, name: '', description: '', state: false };
  isModalOpen = false;

  private apiUrl = 'http://localhost:5019/api/Role';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (roles) => {
        this.roles = roles;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching roles:', error);
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
    if (this.role.id === 0) {
      this.http.post(this.apiUrl, this.role).subscribe(() => {
        this.getRoles();
        this.closeModal();
        Swal.fire('Success', 'Role created successfully!', 'success');
      });
    } else {
      this.http.put(this.apiUrl, this.role).subscribe(() => {
        this.getRoles();
        this.closeModal();
        Swal.fire('Success', 'Role updated successfully!', 'success');
      });
    }
  }

  editRole(role: any): void {
    this.role = { ...role };
    this.openModal();
  }

  deleteRole(id: number): void {
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
          this.getRoles();
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
    this.role = { id: 0, name: '', description: '', state: false };
  }
}
