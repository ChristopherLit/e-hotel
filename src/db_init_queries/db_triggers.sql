CREATE OR REPLACE FUNCTION update_total_revenue()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE total_revenue
    SET revenue = revenue + NEW.payment
    WHERE id = 1; -- Assuming there's only one row in the total_revenue table
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_total_revenue
AFTER INSERT ON booking_renting
FOR EACH ROW
EXECUTE FUNCTION update_total_revenue();