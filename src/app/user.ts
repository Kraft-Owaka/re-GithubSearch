export class User {
    constructor(
        public avatar_url: any,public name: string,public url: string,public bio: string, public location: string, public followers: number, 
        public following: number, public creation: Date) 
        { }
}
