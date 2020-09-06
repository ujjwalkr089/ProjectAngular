import { Component, Inject, Injectable } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent {
    user: User;

    constructor(private accountService: AccountService, ) {
        this.user = this.accountService.userValue;
    }

    // This is for menu open on small screen
// tslint:disable-next-line: typedef
therichpost_open()  {
  const overlayBg = document.getElementById('myOverlay');
  const mySidebar = document.getElementById('mySidebar');
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = 'block';
  }
}
// This is for menu close on small screen
// tslint:disable-next-line: typedef
therichpost_close()  {
  const overlayBg = document.getElementById('myOverlay');
  const mySidebar = document.getElementById('mySidebar');
  mySidebar.style.display = 'none';
  overlayBg.style.display = 'none';
}
}
