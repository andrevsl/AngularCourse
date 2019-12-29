

export class User{
    constructor(public email: string,
                public name: string,
                private password:string ){}

    matches(another:User){
        return another!==undefined &&
        another.email===this.email &&
        another.password===this.password
    }
}



export const users:{[key:string]:User} ={
    "pascoal@gmail.com" : new User('pascoal@gmail.com','Pascoal','pascoal23'),
    "anita@gmail.com" : new User('anita@gmail.com','Anita','anita21')
}