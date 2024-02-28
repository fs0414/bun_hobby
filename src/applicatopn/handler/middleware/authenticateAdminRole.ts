export const authenticateAdminRole = async (roleName: string) => {
    if (roleName !== "ADMIN") {
        throw new Error("You are not authorized to do this action");
    }

    return;
}