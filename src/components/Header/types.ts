export type DesktopHeaderProps = {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type MenuHeaderProps = {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface MobileHeaderProps extends DesktopHeaderProps {
    mobileMenuOpen: boolean
}

export type NavigationType = {
    name: string
    href: string
    id: number
  }