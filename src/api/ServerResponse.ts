
export type SpinResult = {
    result: string[];
    win: boolean;
    payout: number;
    balance?: number;
};

export class ServerResponse {
    private baseURL: string;

    constructor(baseURl: string = "http://localhost:3000") {
        this.baseURL = baseURl;
    }

    async spin(): Promise<SpinResult> {
        const result = await fetch(`${this.baseURL}/spin`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({}),
        })
        return result.json();
    }

    async getBalance(): Promise<{ balance: number }> {
        const res = await fetch(`${this.baseURL}/balance`);
        return res.json();
    }
}