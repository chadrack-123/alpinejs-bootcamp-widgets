function totalPhoneBillWidget() {
    return {
        phoneString: '',
        bill: '',
        calculateBill() {
            const callCost = 2.75;
            const smsCost = 0.65;
            const usage = this.phoneString.split(',');
            let totalBill = 0;
            usage.forEach(item => {
                item = item.trim();
                if (item === 'call') {
                    totalBill += callCost;
                } else if (item === 'sms') {
                    totalBill += smsCost;
                }
            });
            this.bill = `R${totalBill.toFixed(2)}`;
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', totalPhoneBillWidget);
});
