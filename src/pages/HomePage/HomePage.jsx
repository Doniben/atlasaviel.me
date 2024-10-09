import { useRef } from "react";
import { Footer, Hero, HomeGiftCategories, Invitacion, Navbar, SignificadoAtlas } from "../../components"

export const HomePage = () => {
  const invitacionRef = useRef(null);
  const significadoRef = useRef(null);

  const handleScroll = () => {
    if (invitacionRef.current) {
      invitacionRef.current.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll suave
    }
  };

  const handleScrollToSignificado = () => {
    if (significadoRef.current) {
      significadoRef.current.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll suave a Significado
    }
  };
  return (
    <div>
      <Navbar onConfirmarAsistencia={handleScroll} onSignificadoClick={handleScrollToSignificado} />
      <Hero />
      <div ref={significadoRef}>
        <SignificadoAtlas />
      </div>
      <HomeGiftCategories />
      <div ref={invitacionRef}>
        <Invitacion />
      </div>
      <Footer />
    </div>
  )
}
