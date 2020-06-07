function isAnangram(a, b) {
    return formatStr(a) === formatStr(b)
}

function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = isAnangram
