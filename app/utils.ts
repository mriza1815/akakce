/**
 * Description: formatCurrency function formats the given number to a currency format.
 * @param value Number
 * @returns string
 */
export function formatCurrency(value: number): string {
    return value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' TL';
}