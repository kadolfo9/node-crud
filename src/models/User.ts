export interface IUser {
    id?: string
    name: string
    email: string
    password: string

    created_at?: Date
    updated_at?: Date
}

export class User {
    constructor (
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly created_at: Date,
    private readonly updated_at: Date
  ) { }

  public toJSON (): IUser{
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      created_at: this.created_at,
      updated_at: this.updated_at,
      id: this.id
    }
  }
}