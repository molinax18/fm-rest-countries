export type View =
  | {
      type: "home";
    }
  | {
      type: "details";
      cca3: string;
    };

export interface NavigationState {
  view: View;
  navigateToHome: () => void;
  navigateToDetails: (cca3: string) => void;
}
