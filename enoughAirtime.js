function enoughAirtimeWidget() {
    return {
        usageString: '',
        airtimeAvailable: 0,
        remainingAirtime: 0,
        calculateAirtime() {
            const usageArray = this.usageString.split(',');
            let totalUsage = 0;

            usageArray.forEach(item => {
                item = item.trim();
                if (item === 'call') {
                    totalUsage += 1.88;
                } else if (item === 'sms') {
                    totalUsage += 0.75;
                } else if (item === 'data') {
                    totalUsage += 12.00;
                }
            });

            const airtimeLeft = this.airtimeAvailable - totalUsage;

            if (airtimeLeft >= 0) {
                this.remainingAirtime = airtimeLeft.toFixed(2);
            } else {
                this.remainingAirtime = 0;
            }
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtime', enoughAirtimeWidget);
});
