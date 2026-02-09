export default interface Tariff {
    id: string
    genId?: string
    period: string
    price: number
    full_price: number
    is_best: boolean
    text: string
    selected?: boolean
}