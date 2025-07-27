import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  
  const _toastrService = inject(ToastrService)
  return next(req).pipe(catchError(  (err) =>{

    console.log('interceptors',err.error.message)
    _toastrService.error(err.error.message,'faild')

return throwError( ()=>err )
  }));
};
