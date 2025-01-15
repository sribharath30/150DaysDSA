// SQL function to get cashflow
/*
SELECT 
    i.email AS email_id,
    COUNT(c.cash_flow) AS total_investments,
    MIN(c.cash_flow) AS min_cash_flow,
    MAX(c.cash_flow) AS max_cash_flow,
    ROUND(AVG(c.cash_flow), 2) AS average_cash_flow
FROM 
    investor i
LEFT JOIN 
    cash_flows c
ON 
    i.id = c.investor_id
GROUP BY 
    i.email;
*/

// unique difference

/*function findOddOneOut(series) {
    // Helper function to calculate differences between adjacent letters
    const getDiffPattern = (word) => {
        const differences = [];
        for (let i = 0; i < word.length - 1; i++) {
            differences.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
        }
        return differences;
    };

    // Generate difference patterns for all words
    const patterns = series.map(getDiffPattern);

    // Find the unique pattern
    for (let i = 0; i < patterns.length; i++) {
        const currentPattern = JSON.stringify(patterns[i]);
        const count = patterns.filter((pattern) => JSON.stringify(pattern) === currentPattern).length;
        if (count === 1) {
            return series[i]; // Return the word with the unique pattern
        }
    }
}

// Example usage
const series = ["ACB", "BDC", "CED", "DEF"];
const oddOneOut = findOddOneOut(series);
console.log(`The odd one out is: ${oddOneOut}`);
*/

// Third question related to fetch axios
