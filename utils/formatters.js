export default formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'decimal', maximumSignificantDigits:2 }).format(number)
}