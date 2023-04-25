import propertiesJSON from "@/data/staticData.json"
import { PropertyPage } from "@/components/Property/PropertyPage";
import { IProperty } from "@/components/Property/types";
import getDocument from '@/lib/firebase/getFromDB';


export async function getServerSideProps({ params }: { params: { id: string } }) {



    try {
      if (!params) throw 'No params attached';

      const {result } = await getDocument()
      const properties = await result

      if(properties === null) return

      
      const property = properties.find((singleProperty) => {
        return singleProperty.id === params.id;
    });
  
    
      return {
        props: {
          data: property,
        },
      };
    } catch (error) {
      console.log('Error fetching property:', error);

      return {
        props: {
          data: {property: propertiesJSON},
        },
      };
    }
  }


  export async function getServerSidePaths() {
    
    const {result } = await getDocument()
    const properties = await result
    if(properties === null) return

    const paths = properties.map((record) => {
      return { params: { id: record.id } };
    });
  
    return {
      paths,
      fallback: false,
    };
  }

const PropertyDetails = ({ data }: { data: IProperty }) => {
    if (!data) return <div>Sorry no data retrieved. Try again</div>;

    return (
        <>
            <PropertyPage property={data} />
        </>
    );
};

export default PropertyDetails;

