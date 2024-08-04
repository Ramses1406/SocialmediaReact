import { useEffect, useState } from "react"

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)
    const handleClick = () => {
       setDarkMode(!darkMode)
}


    useEffect (() => {if (darkMode)
    {
        document.documentElement.classList.add('dark')
    }
    else {
        document.documentElement.classList.remove('dark')

    } }, [darkMode]) 
  return (
    <header className="bg-VeryPaleBlue dark:bg-VeryDarkBlue mb-[1000px] md:mb-[500px] min-[1394px]:mb-[200px] rounded-b-[20px] h-[235px] px-6 pt-8 ">
    
    <h1 className="mb-1 text-2xl font-bold dark:text-VeryPaleBlue text-VeryDarkBlue"> Social Media Dashboard</h1>
    <p className="mb-6 font-bold text-DarkGrayishBlue"> Total Followers: 23,004</p>
    <hr className="bg-black mb-[19px]" />

    <div className="flex justify-between">
        <p className="font-bold dark:text-DesaturatedBlue text-DarkGrayishBlue">Dark Mode</p>

        <label htmlFor="darkmode" className="w-12 h-6 p-[3px] bg-Toggle relative rounded-full cursor-pointer ">
        <input onClick={handleClick} id="darkmode" type="checkbox" className="sr-only peer" />

        <div className="absolute top-0 left-0 w-full h-full rounded-full peer-checked:bg-ToggleGradient"></div>

        <div className="h-[18px] w-[18px] bg-LightGrayishBlue rounded-full peer-checked:translate-x-[24px] transition-all ">

        </div>
        </label>
    </div>

    </header>

  )
}
