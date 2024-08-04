
import  data  from '../../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

const convertNumbertoK = (number) => {
    if (number >= 10000) {
        number = number /1000
        return `${number}K`

    }
    return number
}



export const OverviewContainer = () => {
   

  return (
        <section className='absolute justify-center  flex flex-wrap gap-[30px]  max-w-[1440px] mx-auto left-0 right-0  top-[191px] '>

        {data.overview.map(object => (
            <OverviewCard 
                key={object.id}
                user={object.user}
                audienceType={object.audienceType}
                audience={convertNumbertoK(object.audience)}
                network={object.network}
                isUp={object.isUp}
                today= {object.today} 
            />
        ))}
    </section>
  );
}

export const OverviewTodayContainer = () => {
  return (

    <section >
        <h2 className='mb-[27px] text-DarkGrayishBlue ml-[32px] text-2xl font-bold'> Overview Today   </h2>
            <div className='flex flex-wrap  max-w-[1440px] mx-auto'>
                {data['overview-today'].map(object => 
                    <OverviewTodayCard 
                    key={object.id}
                    network= {object.network}
                    statsType= {object.statsType}
                    stats= {convertNumbertoK(object.stats)}
                    porcentage= {object.porcentage}
                    isUp= {object.isUp} />
                    )
                    
                }


            </div>
          
    </section>
  )
}
