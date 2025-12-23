exports.randomTimezone = () => {
    const zones = [
        "America/New_York",
        "America/Los_Angeles",
        "Europe/London",
        "Europe/Berlin",
        "Asia/Tokyo",
        "Asia/Singapore",
        "Australia/Sydney"
    ];

    return zones[Math.floor(Math.random() * zones.length)];
};
