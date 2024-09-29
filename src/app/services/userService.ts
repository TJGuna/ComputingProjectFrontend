import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import {GET_USER_PROFILES} from "../graphql/user.graphql";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apollo: Apollo) {}

    dataGethering( role :any): Observable<any> {
        console.log('Fetching data with role:', role);
        return new Observable((observer) => {
            this.apollo.watchQuery({
                query: GET_USER_PROFILES,
                variables: {
                    role:role,
                },
            }).valueChanges.subscribe(({ data, error }: any) => {
                if (error) {
                    console.error('Error fetching data:', error);
                    observer.error(error);
                    return;
                }

                console.log('employees map:', data);

                const transformedData = data.usersByRole.map((profile: {
                    id: string;
                    username: string;
                    email: string;
                    role: string;
                    bio?: string;
                    dateOfBirth?: string;
                    address?: string;
                    profilePicture?: string;
                }) => ({
                    id: profile.id,
                    fullName: profile.username, // Map username to fullName
                    email: profile.email,
                    role: profile.role,
                    bio: profile.bio,
                    dateOfBirth: profile.dateOfBirth,
                    location: profile.address,
                    profilePicture: profile.profilePicture,
                }));

                console.log('Transformed data:', transformedData);
                observer.next(new MatTableDataSource(transformedData));
                observer.complete();
            });
        });
    }
}
