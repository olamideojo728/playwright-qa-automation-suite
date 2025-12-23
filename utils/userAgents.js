exports.randomUserAgent = () => {
    const agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)",
        "Mozilla/5.0 (Linux; Android 11; Pixel 5)",
        "Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X)"
    ];
    return agents[Math.floor(Math.random() * agents.length)];
};
