CREATE VIEW rooms_per_city AS
SELECT 
    CONCAT(address, ', ', name) AS full_address,
    COUNT(*) AS num_rooms
FROM 
    hotel
GROUP BY 
    address, name
ORDER BY 
    address;
