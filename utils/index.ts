import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { model, fuel, year, limit, manufacturer } = filters

    const headers = {
        'X-Api-Key': '2Ol0rCda9nA/1aQP1U/AeQ==P0tqt7HY2ylmYJlo'
    }

    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json()
        return result

    } catch (error) {
        console.error('Opps!! Fetch failed:', error);
        // Handle the error
    }
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return Math.round(rentalRatePerDay); // Round to the nearest integer
};

export const generateCarImageURL = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage/')
    const { make, year, model } = car

    url.searchParams.append('customer', 'hrjavascript-mastery')

    url.searchParams.append('make', make)
    url.searchParams.append('angle', `${angle}`)
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelFamily', model.split(' ')[0])

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);

    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());

    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

    return newPathname;
};