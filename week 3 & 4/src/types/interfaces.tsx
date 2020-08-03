export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ChatMessage {
    userId: string;
    room: string;
    text: string;
    time: string;
}

export interface UserInfo {
    firstname: string;
    lastname?: string;
}
