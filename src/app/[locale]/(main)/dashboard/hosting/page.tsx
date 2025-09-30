import BannerUser from "@/components/banner/BannerUser"
import CarouselCategories from "@/components/carousel/CarouselCategories"

const HostingPage = () => {
  return (
    <article className="w-full pt-10 min-h-screen flex">
      <section className="w-2/3 h-full px-5">
       <CarouselCategories />
       <BannerUser />
      </section>
      <section className="w-1/3">
        
      </section>
    </article>
  )
}

export default HostingPage

