export interface Booking {
    lane : number;
    date: string;
    startTime: string;
    endTime: string;
    numberOfPlayers: number;
    status: 'pending' | 'confirmed' | 'cancelled';
}