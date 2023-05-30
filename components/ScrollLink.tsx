import { FC, PropsWithChildren } from 'react'
//next
import Link, { LinkProps } from 'next/link'

type AnchorProps = Omit<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof LinkProps
>

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren

const ScrollLink: FC<ScrollLinkProps> = ({children, href='#'}) => {

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
  
		const targetId = e.currentTarget.href.replace(/.*/, '')
		const elem = document.getElementById(targetId)
		window.scrollTo({
			top: elem?.getBoundingClientRect().top,
			behavior: 'smooth',
		})
	}

	return (
		<Link onClick={handleScroll} href={href} passHref style={{textDecoration: 'none'}}>
			{children}
		</Link>
	)
}
export default ScrollLink
