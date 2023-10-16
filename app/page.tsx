import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2022,
    model: searchParams.model || '',
    limit: searchParams.limit || 12,
    manufacturer: searchParams.manufacturer || ''
  })

  const noCars = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-semibold capitalize">
            car catalogue
          </h1>

          <p className="uppercase">
            explore the cars you might like
          </p>
        </div>

        <div className="home__filters">

          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {
          !noCars ? (
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars?.map((car) => (<CarCard key={car} car={car} />)
                  )
                }
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container h-[50vh]" >
              <h2 className="text-black text-xl font-semibold uppercase" >no result found</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }



      </div>
    </main>
  )
}
