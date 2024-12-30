"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Navigations } from "@/lib/types";
// import { ThemeModeButton } from "@/components/ThemeModeButton";
import { LocaleButton } from "@/components/locale.button";

export const Navigation = ({ items }: Navigations) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tc = useTranslations("common");
  const t = useTranslations("navigations");

  const isMenuItemActive = (href: string) => {
    // console.log(pathname, href);
    return pathname === href;
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const size = 30;
  const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });

  ListItem.displayName = "ListItem";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-3">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src={IconImage}
              className="block"
              width={size}
              height={size}
              alt="DomainScore"
            /> */}
            <span className="inline-block font-bold">Nextjs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {items.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.trigger && item.childs ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "font-medium",
                            item.href === pathname && "font-extrabold"
                          )}
                        >
                          {t(item.label)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                            {item.childs.map((child) => (
                              <ListItem
                                key={child.label}
                                title={child.label}
                                href={`/category/${child.href}`}
                                className="capitalize"
                              >
                                {child.description}
                              </ListItem>
                            ))}
                            {item.hasMore ? (
                              <ListItem
                                title={tc("more")}
                                href={item.href}
                                className="capitalize border border-muted  bg-gradient-to-b  from-muted/50 to-muted/20"
                              >
                                {tc("moreDesc")}
                              </ListItem>
                            ) : null}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-medium",
                            item.href === pathname && "font-extrabold"
                          )}
                        >
                          {t(item.label)}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block">
            <Button variant="outline" className="text-sm tracking-tight">
              {t("login")}
            </Button>
          </Link>
          <div className="flex items-center gap-1">
            {/* <ThemeModeButton /> */}
            <LocaleButton />
          </div>
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <SheetTrigger asChild>
              <Button
                className="md:hidden"
                size="icon"
                variant="outline"
                aria-label="Menu"
              >
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]" side="right">
              <div className="flex flex-col items-start justify-center">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-lg",
                      isMenuItemActive(item.href) ? "font-bold" : ""
                    )}
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
