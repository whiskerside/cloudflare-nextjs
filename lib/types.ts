export type NavigationItem = {
  label: string;
  href: string;
  trigger?: boolean;
  hasMore?: boolean;
  description?: string;
  childs?: NavigationItem[];
};

export type Navigations = {
  items: NavigationItem[];
  loginEnabled: boolean;
  langsEnabled: boolean;
  themeSwitched: boolean;
};
