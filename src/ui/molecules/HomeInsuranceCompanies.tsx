"use client"

import cns from "classnames"
import { FC, useEffect, useState } from "react"

import useWindowSize from "@/lib/window"
import { FillImage, Wrapper } from "../atoms"
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
  const size = useWindowSize()
  const length = insurances.length - 2
  const slideWidth = size.width < 1280 ? 100 : 33.33
  const slideTransform = {
    transform: `translateX(-${slideIndex * slideWidth}%)`,
  }

  // Automation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, delay)

    return () => clearInterval(interval)
  }, [delay, length])

  return (
    <section className="bg-gray-300 pb-14">
      <Wrapper>
        <div className="pt-14 text-center">
          <H2>Medicare Insurance Companies</H2>
        </div>
      </Wrapper>
      <div className="overflow-hidden">
        <ul
          className="flex w-full h-full transition-all duration-500"
          style={slideTransform}
        >
          {insurances.map((insurance, idx) => (
            <li key={insurance.id} className="flex-none w-full xl:w-1/3">
              <div
                className={cns(
                  `h-[200px] w-full flex justify-center items-center transition-all duration-500`,
                  {
                    "text-black font-black scale-125": slideIndex + 1 === idx,
                  }
                )}
              >
                {insurance.image ? (
                  <FillImage img={insurance.image} objectContain />
                ) : (
                  <h4
                    className={cns("m-0", {
                      "font-bold": slideIndex + 1 === idx,
                    })}
                  >
                    {insurance.title}
                  </h4>
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
