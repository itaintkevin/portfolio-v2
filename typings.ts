export interface AboutType {
    _id: string,
    name: string,
    salutation: string,
    bio: string[],
}

export interface Skills {
    _id: string,
    skills: string[],
}

export interface Projects {
    _id: string,
    name: string,
    repository: string,
    deployment: string,
    date: string,
    details: string,
    skills: string[]
}

export interface Experiences {
    _id: string,
    type: string,
    organization: string,
    date: string,
    role: string,
    work: string,
    certificate: string,
    website: string,
    skills: string[]
}
