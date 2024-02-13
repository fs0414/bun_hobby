export interface UserRepositoryInterface {
    create(name: string, email: string, password: string): Promise<User | undefined>
}