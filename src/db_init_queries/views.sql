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

CREATE VIEW aggregated_capacity_per_hotel AS
SELECT
    hotel_id,
    SUM(capacity) AS aggregated_capacity
FROM
    room
GROUP BY
    hotel_id;