function enoughAirtimeWidget() {
    return {
        usageString: '',
        airtimeAvailable: 0,
        remainingAirtime: '',
        calculateAirtime() {
            const usageArray = this.usageString.split(',');
            let totalUsage = 0;

            usageArray.forEach(item => {
                item = item.trim();
                if (item === 'call') {
                    totalUsage += 2.75;
                } else if (item === 'sms') {
                    totalUsage += 0.65;
                } else if (item === 'data') {
                    totalUsage += 12.00;
                }
            });

            const airtimeLeft = this.airtimeAvailable - totalUsage;

            if (airtimeLeft >= 0) {
                this.remainingAirtime = `Remaining airtime: R${airtimeLeft.toFixed(2)}`;
            } else {
                this.remainingAirtime = `You need R${Math.abs(airtimeLeft).toFixed(2)} more airtime.`;
            }
        }
    }
}
