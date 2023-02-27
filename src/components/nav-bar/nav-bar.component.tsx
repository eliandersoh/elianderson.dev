import { Anchor, List } from "dracula-ui";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC } from "react";

const MyLogo = () => {
  return (
    <Link href="/">
      <Image alt="Elianderson`s logo" src="/logo.svg" width={32} height={32} />
    </Link>
  );
};

type NavMenuItemProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

const NavMenuItem: FC<NavMenuItemProps> = ({ children, ...linkProps }) => {
  return (
    <li>
      <Link {...linkProps} passHref legacyBehavior>
        <Anchor
          weight="normal"
          mb="none"
          size="sm"
          hoverColor="cyanGreen"
          className="uppercase"
        >
          {children}
        </Anchor>
      </Link>
    </li>
  );
};

export const NavBar = () => {
  return (
    <nav className="flex container mx-auto gap-4 py-4 items-center">
      <MyLogo />
      <List className="flex ml-4 flex-1 gap-4 ">
        <NavMenuItem href="/about">about</NavMenuItem>
      </List>
    </nav>
  );
};
