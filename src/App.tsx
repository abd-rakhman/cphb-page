import './App.css'
import bookCover from './assets/cphb-cover.jpg'
import AnttiLaaksonen from './assets/antti_laaksonen.jpeg'

function App() {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <img src={bookCover} alt="book cover" className="cover w-[240px] md:min-w-[400px]" />
          <span className='text-gray-500 text-sm'>Бет саны 328</span>
        </div>
        <div className="flex flex-col p-4 gap-4 text-center md:text-left md:bg-transparent">
          <h2>Спорттық бағдарламалау нұсқаулығы</h2>
          <div className='flex flex-col gap-2'>
            <h5>Автор</h5>
            <div className='flex flex-row gap-4 items-center justify-center md:justify-start'>
              <img src={AnttiLaaksonen} alt="Antti Laaksonen" width="50" height="50" className="rounded-full" />
              <span>Антти Лаксонен</span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h5>Кітап туралы</h5>
            <span>Competitive Programmer's Handbook is a modern introduction to competitive programming.
              The book discusses programming tricks and algorithm design techniques relevant in competitive programming.</span>
          </div>
          <button type="button" className="block font-bold text-md w-full md:w-min text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-12">Жүктеу</button>
        </div>
      </div>
    </>
  )
}

export default App
