module.exports = function reverse(n) {
    const absoluteN = Math.abs(n);
    const stringN = absoluteN.toString();
    const arrayN = stringN.split("");
    const reverseArrayN = arrayN.reverse();
    const reverseStringN = reverseArrayN.join("");
    const reverseN = Number(reverseStringN);
    return reverseN;
};
