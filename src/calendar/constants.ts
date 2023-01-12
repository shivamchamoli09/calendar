export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function getListOfYears(): string[] {
    let years: string[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1960; i <= currentYear; i++) {
        years.push(`${i}`);
    }
    return years;
}