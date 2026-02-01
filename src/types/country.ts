export interface CountryResponse {
  name: Name;
  flags: Flags;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
  cca3: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  deu?: Deu;
  por?: Por;
  jpn?: Jpn;
  eng?: Eng;
  fra?: Fra;
  hin?: Hin;
  ita?: Ita;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Hin {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Currencies {
  EUR?: Eur;
  BRL?: Brl;
  JPY?: Jpy;
  USD?: Usd;
  INR?: Inr;
  ZAR?: Zar;
  CAD?: Cad;
  AUD?: Aud;
}

export interface Eur {
  name: string;
  symbol: string;
}

export interface Brl {
  name: string;
  symbol: string;
}

export interface Jpy {
  name: string;
  symbol: string;
}

export interface Usd {
  name: string;
  symbol: string;
}

export interface Inr {
  name: string;
  symbol: string;
}

export interface Zar {
  name: string;
  symbol: string;
}

export interface Cad {
  name: string;
  symbol: string;
}

export interface Aud {
  name: string;
  symbol: string;
}

export interface Languages {
  deu?: string;
  por?: string;
  jpn?: string;
  eng?: string;
  fra?: string;
  hin?: string;
  afr?: string;
  ita?: string;
}
