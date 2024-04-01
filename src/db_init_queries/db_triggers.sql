CREATE OR REPLACE FUNCTION update_total_revenue()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE total_revenue
        SET revenue = revenue + NEW.payment
        WHERE id = 1;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE total_revenue
        SET revenue = revenue - OLD.payment
        WHERE id = 1;
    END IF;
    RETURN NULL; -- Return value is ignored for AFTER triggers
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_total_revenue
AFTER INSERT ON booking_renting
FOR EACH ROW
EXECUTE FUNCTION update_total_revenue();

CREATE TRIGGER trigger_update_total_revenue_after_delete
AFTER DELETE ON booking_renting
FOR EACH ROW
EXECUTE FUNCTION update_total_revenue();