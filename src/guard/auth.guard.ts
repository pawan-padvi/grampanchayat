import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  var username = localStorage.getItem("username");
  if(username!=null){
    return true;
  }else{
    router.navigate(["login"]);
  }
  return false;
};

