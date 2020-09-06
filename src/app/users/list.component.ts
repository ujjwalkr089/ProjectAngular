import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { pipe } from 'rxjs/internal/util/pipe';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private accountService: AccountService) {}

    // This is for menu close on small screen
// tslint:disable-next-line: typedef
therichpost_close()  {
  const overlayBg = document.getElementById('myOverlay');
  const mySidebar = document.getElementById('mySidebar');
  mySidebar.style.display = 'none';
  overlayBg.style.display = 'none';
}

    // tslint:disable-next-line: typedef
    ngOnInit() {
        // tslint:disable-next-line: no-conditional-assignment
        if (this.users = null){
            console.log(' No User Exists ');
        }else{
          this.accountService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
        }
    }

    // tslint:disable-next-line: typedef
    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id);
            });
    }
}
