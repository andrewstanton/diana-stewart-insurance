import Image from "next/image"
import { FC } from "react"

import footerLogo from "../../../public/images/footer-logo.jpg"

const Footer: FC = () => (
  <footer className="w-full text-white">
    <div className="bg-gray-700 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 justify-center items-center">
          <div>
            <Image
              src={footerLogo}
              width={248}
              height={72}
              alt="Diana Stewart Insurance Agent"
            />
          </div>
          <div>LINKS</div>
          <div>Contact Info</div>
        </div>
      </div>
    </div>
    <div className="bg-black py-6 pb-10 text-white">
      <div className="container mx-auto text-sm">
        &copy; {new Date().getFullYear()} Web Panda Designs, LLC
      </div>
    </div>
  </footer>
)

export default Footer
