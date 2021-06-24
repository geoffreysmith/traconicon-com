import { useState } from 'react'
import Navbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'

export default function DefaultNavbar () {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="https://www.traconicon.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Traconicon</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>
            </NavbarContainer>
        </Navbar>
  )
}
