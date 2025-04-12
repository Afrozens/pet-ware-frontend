import ColourText from '@/components/animate/ColourText'
import { FlipText } from '@/components/animate/FlipText'
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary'
import SearchGeneral from '@/components/lobby/SearchGeneral'
import { montserrat } from '@/fonts'
import LobbyLayout from '@/layout/LobbyLayout'
import Image from 'next/image'

const page = () => {
  return (
    <LobbyLayout>
      <article className='w-full min-h-screen bg-primary-pressed px-10 xl:px-16 2xl:px-20'>
        <section className='flex justify-between items-start w-full pt-44'>
          <div className='w-full flex flex-col gap-5 items-start'>
            <div className="mb-5 text-3xl xl:text-4xl 2xl:text-6xl font-semibold text-white space-y-3 md:space-y-4 lg:space-y-5">
              <span className="block"><ColourText text='Profesionales' /> para</span>
              <span className="block">tus <ColourText text='mascotas' />,</span>
              <span className="block">directamente en tu <ColourText text='hogar' /></span>
            </div>
            <div className={`text-xl xl:text-2xl w-full text-gray-400 ${montserrat.className}`}>
              <span className='block w-full'>
                Encuentra cuidadores verificados en <FlipText words={["Puerto Ordaz", "San Felix", "Lechería", "Chacao"]}/>
              </span>
              <span className='block'>
                servicios especializados y todo lo que tu mascota necesita
              </span>
              <span className='block'>
                en un solo lugar.
              </span>
            </div>
            <div className='w-full max-w-2xl flex gap-10 justify-between items-center'>
              <ButtonPrimary color='bg-success-pressed' small={false} withIcon={false}>
                <span className='text-2xl text-white'>
                  Buscar profesionales
                </span>
              </ButtonPrimary>
              <ButtonPrimary color='bg-white' small={false} withIcon={false}>
                <span className='text-2xl text-black'>
                  Soy profesional
                </span>
              </ButtonPrimary>
            </div>
          </div>
          <div className='w-full relative -mt-30  flex justify-center items-start'>
            {/* Gradiente detrás de la imagen */}
            <div className='absolute inset-0 left-16 top-5 bg-gradient-to-r from-primary-bg to-transparent opacity-10 rounded-full blur-xl z-10' />
            <Image 
              className='bg-cover z-10' 
              src={'/images/woman-with-pet.svg'} 
              alt='image of woman with pet' 
              width={500} 
              height={500} 
            />
          </div>
        </section>
        <SearchGeneral />
      </article>
    </LobbyLayout>
  )
}

export default page