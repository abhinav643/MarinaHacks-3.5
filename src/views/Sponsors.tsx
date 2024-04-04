import Image from 'next/image'

export const Sponsors = () => {
  return (
    <div id="sponsors"  className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-black opacity-50 mt-20 mb-12">
        Sponsors
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6 pb-6 ">
        <div className="rounded-2xl p-12 bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <Image
            src={"/images/sponsors/coe.png"}
            alt='background'
            width="770"
            height="100"
          />
        </div>
        
      </div>
    </div>
  )
}