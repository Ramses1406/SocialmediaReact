import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import iconup from '../assets/images/icon-up.svg';
import icondown from '../assets/images/icon-down.svg';

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    Youtube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram',
    Youtube: 'bg-YouTube'
}


export const OverviewCard = ({user, audienceType, audience, network, isUp, today}) => {
  return (
    <article className=" w-[326px] overflow-hidden rounded-[5px] text-center cursor-pointer dark:hover:brightness-125 hover:brightness-95 mb-4 dark:bg-DarkDesaturatedBlue   bg-LightGrayishBlue  h-[216px]">
        <div className={`${networkColors[network]} h-[4px] mb-8`} ></div>
        <div className='flex items-center justify-center gap-2'>
        <img src={networkLogos[network]} alt={'logo facebook'} />
        <p className='text-xs font-bold text-DarkGrayishBlue'>{user}</p>
        </div>
        
        <p className="font-bold text-[56px] dark:text-white text-VeryDarkBlue  ">{audience}</p>
        <p className='text-xs tracking-[5px] uppercase text-DarkGrayishBlue mb-6'>{audienceType}</p>
        <div className='flex items-center justify-center gap-1'>
            <img src= {isUp ? iconup : icondown} alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-LimeGreen': 'text-BrightRed'}`}>{today} today</p>
        </div>
        
    </article>
  )
}




export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
  return (
    <article className=' cursor-pointer hover:brightness-95 dark:bg-DarkDesaturatedBlue  dark:hover:brightness-125 bg-LightGrayishBlue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] '>
        
        <div className='flex items-center justify-between '>
            <p className='dark:text-white text-DarkGrayishBlue'>{statsType}</p>
            <img src={networkLogos[network]} alt="" />
        </div>

        <div className='flex justify-between '>
            <p className='dark:text-white text-[42px] font-bold text-VeryDarkBlue'>{stats}</p>
        
        <div className='flex items-center justify-center gap-1'>
            <img src= {isUp ? iconup : icondown} alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-LimeGreen': 'text-BrightRed'}`}>{porcentage} today</p>
        </div>
        </div>
    </article>
  )
}
