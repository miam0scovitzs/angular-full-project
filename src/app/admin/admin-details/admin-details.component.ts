import { Component } from '@angular/core';
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
    this.userDataService.createUser(this.userData).subscribe((data: any) => {
      this.userDataService.createData = data
      console.log(data)
      this.routes.navigate(['/creation'])
      


    })
  }

}
