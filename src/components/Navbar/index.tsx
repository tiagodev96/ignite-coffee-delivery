import { useEffect, useState } from "react";
import {
  LocationAndCartContainer,
  LocationContainer,
  Logo,
  NavbarContainer,
} from "./styles";
import LogoPicture from "@/assets/images/coffee-delivery-logo.svg";
import { states } from "@/utils/state";
import { MapPin } from "@phosphor-icons/react";
import { ShoppingCartControl } from "../ShoppingCartControl";

interface LocationData {
  city: string;
  region: keyof typeof states;
}

export function Navbar() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data: LocationData = await res.json();
        const state = states[data.region] || data.region;
        setLocation(`${data.city}, ${state}`);
      } catch (error) {
        console.error(error);
      }
    };
    getLocation();
  }, []);

  return (
    <NavbarContainer>
      <Logo src={LogoPicture.src} />
      <LocationAndCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>{location}</span>
        </LocationContainer>
        <ShoppingCartControl />
      </LocationAndCartContainer>
    </NavbarContainer>
  );
}
