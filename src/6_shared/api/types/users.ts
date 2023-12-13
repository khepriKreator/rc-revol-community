export type User = {
    accountAvatar: string;
    accountId: number;
    accountUsername: string;
    bestLapTime: number;
    createdAt: Date | number;
    id: number;
    isDemo: boolean;
    number: number;
    position: string;
    time: number;
    trackPublicId: string;
    updatedAt: Date | number;
}

export type Users = User[];