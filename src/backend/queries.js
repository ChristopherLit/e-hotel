const hotel_chain_query = 'SELECT * FROM hotel_chain'
const hotel_chain_ids_query = 'SELECT chain_id, name FROM hotel_chain'
const hotel_chain_by_id_query = 'SELECT * FROM hotel_chain WHERE chain_id = $1'


export { hotel_chain_query, 
            hotel_chain_ids_query,
            hotel_chain_by_id_query
}
