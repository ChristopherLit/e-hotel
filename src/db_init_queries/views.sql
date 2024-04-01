CREATE VIEW rooms_per_city AS
SELECT 
    address AS full_address,
    COUNT(*) AS num_rooms
FROM 
    hotel
GROUP BY 
    address
ORDER BY 
    address;