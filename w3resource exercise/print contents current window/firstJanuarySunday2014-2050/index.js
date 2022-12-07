
for (var year = 2014; year <= 2050; year ++)
{
    const date = new Date(year,1,1);
    dayOfYear = date.getDay();

    if (dayOfYear === 0)
    {
        console.log("January 1, " + date.getFullYear());
    }
    
} 