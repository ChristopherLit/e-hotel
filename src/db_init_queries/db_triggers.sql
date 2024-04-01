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

-- reinforces payment to be positive
CREATE OR REPLACE FUNCTION validate_payment()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.payment <= 0 THEN
        RAISE EXCEPTION 'Payment amount must be positive';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER payment_check
BEFORE INSERT OR UPDATE ON booking_renting
FOR EACH ROW
EXECUTE FUNCTION validate_payment();

-- tests
INSERT INTO booking_renting (start_date, end_date, payment, credit_card, customer_ssn_sin, hotel_id, room_number)
VALUES ('2026-04-01', '2026-04-05', -100, 1234567456, 111, 1, 1);

UPDATE booking_renting
SET payment = -50
WHERE booking_renting_id = 1; 