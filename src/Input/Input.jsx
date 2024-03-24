import App from "./Dates/App"
import RoomCapacityDropdown from "./RoomCapacity/RoomCapacityDropdown"
import ChainTypeDropdown from "./ChainType/ChainTypeDropdown"
import PriceSlider from "./Price/PriceSlider"
import CityDropdown from "./Area/CityDropdown"

function Input() {
 

    return (
      <div>

        <App></App>
        <RoomCapacityDropdown></RoomCapacityDropdown>
        <ChainTypeDropdown></ChainTypeDropdown>
        <PriceSlider></PriceSlider>
        <CityDropdown></CityDropdown>
        
        
  
        
      </div>
    )
  }
  
  export default Input
  