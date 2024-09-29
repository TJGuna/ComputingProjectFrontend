import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Apollo} from "apollo-angular";
import {MatSnackBar} from "@angular/material/snack-bar";
import { login} from "../graphql/auth.graphql";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private readonly JWT_TOKEN = 'JWT_TOKEN' ;
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN' ;
    private loggedUser?: string;
    private isAuthenticatedSubject = new BehaviorSubject<boolean> (false) ;
    constructor( private apollo: Apollo,private _snackBar:MatSnackBar) {}

    login(user: { username: string, password: string }): Observable<any> {
        return new Observable<any>(observer => {
            this.apollo.mutate({
                mutation: login,
                variables: {
                    username: user.username,
                    password: user.password,
                },
            }).subscribe(
                (result: any) => {
                    const tokens = result.data?.loginUser;
                    if (tokens) {
                        // this.doLoginUser(user.username, tokens);
                        this._snackBar.open('Valid credentials', 'Close', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'top',
                        });
                        observer.next(tokens);
                        observer.complete();
                    } else {
                        observer.error('No tokens received');
                        this._snackBar.open('Invalid credentials', 'Close', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'top',
                        });
                    }
                },
                error => {
                    this._snackBar.open('Invalid credentials', 'Close', {
                        duration: 5000,
                        horizontalPosition: 'center',
                        verticalPosition: 'top',
                    });
                    observer.error('Login failed due to server error');
                }
            );
        });
    }

    //
    // logout(){
    //     localStorage.clear();
    //     this.isAuthenticatedSubject.next(false);
    // }
    //
    // currentUser(): Observable<any> {
    //     return new Observable((observer) => {
    //         this.apollo.watchQuery({
    //             query: currentUser
    //         }).valueChanges.subscribe({
    //             next: ( data:any ) => {
    //                 console.log('Current user data:', data);
    //                 if (data.data && data.data.me) {
    //                     observer.next(data.data.me); // You might need to adjust 'data.me' according to your actual data structure
    //                 } else {
    //                     observer.error('Invalid data structure');
    //                 }
    //             },
    //             error: (error) => {
    //                 console.error('Error fetching current user:', error);
    //                 observer.error(error);
    //             },
    //             complete: () => observer.complete()
    //         });
    //     });
    // }
    // isAuthenticated() {
    //     console.log('isAuthenticated token in ser fn: ', !!localStorage.getItem(this.JWT_TOKEN));
    //     return !!localStorage.getItem(this.JWT_TOKEN);
    // }
    //
    // isTokenExpired(): boolean {
    //     const token = localStorage.getItem(this.JWT_TOKEN);
    //     if (!token) return true;
    //     const decoded = jwtDecode(token);
    //     if (!decoded.exp) return true;
    //     const expirationDate = decoded.exp * 1000;
    //     return expirationDate < new Date().getTime();
    //
    //
    // }
    //
    // getRefreshToken(): Observable<any> {
    //     return new Observable<any>(observer => {
    //         this.apollo.mutate({
    //             mutation: refreshTokenFn,
    //             variables: {
    //                 token: localStorage.getItem(this.REFRESH_TOKEN),
    //             },
    //         }).subscribe(
    //             (result: any) => {
    //                 const tokens = result.data?.refreshToken;
    //                 if (tokens) {
    //                     this.storeJwtToken(tokens);
    //                     observer.next(tokens);
    //                     observer.complete();
    //                 } else {
    //                     observer.error('No tokens received');
    //                 }
    //             },
    //             error => {
    //                 observer.error('Token refresh failed due to server error');
    //             }
    //         );
    //     });
    // }
    //
    // private doLoginUser(username: string, tokens: any){
    //     this.loggedUser = username;
    //     this.storeJwtToken(tokens);
    //
    //     this.isAuthenticatedSubject.next(true);
    // }

    // private storeJwtToken(jwt: any){
    //     localStorage.setItem(this.JWT_TOKEN, jwt.token);
    //     localStorage.setItem(this.REFRESH_TOKEN, jwt.refreshToken);
    // }
}
