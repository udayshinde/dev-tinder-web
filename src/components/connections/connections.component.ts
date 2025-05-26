import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addConnections } from '../../state/connections/connections.action';
import { selectConnections } from '../../state/connections/connections.selector';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connections',
  imports: [CommonModule],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css'
})
export class ConnectionsComponent {
  connections$!: Observable<any> | null;
  constructor(private userService: UserService, private store: Store) {

  }
  ngOnInit() {
    this.getConnections();
    this.connections$ = this.store.select(selectConnections);
  }
  getConnections() {
    this.userService.getUserConnections().subscribe({
      next: (res) => {
        this.store.dispatch(addConnections({ connections: res?.data }))
      },
      error: (err) => {
        console.error('Error fetching connections:', err);
      }
    })
  }
}
