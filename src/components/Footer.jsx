import React from "react";

// i18
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className={"h-24 text-white bg-[#020617]"}>
      <div className=" py-2 lg:max-w-6xl md:max-w-3xl max-w-sm mx-auto w-full relative z-10">
        <h1 className="pb-2 text-2xl font-bold">
          &lt;/ <span className="text-[#64cbff]">M</span>ariane &gt;
        </h1>
        <hr className="border border-gray-800" />
        <p className="text-center pt-2">
          Copyright &copy; Mariane - {t("footer")}
        </p>{" "}
      </div>
    </section>
  );
};

export default Footer;
