export type Track = {
    author: Author,
    category: Category,
    data: never,
    isEditable: boolean,
    numberOfRaces: number,
    preview: Preview,
    publicId: string,
    published: boolean,
    tags: Tags,
    title: string,
    type: string,
    voteCount: number, 
};

export type Tracks = Track[];

export type Author = {
    avatar: string,
    email: string,
    freeSlots: number,
    id: number,
    lastLogin: Date | string,
    roles: string,
    steam: Steam,
    userName: string,
};

export type Steam = {
    id: number,
    ownApp: boolean,
    ownerSteamId: string,
    permanent: boolean,
    steamId: string,
};

export type Preview = {
    createdAt: Date | string,
    id: number,
    s3Key: string,
    s3Location: string,
    updatedAt: Date | string,
};

export type Category = {
    id: number,
    name: string,
};

export type Tag = {
    id: number,
    name: string,
};

export type Tags = Tag[];