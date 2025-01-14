import React from "react";
import Image from "next/image";
import { Call, Sms } from "iconic-react";
const Footer = () => {
  return (
    <div className="footer bg-slate-900 text-white">
      <div className=" border-gray-700 py-16 px-4 md:px-0 lg:px-0 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-3 md:px-10">
          <div className="mb-4 md:mb-0 flex items-center mx-4">
            <Image
              src="/img/buycars-logo-whiite.webp"
              alt="Buycars"
              width={50}
              height={50}
              className="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="bg-cyan-200 rounded-full p-1 flex flex-col items-start justify-start md:p-1 md:mb-4 md:flex md:items-center md:justify-center">
                <Call size="16" color="#000000" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Llámanos al:</p>
                <a
                  href="tel:+990737621432"
                  className="text-cyan-300 text-sm md:text-[12px] md:font-bold "
                >
                  +56 9 7742 5152
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-cyan-200 rounded-full p-1 mb-4 flex flex-col items-center justify-center md:p-1 md:mb-4 md:flex md:items-center md:justify-center">
                <Sms size="16" color="#000000" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <a
                  href="tel:+990737621432"
                  className="text-cyan-300 text-sm md:text-[12px] md:font-bold"
                >
                  contacto@buycars.cl
                </a>
              </div>
            </div>
          </div>

          {/* Sección de enlaces */}
          <div className="flex space-x-4">
            <div className="text-sm hover:text-gray-300 mx-2">
              <h3 className="text-sm font-semibold text-cyan-300">Horario:</h3>
              Lunes a Viernes 10:00 - 19:00 Hrs. <br /> Sábados de 10:00 - 14:00
              Hrs.
            </div>
            <div className="text-sm hover:text-gray-300 mx-2">
              <h3 className="text-sm font-semibold text-cyan-300">Oficina:</h3>
              Av.Las Condes 10.465 of 202
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-6 border-t border-gray-700 px-3 md:px-10"></div>

        {/* Sección de derechos de autor y enlaces sociales */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-xs mb-4 md:mb-0 mx-3 ">
            Buycars@2024 todos los derechos reservados | Desarrollo por venpu.cl
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
