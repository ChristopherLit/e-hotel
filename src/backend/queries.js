const hotel_chain_query = 'SELECT * FROM hotel_chain'
const hotel_chain_ids_query = 'SELECT chain_id, name, office_address FROM hotel_chain'
const hotel_chain_by_id_query = 'SELECT * FROM hotel_chain WHERE chain_id = $1'
const hotel_by_filters_query = 'SELECT * FROM hotel WHERE chain_id = $1 AND address LIKE $2 AND rating = $3'


export { hotel_chain_query, 
            hotel_chain_ids_query,
            hotel_chain_by_id_query,
            hotel_by_filters_query
}
