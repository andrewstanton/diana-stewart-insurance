"use client"

import React, { FC, useState, useEffect } from "react"
import cns from "classnames"

import colors from "@/config/colors"
import { Section, FillImage } from "../atoms"
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
    <Section bgColor={colors.gray300}>
      <H2>Insurance Companies</H2>
      <div className="overflow-hidden">
        <ul
          className="grid gap-y-10 md:flex transition-all duration-500 w-full h-full"
          style={slideTransform}
        >
          {insurances.map((insurance, idx) => (
            <li key={insurance.id} className="h-full w-full">
              <div
                className={cns(
                  `h-[300px] w-[${slideWidth}px] flex justify-center items-center`,
                  {
                    "text-black font-bold scale-150 transition-all duration-500":
                      slideIndex === idx,
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
    </Section>
  )
}

export default HomeInsuranceCompanies
