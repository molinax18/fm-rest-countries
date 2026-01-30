export type View = "home" | "details";

export interface NavigationState {
  view: View;
  navigateTo: (view: View) => void;
}
