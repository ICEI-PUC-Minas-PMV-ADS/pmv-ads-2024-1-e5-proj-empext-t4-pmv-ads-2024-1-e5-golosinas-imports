import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { ListItem } from "@/atoms/ListItem";
import { Button } from "@/atoms/Button";
import { Logo } from "@/atoms/Logo"
import styles from "./styles.module.scss";
import navigation from "@/data/navigation.json";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = width < 768;

  const pathname = usePathname();

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__controls}>
        <Logo />
        {isMobile ? (
          isOpen ? (
            <X size={32} onClick={toggleMenu} color="#9D5C63"/>
          ) : (
            <List size={32} onClick={toggleMenu} color="#9D5C63"/>
          )
        ) : null}
      </div>
      {(isOpen || !isMobile) && (
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__list}>
            {navigation.map((item, index) => (
              <ListItem
                key={index}
                children={item.children}
                href={item.href}
                isLink={true}
                align="center"
                weight={pathname === item.href ? "600" : "400"}
              />
            ))}
          </ul>
          <Button level="primary" label="Comprar" isButton={false} href="/produtos" />
        </nav>
      )}
    </div>
  );
};
