export interface Comment {
    id: string;
    user_id: string;
    post_id: string;
    content: string;
    create_time: Date;
    delete_time?: Date;
}