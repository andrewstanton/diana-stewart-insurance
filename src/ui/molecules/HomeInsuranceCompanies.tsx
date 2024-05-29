"use client"

import React, { FC, useState, useEffect } from "react"
import cns from "classnames"

import { Wrapper, FillImage } from "../atoms"
import { H2 } from "../atoms/Header"

export interface IInsuranceCompany {
  id: string
  title: string
  image: string | null
}

export interface HomeInsuranceCompaniesProps {
  insurances: IInsuranceCompany[]
}

const HomeInsuranceCompanies: FC<HomeInsuranceCompaniesProps> = (props) => {
  const { insurances } = props
  const [slideIndex, setIndex] = useState(0)
  const delay = 3000
  const length = insurances.length - 1
  const slideWidth = 500

  const slideTransform = {
    transform: `translateX(-${slideIndex * slideWidth}px)`,
  }

  // Automation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, delay)

    return () => clearInterval(interval)
  }, [delay, length])

  return (
    <section className="bg-gray-300">
      <Wrapper>
        <div className="pt-14">
          <H2>Insurance Companies</H2>
        </div>
      </Wrapper>
      <div className="overflow-hidden">
        <ul
          className="flex w-full h-full transition-all duration-500"
          style={slideTransform}
        >
          {insurances.map((insurance, idx) => (
            <li key={insurance.id} className="h-full w-full pb-14">
              <div
                className={cns(
                  `h-[200px] w-[500px] flex justify-center items-center`,
                  {
                    "text-black font-bold scale-125": slideIndex === idx,
                  }
                )}
              >
                {insurance.image ? (
                  <FillImage img={insurance.image} objectContain />
                ) : (
                  <h4 className="m-0">{insurance.title}</h4>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomeInsuranceCompanies
