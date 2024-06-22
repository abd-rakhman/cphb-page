import './App.css'
import bookCover from './assets/cphb-cover.jpg'
import AnttiLaaksonen from './assets/antti_laaksonen.jpeg'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;
const downloadURI = `${BACKEND_URL}/file`;

function App() {
  console.log(downloadURI);
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
              <span>Антти Лаaксонен</span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h5>Кітап туралы</h5>
            <span>Спорттық бағдарламалау нұсқаулығы – спорттық бағдарламалауға заманауи кіріспе. Кітапта спорттық бағдарламалауға қатысты тәсілдерімен алгоритмді жобалау әдістері талқыланады.</span>
          </div>
          <div className='flex flex-col gap-2'>
            <h5>Аудармашы</h5>
            <span>Талгаткызы Нурхаят</span>
          </div>
          <div className='flex flex-col gap-2'>
            <h5>Редактор</h5>
            <span>Итеғұлова Сая</span>
          </div>
          <a type="button" href={downloadURI} download className="block font-bold text-md w-full md:w-min text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 px-12">Жүктеу</a>
        </div>
      </div>
    </>
  )
}

export default App

