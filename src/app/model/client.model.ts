export interface Profile {
    id: number;
    user: {
        id: number;
        username: string;
        email: string;
    };
    role: 'user' | 'expert';
    bio?: string;
    profile_picture?: string;
    date_of_birth?: string; // Use string to handle date format
    location?: string;
    created_at: string;
    updated_at: string;
}
