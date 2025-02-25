import { useState, useEffect } from "react";

//Hook personalizzato per determinare se la finestra è mobile.
const useIsMobile = (breakpoint = 780) => {
  //Stato che memorizza se la larghezza della finestra è minore o uguale al breakpoint.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    //Funzione che aggiorna lo stato quando la finestra viene ridimensionata.
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    //Aggiungi un listener per il ridimensionamento della finestra.
    window.addEventListener("resize", handleResize);

    //Rimuove il listener quando il componente viene smontato.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]); //Rilancia l'effetto quando il breakpoint cambia.

  return isMobile;
};

export default useIsMobile;
