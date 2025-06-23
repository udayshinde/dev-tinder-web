import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { addRequests } from '../../state/requests/requests.action';
import { Observable } from 'rxjs';
import { selectRequests } from '../../state/requests/requests.selector';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-requests',
  imports: [CommonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
  standalone: true
})
export class RequestsComponent {
  requests$!: Observable<any> | null;
  toastMsg: any;
  showToastMsg: boolean = false;
  constructor(private userServie: UserService, private store: Store,
    private requestService: RequestService
  ) {

  }
  ngOnInit() {
    console.log('Requests Component Initialized');
    this.getUserRequests();
    this.requests$ = this.store.select(selectRequests)
  }
  getUserRequests() {
    this.userServie.getUserRequests().subscribe({
      next: (res) => {
        const data = res.data.map((row: any) => {
          return {
            ...row.fromUserId,
            requestId: row._id
          }
        });
        console.log(data);
        this.store.dispatch(addRequests({ requests: data }));
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  onAction(status: any, toUserId: any) {
    this.requestService.acceptOrRejectRequest(status, toUserId).subscribe({
      next: (res) => {
        if (res.success === true) {
          this.toastMsg = res.message;
          this.showToastMsg = true;
          this.getUserRequests();
        }
        setTimeout(() => this.showToastMsg = false, 3000);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
