exports.randomGeo = () => {
    const locations = [
        // --- Major U.S. Cities ---
        { name: "New York, NY", latitude: 40.7128, longitude: -74.0060 },
        { name: "Los Angeles, CA", latitude: 34.0522, longitude: -118.2437 },
        { name: "Chicago, IL", latitude: 41.8781, longitude: -87.6298 },
        { name: "Houston, TX", latitude: 29.7604, longitude: -95.3698 },
        { name: "Phoenix, AZ", latitude: 33.4484, longitude: -112.0740 },
        { name: "Philadelphia, PA", latitude: 39.9526, longitude: -75.1652 },
        { name: "San Antonio, TX", latitude: 29.4241, longitude: -98.4936 },
        { name: "San Diego, CA", latitude: 32.7157, longitude: -117.1611 },
        { name: "Dallas, TX", latitude: 32.7767, longitude: -96.7970 },
        { name: "San Jose, CA", latitude: 37.3382, longitude: -121.8863 },

        // --- Tech Hubs ---
        { name: "Seattle, WA", latitude: 47.6062, longitude: -122.3321 },
        { name: "Austin, TX", latitude: 30.2672, longitude: -97.7431 },
        { name: "Boston, MA", latitude: 42.3601, longitude: -71.0589 },
        { name: "Denver, CO", latitude: 39.7392, longitude: -104.9903 },
        { name: "Portland, OR", latitude: 45.5051, longitude: -122.6750 },

        // --- East Coast ---
        { name: "Baltimore, MD", latitude: 39.2904, longitude: -76.6122 },
        { name: "Washington, DC", latitude: 38.9072, longitude: -77.0369 },
        { name: "Charlotte, NC", latitude: 35.2271, longitude: -80.8431 },
        { name: "Atlanta, GA", latitude: 33.7490, longitude: -84.3880 },
        { name: "Miami, FL", latitude: 25.7617, longitude: -80.1918 },

        // --- Midwest ---
        { name: "Detroit, MI", latitude: 42.3314, longitude: -83.0458 },
        { name: "Columbus, OH", latitude: 39.9612, longitude: -82.9988 },
        { name: "Indianapolis, IN", latitude: 39.7684, longitude: -86.1581 },
        { name: "Milwaukee, WI", latitude: 43.0389, longitude: -87.9065 },
        { name: "Minneapolis, MN", latitude: 44.9778, longitude: -93.2650 },

        // --- South ---
        { name: "Nashville, TN", latitude: 36.1627, longitude: -86.7816 },
        { name: "Memphis, TN", latitude: 35.1495, longitude: -90.0490 },
        { name: "Louisville, KY", latitude: 38.2527, longitude: -85.7585 },
        { name: "Oklahoma City, OK", latitude: 35.4676, longitude: -97.5164 },
        { name: "New Orleans, LA", latitude: 29.9511, longitude: -90.0715 },

        // --- West Coast ---
        { name: "San Francisco, CA", latitude: 37.7749, longitude: -122.4194 },
        { name: "Sacramento, CA", latitude: 38.5816, longitude: -121.4944 },
        { name: "Las Vegas, NV", latitude: 36.1699, longitude: -115.1398 },
        { name: "Salt Lake City, UT", latitude: 40.7608, longitude: -111.8910 },
        { name: "Albuquerque, NM", latitude: 35.0844, longitude: -106.6504 },

        // --- Smaller but diverse U.S. cities ---
        { name: "Boise, ID", latitude: 43.6150, longitude: -116.2023 },
        { name: "Raleigh, NC", latitude: 35.7796, longitude: -78.6382 },
        { name: "Richmond, VA", latitude: 37.5407, longitude: -77.4360 },
        { name: "Birmingham, AL", latitude: 33.5186, longitude: -86.8104 },
        { name: "Anchorage, AK", latitude: 61.2181, longitude: -149.9003 },
        { name: "Honolulu, HI", latitude: 21.3069, longitude: -157.8583 },

        // --- Europe ---
        { name: "London", latitude: 51.5074, longitude: -0.1278 },
        { name: "Berlin", latitude: 52.5200, longitude: 13.4050 },
        { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
        { name: "Madrid", latitude: 40.4168, longitude: -3.7038 },
        { name: "Rome", latitude: 41.9028, longitude: 12.4964 },

        // --- Asia ---
        { name: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
        { name: "Seoul", latitude: 37.5665, longitude: 126.9780 },
        { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
        { name: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
        { name: "Dubai", latitude: 25.2048, longitude: 55.2708 },

        // --- Africa ---
        { name: "Lagos", latitude: 6.5244, longitude: 3.3792 },
        { name: "Nairobi", latitude: -1.2921, longitude: 36.8219 },
        { name: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },

        // --- South America ---
        { name: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
        { name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
        { name: "Bogotá", latitude: 4.7110, longitude: -74.0721 },

        // --- Oceania ---
        { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
        { name: "Melbourne", latitude: -37.8136, longitude: 144.9631 }
    ];

    const pick = locations[Math.floor(Math.random() * locations.length)];

    return {
        ...pick,
        latitude: pick.latitude + (Math.random() * 0.05),
        longitude: pick.longitude + (Math.random() * 0.05)
    };
};

