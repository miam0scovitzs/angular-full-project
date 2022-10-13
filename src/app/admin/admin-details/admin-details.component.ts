import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
  userData: any = {};
  // @Input() userData:any
  allUsers:any

  constructor(private userDataService: UserDataService, private routes: Router) { }

  ngOnInit(): void {
   

  }
  onClick() {
    console.log(this.userData);
    this.userDataService.createUser(this.userData).subscribe((data: any) => {
      this.userDataService.createData = data
      this.routes.navigate(['/creation'])


    })
  }

}
