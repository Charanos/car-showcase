import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface FilterProps {
    fuel: string;
    year: number;
    model: string;
    limit: number;
    manufacturer: string;

}

export interface CarProps {
    "year": number;
    "make": string;
    "drive": string;
    "model": string;
    "class": string;
    "city_mpg": number;
    "fuel_type": string;
    "cylinders": number;
    "highway_mpg": number;
    "transmission": string;
    "displacement": number;
    "combination_mpg": number;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    isNext: boolean;
    pageNumber: number;
}