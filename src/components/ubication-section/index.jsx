const UbicationSection = () => {
  return (
    <section id="ubication" className="rounded-2xl bg-primary-600 flex flex-col md:flex-row spacey justify-between p-6 md:p-14 mx-5 md:mx-0 mt-36 text-foreground-200">
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-4xl font-semibold">Nuestra ubicación</h3>
        <p className="mt-5 text-base md:text-xl font-light">Estamos convenientemente ubicados en el corazón de Apodaca para brindarte fácil acceso a nuestros servicios. Tu bienestar está a solo un paso de distancia. Aquí está nuestra dirección:</p>
        <p className="mt-2 text-base md:text-xl font-bold">Carretera Mezquital Santa Rosa Esquina con Av. Gaseoducto. Interior Multicomercial Apodaca Planta Alta, Consultorio 360-361 Apodaca, Nuevo Leon, Mexico. CP 66610</p>
      </div>
      <iframe
        height="350"
        className="rounded-2xl w-full md:w-1/2 mt-5 ml-0 md:mt-0 md:ml-5"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1270075515436!2d-100.22427471672411!3d25.794266970055133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ed068b1a00e9%3A0xf0dbf780e3344440!2sMulticomercial%20Apodaca!5e0!3m2!1ses!2smx!4v1699719171027!5m2!1ses!2smx" ></iframe>
    </section>
  )
}

export default UbicationSection