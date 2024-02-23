export interface UserServiceInterface {
    publishToken(userId: string): Promise<string>
}