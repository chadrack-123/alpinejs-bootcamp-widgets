function transportFeeWidget() {
    return {
        shift: '',
        fee: '',
        calculateFee() {
            const fees = {
                morning: 'R20',
                afternoon: 'R10',
                nightshift: 'free'
            };
            this.fee = fees[this.shift] || 'Select a shift';
        }
    }
}
