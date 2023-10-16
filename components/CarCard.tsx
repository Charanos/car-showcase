'use client'
import Image from 'next/image'
import { useState } from 'react'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent, generateCarImageURL } from '@/utils'
import { CarDetails } from '.'

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {

    const { city_mpg, make, year, drive, model, transmission } = car
    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='car-card group' >
            <div className="card-card__content ">
                <h2 className='car-card__content-title' >
                    {make} {model.split('_').join(' ').replace('.jpg', '')}
                </h2>
            </div>

            <p className="flex mt-10 text-[1.6183rem] font-semibold w-full">
                <span className="self-start text-[14px]">
                    $
                </span>
                {carRent}
                <span className="self-end uppercase text-[14px]">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 ">
                <Image src={generateCarImageURL(car)} alt='car-image' fill priority className='object-contain' />
            </div>

            <div className="relative flex w-full mt-2 justify-between items-center">
                <div className="flex group-hover:invisible w-full justify-between text-grey">
                    <div className="flex flex-col justify-between items-center gap-2 uppercase">
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering-wheel' />
                        <p className="text-[14px]">
                            {
                                transmission === 'a' ? 'Automatic' : "Manual"
                            }
                        </p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-between items-center gap-2 uppercase w-full">
                        <Image src='/tire.svg' width={20} height={20} alt='tire' />
                        <p className="text-[14px]">
                            {
                                drive.toUpperCase()
                            }
                        </p>
                    </div>
                </div>

                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-between items-center gap-2 uppercase w-full">
                        <Image src='/gas.svg' width={20} height={20} alt='gas' />
                        <p className="text-[14px]">
                            {
                                city_mpg
                            } MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton title='View Details'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue' textStyles='text-white text-[14px] leading-[17px] font-semibold' rightIcon='/right-arrow.svg' handleClick={() => setIsOpen(true)}
                    />
                </div>

            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard