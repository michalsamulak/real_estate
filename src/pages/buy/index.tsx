import { CardsWrapper } from '../../../components/PropertyCards/CardsWrapper'
import { PropertyCard } from '../../../components/PropertyCards/PropertyCard'
import data from "../../../data/staticData.json"

const Buy = () => {
  return (
    <CardsWrapper>
    {data.map(record => {
      const {id, title, img, description, bathrooms, num_bedrooms, area, price, localization} = record
      return (
        <PropertyCard key={id} id={id} imgSrc={img} title={title} description={description} bathrooms={bathrooms} bedrooms={num_bedrooms} area={area} price={price} />
      )
    })}
    </CardsWrapper>
  )
}

export default Buy