import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addConnections } from '../../state/connections/connections.action';
import { selectConnections } from '../../state/connections/connections.selector';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-connections',
  imports: [CommonModule],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css'
})
export class ConnectionsComponent {
  connections$!: Observable<any> | null;
  constructor(private route: ActivatedRoute, private store: Store) {

  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.store.dispatch(addConnections({ connections: data?.['connections']?.data }));
    });

    this.connections$ = this.store.select(selectConnections);
  }
  ngOnDestroy() {
    // Cleanup if necessary
    this.connections$ = null;
  }
}
