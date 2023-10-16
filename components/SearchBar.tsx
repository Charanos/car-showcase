'use client'
import Image from 'next/image'
import { SearchManufacturer } from '.'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`} >
        <Image
            height={40}
            width={40}
            alt='search icon'
            className='object-contain'
            src='/magnifying-glass.svg'
        />
    </button>
)

const SearchBar = () => {

    const handleSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        if (manufacturer === '' && model === '') {
            return alert('Please fill in the search bars')
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName)
    }

    const [model, setModel] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const router = useRouter()

    return (
        <form className='searchbar' onSubmit={handleSearch} >
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <SearchButton otherClasses='sm:hidden' />
            </div>

            <div className="searchbar__item">
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    alt='car-model'
                    className='absolute w-[20px] h-[20px] ml-4'
                />

                <input type="text" name="model" placeholder='Tiguan' className='searchbar__input' value={model} onChange={(e) => setModel(e.target.value)} />

                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />

        </form>
    )
}

export default SearchBar